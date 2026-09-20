/* ==========================================================================
   js/app.js —— 页面逻辑（一般不需要改这个文件）
   改内容请去 data/places.js
   ========================================================================== */

(function () {
  'use strict';

  var SITE = window.SITE || { title: '三下乡路线图', subtitle: '' };
  var RAW = window.TEAMS;

  /* ========================= 数据校验 ========================= */
  // 检查数据有没有写错，避免手滑导致整页白屏
  var MEDIA_TYPES = ['image', 'video', 'bilibili', 'tencent'];

  function validateMedia(list, tag, errors) {
    var out = [];
    if (list === undefined) return out;
    if (!Array.isArray(list)) {
      errors.push(tag + '的 media 不是一个数组，请检查方括号 [ ]。');
      return out;
    }
    list.forEach(function (m, j) {
      if (!m || typeof m !== 'object') {
        errors.push(tag + ' 第 ' + (j + 1) + ' 条 media 格式不对。');
        return;
      }
      if (MEDIA_TYPES.indexOf(m.type) === -1) {
        errors.push(tag + ' 第 ' + (j + 1) + ' 条 media 的 type 只能是 image / video / bilibili / tencent，现在写的是「' + m.type + '」。');
        return;
      }
      out.push({ type: m.type, src: m.src, caption: m.caption, group: m.group || '' });
    });
    return out;
  }

  function validate(raw) {
    var errors = [];
    if (!Array.isArray(raw)) {
      errors.push('data/places.js 里的 window.TEAMS 不是一个数组，请检查最外层的方括号 [ ] 是否配对。');
      return { teams: [], errors: errors };
    }
    var teams = [];
    raw.forEach(function (t, ti) {
      var tTag = '第 ' + (ti + 1) + ' 支队伍';
      if (!t || typeof t !== 'object') {
        errors.push(tTag + '格式不对，请检查大括号 { } 是否配对。');
        return;
      }
      if (!t.name) errors.push(tTag + '缺少 name。');
      else tTag = '「' + t.name + '」';

      if (!Array.isArray(t.places)) {
        errors.push(tTag + '缺少 places 数组，或 places 不是用方括号 [ ] 包起来的。');
        return;
      }

      var places = [];
      t.places.forEach(function (p, i) {
        var tag = tTag + ' 第 ' + (i + 1) + ' 个地点';
        if (!p || typeof p !== 'object') {
          errors.push(tag + '不是一个有效的对象，请检查大括号 { } 是否配对。');
          return;
        }
        if (!p.name) errors.push(tag + '缺少 name（地点名称）。');
        else tag = tTag + '「' + p.name + '」';

        var coords = p.coords;
        var okCoord = Array.isArray(coords) && coords.length === 2 &&
          isFinite(coords[0]) && isFinite(coords[1]);
        if (!okCoord) {
          errors.push(tag + '的 coords 格式不对，应该是 coords: [纬度, 经度]，例如 [25.8868, 114.5428]。');
          return;
        }

        places.push({
          name: p.name || ('未命名地点' + (i + 1)),
          short: p.short || '',
          date: p.date || '',
          coords: coords,
          summary: p.summary || '',
          intro: p.intro || '',
          media: validateMedia(p.media, tag, errors)
        });
      });

      teams.push({
        id: t.id || ('team' + ti),
        name: t.name || ('未命名队伍' + (ti + 1)),
        color: t.color || '#1f7a4d',
        desc: t.desc || '',
        places: places
      });
    });
    return { teams: teams, errors: errors };
  }

  var result = validate(RAW);
  var teams = result.teams;

  /* ========================= 工具函数 ========================= */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function frameSrc(src) {
    var s = String(src || '').trim();
    if (!s) return '';
    if (s.indexOf('//') === 0) s = 'https:' + s;
    return s;
  }

  function isMobile() {
    return window.matchMedia('(max-width: 720px)').matches;
  }

  function showErrors(errors) {
    var bar = document.getElementById('errbar');
    if (!errors.length) { bar.classList.remove('is-show'); return; }
    bar.innerHTML = '<strong>⚠ 数据文件有 ' + errors.length + ' 处问题，已跳过有问题的条目：</strong><ul>' +
      errors.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>';
    bar.classList.add('is-show');
  }

  /* ========================= 顶栏 ========================= */
  document.title = SITE.title;
  document.getElementById('siteTitle').textContent = SITE.title;
  document.getElementById('siteSubtitle').textContent = SITE.subtitle || '';

  showErrors(result.errors);

  if (!teams.length || !teams.some(function (t) { return t.places.length; })) {
    var b = document.getElementById('errbar');
    b.innerHTML = '<strong>⚠ 没有读到任何地点数据</strong>请打开 data/places.js 检查 window.TEAMS 是否正确填写。';
    b.classList.add('is-show');
  }

  /* ========================= 地图 ========================= */
  var map = L.map('map', { zoomControl: true, attributionControl: true });

  // 高德地图瓦片（中文地名，国内访问快，无需申请 Key）
  L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: ['1', '2', '3', '4'],
    maxZoom: 18,
    minZoom: 3,
    attribution: '地图数据 © 高德地图'
  }).addTo(map);

  map.setView([25.86, 114.60], 11);

  /* ---------- 标记点聚合 ---------- */
  // 缩小地图时，挨得近的标记自动合并成一个大圆点显示数量；
  // 放大到 13 级及以上就自动散开成独立标记。
  var CLUSTER_BREAK_ZOOM = 13;

  function clusterIcon(cluster) {
    var n = cluster.getChildCount();
    var size = n < 10 ? 44 : (n < 100 ? 52 : 60);
    return L.divIcon({
      className: 'cluster-icon',
      html: '<div class="cluster-inner"><span>' + n + '</span></div>',
      iconSize: L.point(size, size)
    });
  }

  var cluster = L.markerClusterGroup({
    maxClusterRadius: 65,
    disableClusteringAtZoom: CLUSTER_BREAK_ZOOM,
    showCoverageOnHover: false,
    spiderfyOnMaxZoom: true,
    removeOutsideVisibleBounds: true,
    animate: true,
    animateAddingMarkers: false,
    iconCreateFunction: clusterIcon,
    spiderLegPolylineOptions: { weight: 2, color: '#1f7a4d', opacity: 0.65 }
  });
  map.addLayer(cluster);

  /* ========================= 队伍切换标签 ========================= */
  var teamsNav = document.getElementById('teams');
  var teamIndex = -1;

  teams.forEach(function (t, i) {
    var btn = document.createElement('button');
    btn.className = 'team-tab';
    btn.type = 'button';
    btn.innerHTML = '<span class="dot"></span>' + esc(t.name);
    btn.addEventListener('click', function () { switchTeam(i); });
    teamsNav.appendChild(btn);
  });

  function paintTabs() {
    Array.prototype.forEach.call(teamsNav.children, function (el, i) {
      el.classList.toggle('is-active', i === teamIndex);
    });
  }

  /* ========================= 单支队伍的渲染 ========================= */
  var markers = [];      // 当前队伍的标记
  var lines = [];        // 当前队伍的路线
  var places = [];       // 当前队伍的地点

  function clearTeam() {
    cluster.clearLayers();
    lines.forEach(function (l) { map.removeLayer(l); });
    lines = [];
    markers = [];
    places = [];
  }

  function renderTeam(t) {
    clearTeam();
    places = t.places;

    document.documentElement.style.setProperty('--team', t.color);

    // 路线连线
    if (places.length > 1) {
      var path = places.map(function (p) { return p.coords; });
      lines.push(L.polyline(path, {
        color: '#ffffff', weight: 9, opacity: 0.75, lineJoin: 'round', lineCap: 'round'
      }).addTo(map));
      lines.push(L.polyline(path, {
        color: t.color, weight: 4, opacity: 0.95,
        dashArray: '12 9', lineJoin: 'round', lineCap: 'round'
      }).addTo(map));
    }

    // 标记点
    places.forEach(function (p, i) {
      var icon = L.divIcon({
        className: 'pin',
        html: '<div class="pin-body"><span>' + (i + 1) + '</span></div>',
        iconSize: [34, 34],
        iconAnchor: [17, 34],
        popupAnchor: [0, -32]
      });
      var mk = L.marker(p.coords, { icon: icon, title: p.name });
      mk.on('click', function () { openPanel(i); });
      markers.push(mk);
      cluster.addLayer(mk);
    });

    // 自动缩放到本队全部地点
    if (places.length > 1) {
      map.fitBounds(L.latLngBounds(places.map(function (p) { return p.coords; })), {
        paddingTopLeft: [40, 150],
        paddingBottomRight: [40, 130]
      });
    } else if (places.length === 1) {
      map.setView(places[0].coords, 13);
    }

    renderTimeline();
  }

  /* ---------- 把地图移到某个地点，并保证它没有被聚合挡住 ---------- */
  function focusPlace(p) {
    var z = Math.max(map.getZoom(), CLUSTER_BREAK_ZOOM);
    map.setView(p.coords, z, { animate: true });
    setTimeout(function () {
      map.panBy(isMobile() ? [0, 120] : [220, 80], { animate: true });
    }, 300);
  }

  /* ========================= 时间轴 ========================= */
  var tl = document.getElementById('timeline');

  function renderTimeline() {
    tl.innerHTML = '';
    places.forEach(function (p, i) {
      var el = document.createElement('div');
      el.className = 'tl-item';
      el.innerHTML =
        '<div class="tl-num">' + (i + 1) + '</div>' +
        '<div class="tl-text">' +
          '<div class="tl-name">' + esc(p.name) + '</div>' +
          '<div class="tl-date">' + esc(p.short || p.date || '') + '</div>' +
        '</div>';
      el.addEventListener('click', function () { openPanel(i); });
      tl.appendChild(el);
    });
  }

  /* ========================= 详情面板 ========================= */
  var panel = document.getElementById('panel');
  var scrim = document.getElementById('scrim');
  var current = -1;

  var PLACEHOLDER_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
    '<circle cx="8.5" cy="8.5" r="1.5"/>' +
    '<path d="M21 15l-5-5L5 21"/></svg>';

  function mediaHTML(m) {
    var cap = m.caption ? '<div class="media-cap">' + esc(m.caption) + '</div>' : '';

    if (m.type === 'image') {
      var s = String(m.src || '').trim();
      if (!s) {
        return '<div class="media-item"><div class="media-ph">' + PLACEHOLDER_SVG +
          '<span>图片位置<br>把照片放进 images 文件夹后，<br>在 data/places.js 里填写文件名</span>' +
          '</div>' + cap + '</div>';
      }
      return '<div class="media-item"><img src="' + esc(s) + '" alt="' + esc(m.caption || '') +
        '" loading="lazy">' + cap + '</div>';
    }

    if (m.type === 'video') {
      var v = String(m.src || '').trim();
      if (!v) {
        return '<div class="media-item"><div class="media-ph">' + PLACEHOLDER_SVG +
          '<span>视频位置<br>把 mp4 放进 videos 文件夹后，<br>在 data/places.js 里填写文件名</span>' +
          '</div>' + cap + '</div>';
      }
      return '<div class="media-item"><video src="' + esc(v) + '" controls preload="metadata" ' +
        'playsinline></video>' + cap + '</div>';
    }

    var f = frameSrc(m.src);
    if (!f) {
      return '<div class="media-item"><div class="media-ph">' + PLACEHOLDER_SVG +
        '<span>视频位置<br>把 B站 / 腾讯视频的播放链接<br>填到 data/places.js 里</span>' +
        '</div>' + cap + '</div>';
    }
    return '<div class="media-item"><div class="embed-box"><iframe src="' + esc(f) +
      '" scrolling="no" frameborder="0" framespacing="0" allowfullscreen="true"></iframe>' +
      '</div>' + cap + '</div>';
  }

  // 图片路径写错时，就地显示提示，而不是留一个破图
  function bindImageFallback(box) {
    Array.prototype.forEach.call(box.querySelectorAll('img'), function (img) {
      img.addEventListener('error', function () {
        var item = img.closest('.media-item');
        if (!item) return;
        var name = img.getAttribute('src') || '';
        var capEl = item.querySelector('.media-cap');
        var capHTML = capEl ? capEl.outerHTML : '';
        item.innerHTML = '<div class="media-ph">' + PLACEHOLDER_SVG +
          '<span>图片加载失败<br>' + esc(name) +
          '<br>请确认文件已放进 images 文件夹，且文件名大小写一致</span></div>' + capHTML;
      });
    });
  }

  function setMarkerActive(i, on) {
    if (i < 0 || !markers[i]) return;
    var el = markers[i].getElement();
    if (el) el.classList.toggle('is-active', !!on);
  }

  function openPanel(i) {
    var p = places[i];
    if (!p) return;

    setMarkerActive(current, false);
    current = i;
    setMarkerActive(i, true);

    document.getElementById('panelTitle').textContent = p.name;
    var dEl = document.getElementById('panelDate');
    if (p.date) { dEl.textContent = p.date; dEl.style.display = ''; }
    else { dEl.style.display = 'none'; }

    var introHTML = String(p.intro || p.summary || '')
      .split(/\n\s*\n/)
      .filter(function (t) { return t.trim(); })
      .map(function (t) { return '<p>' + esc(t.trim()).replace(/\n/g, '<br>') + '</p>'; })
      .join('');
    document.getElementById('panelIntro').innerHTML =
      introHTML || '<p style="color:#8aa79a">（还没有填写介绍文字）</p>';

    var mBox = document.getElementById('panelMedia');
    if (p.media && p.media.length) {
      // group 字段用于在同一地点内分小节
      var html = '<div class="media-title">现场记录</div>';
      var lastGroup = null;
      p.media.forEach(function (m) {
        if (m.group && m.group !== lastGroup) {
          html += '<div class="media-group">' + esc(m.group) + '</div>';
          lastGroup = m.group;
        }
        html += mediaHTML(m);
      });
      mBox.innerHTML = html;
      bindImageFallback(mBox);
    } else {
      mBox.innerHTML = '';
    }

    document.getElementById('panelBody').scrollTop = 0;
    panel.classList.add('is-open');
    if (isMobile()) scrim.classList.add('is-show');

    Array.prototype.forEach.call(tl.children, function (el, k) {
      el.classList.toggle('is-active', k === i);
    });
    if (tl.children[i]) {
      tl.children[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }

    focusPlace(p);
  }

  function closePanel() {
    panel.classList.remove('is-open');
    scrim.classList.remove('is-show');
    setMarkerActive(current, false);
    Array.prototype.forEach.call(tl.children, function (el) {
      el.classList.remove('is-active');
    });
    current = -1;
  }

  document.getElementById('panelClose').addEventListener('click', closePanel);
  scrim.addEventListener('click', closePanel);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closePanel(); closeLightbox(); }
  });

  /* ========================= 图片放大 ========================= */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightboxImg');
  var lbCap = document.getElementById('lightboxCap');

  document.getElementById('panelMedia').addEventListener('click', function (e) {
    var img = e.target.closest ? e.target.closest('img') : null;
    if (!img) return;
    lbImg.src = img.src;
    var item = img.closest('.media-item');
    var cap = item ? item.querySelector('.media-cap') : null;
    lbCap.textContent = cap ? cap.textContent : '';
    lb.classList.add('is-open');
  });

  function closeLightbox() {
    lb.classList.remove('is-open');
    lbImg.src = '';
  }
  lb.addEventListener('click', closeLightbox);

  /* ========================= 切换队伍 ========================= */
  function switchTeam(i) {
    if (i === teamIndex) return;
    stopBus(true);          // 切换队伍时中断大巴车动画
    closePanel();
    teamIndex = i;
    paintTabs();
    renderTeam(teams[i]);
    // 切换后把地图收回全览
    window.scrollTo(0, 0);
  }

  /* ========================= 大巴车行程动画 ========================= */
  var busMarker = null;
  var callout = document.getElementById('routeCallout');
  var playBtn = document.getElementById('playBtn');
  var SEG_SECONDS = 3.0;   // 每段行进时长（秒）——录视频时想快就调小
  var STOP_HOLD = 4.2;     // 到站停留时长（秒，含放大动画）
  var ZOOM_LEVEL = 13;     // 到站后放大到几级
  var ZOOM_SECONDS = 0.9;  // 放大/缩小时长
  var anim = { playing: false, seg: 0, t: 0, holdUntil: 0, lastTs: 0, raf: null, visited: -1 };
  var routeBounds = null;  // 全程范围，用于缩回全览

  function zoomToPlace(i) {
    var p = places[i];
    if (!p) return;
    map.flyTo(p.coords, ZOOM_LEVEL, { duration: ZOOM_SECONDS, easeLinearity: 0.28 });
  }

  function zoomToRoute() {
    if (!routeBounds) return;
    map.flyToBounds(routeBounds, {
      duration: ZOOM_SECONDS,
      paddingTopLeft: [70, 175],
      paddingBottomRight: [70, 155]
    });
  }

  function busIcon() {
    return L.divIcon({
      className: 'bus-icon',
      html: '<div class="bus-body">🚌</div>',
      iconSize: [42, 42],
      iconAnchor: [21, 21]
    });
  }

  function setBusPos(coords) {
    if (!busMarker) {
      busMarker = L.marker(coords, { icon: busIcon(), interactive: false, zIndexOffset: 1200 }).addTo(map);
    } else {
      busMarker.setLatLng(coords);
    }
  }

  function showCallout(i) {
    var p = places[i];
    if (!p) return;
    document.getElementById('rcNum').textContent = i + 1;
    document.getElementById('rcName').textContent = p.name;
    document.getElementById('rcDesc').textContent = p.summary || p.short || '';
    callout.classList.add('is-show');
  }

  function setPlayLabel(icon, text, playing) {
    playBtn.querySelector('.pb-icon').textContent = icon;
    playBtn.querySelector('.pb-text').textContent = text;
    playBtn.classList.toggle('is-playing', !!playing);
  }

  function stopBus(reset) {
    anim.playing = false;
    if (anim.raf) cancelAnimationFrame(anim.raf);
    anim.raf = null;
    anim.lastTs = 0;
    if (reset) {
      if (busMarker) { map.removeLayer(busMarker); busMarker = null; }
      callout.classList.remove('is-show');
      setMarkerActive(current, false);
      setMarkerActive(anim.visited, false);
      anim.seg = 0; anim.t = 0; anim.visited = -1; anim.holdUntil = 0;
      setPlayLabel('▶', '播放行程', false);
    } else {
      setPlayLabel('▶', '继续播放', false);
    }
  }

  function finishBus() {
    anim.playing = false;
    if (anim.raf) cancelAnimationFrame(anim.raf);
    anim.raf = null;
    setPlayLabel('↺', '重播行程', false);
    setTimeout(function () { callout.classList.remove('is-show'); }, 1800);
  }

  function tick(ts) {
    if (!anim.playing) return;
    if (!anim.lastTs) anim.lastTs = ts;
    var dt = Math.min((ts - anim.lastTs) / 1000, 0.12);
    anim.lastTs = ts;

    if (anim.holdUntil) {
      if (ts < anim.holdUntil) { anim.raf = requestAnimationFrame(tick); return; }
      anim.holdUntil = 0;
      zoomToRoute();          // 停留结束，缩回全程视角
    }

    var a = places[anim.seg], b = places[anim.seg + 1];
    if (!a || !b) { finishBus(); return; }

    anim.t += dt / SEG_SECONDS;
    if (anim.t > 1) anim.t = 1;
    setBusPos([
      a.coords[0] + (b.coords[0] - a.coords[0]) * anim.t,
      a.coords[1] + (b.coords[1] - a.coords[1]) * anim.t
    ]);

    if (anim.t >= 1) {
      var arrive = anim.seg + 1;
      if (anim.visited !== arrive) {
        anim.visited = arrive;
        setMarkerActive(arrive - 1, false);
        setMarkerActive(arrive, true);
        showCallout(arrive);
        zoomToPlace(arrive);        // 到站：自动放大到该地点
      }
      anim.holdUntil = ts + STOP_HOLD * 1000;
      anim.seg++;
      anim.t = 0;
    }
    anim.raf = requestAnimationFrame(tick);
  }

  function startBus() {
    if (places.length < 2) return;
    if (busMarker) { map.removeLayer(busMarker); busMarker = null; }
    anim.seg = 0; anim.t = 0; anim.visited = -1; anim.holdUntil = 0; anim.lastTs = 0;
    anim.playing = true;
    routeBounds = L.latLngBounds(places.map(function (p) { return p.coords; }));
    map.fitBounds(routeBounds, {
      paddingTopLeft: [70, 175], paddingBottomRight: [70, 155]
    });
    setBusPos(places[0].coords);
    setTimeout(function () { showCallout(0); }, 260);
    setPlayLabel('⏸', '暂停', true);
    anim.raf = requestAnimationFrame(tick);
  }

  playBtn.addEventListener('click', function () {
    if (anim.playing) { stopBus(false); return; }
    if (anim.visited >= 0 && anim.seg >= places.length - 1) { startBus(); return; }  // 已跑完→重播
    if (anim.seg > 0) {                       // 中途暂停→继续
      anim.playing = true; anim.lastTs = 0;
      setPlayLabel('⏸', '暂停', true);
      anim.raf = requestAnimationFrame(tick);
      return;
    }
    startBus();
  });

  /* ========================= 启动 ========================= */
  var first = teams.findIndex(function (t) { return t.places.length; });
  if (first === -1) first = 0;
  switchTeam(first);

  // 只在窗口宽度明显变化（横竖屏切换）时重新适配，
  // 避免手机上滚动引起地址栏伸缩、反复重置地图
  var lastW = window.innerWidth;
  var rzTimer = null;
  window.addEventListener('resize', function () {
    if (Math.abs(window.innerWidth - lastW) < 80) return;
    lastW = window.innerWidth;
    clearTimeout(rzTimer);
    rzTimer = setTimeout(function () {
      if (places.length > 1) {
        map.fitBounds(L.latLngBounds(places.map(function (p) { return p.coords; })), {
          paddingTopLeft: [40, 150],
          paddingBottomRight: [40, 130]
        });
      }
    }, 260);
  });

})();
