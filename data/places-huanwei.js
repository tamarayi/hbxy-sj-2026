/* ==========================================================================
   data/places-huanwei.js —— “环保卫士”单队路线图内容数据（给 huanwei.html 用）

   【路线怎么排的】
     完全按《以法治守护“两山”转化——江西环境工程职业学院环保卫士社会实践
     团队优秀案例》的章节来，一共 5 站，点位名就是原文的小标题，介绍就是原文段落：

       第1站  一、案例背景                     → 江西环境工程职业学院
       第2站  （一）学深法典，带着“两山”理念出发   → 笔架山 · 两山实践基地
       第3站  （二）集市宣讲，把生态法条讲成茶乡话  → 营前镇 · 营前农贸市场
       第4站  （三）田埂调研，用专业监测摸清生态堵点 → 油石乡 · 河唇村河道
       第5站  （四）知行合一，把普法成果留在乡村    → 油石乡 · 河唇村

   【关于第5站】案例里“河道清理与人居环境入户摸排”实际都在河唇村做，
     和第4站位置几乎重合（相距约 460 米），已确认保持原样。

   【文案】除“介绍”正文逐字取自上述案例外，没有添加任何原文以外的话。
          “三、工作成效”“四、经验启示”两节未单独设站。

   【素材】和主页面 data/places.js 共用同一批图片视频，不重复占空间。
           案例没写到的地方（清湖红色教育基地、上犹臻品体验中心、制茶加工厂、
           水村村稻田），照片按内容归到最接近的板块下，分组标题已标明。
   ========================================================================== */


window.SITE = {
  title: "以法治守护“两山”转化",
  subtitle: "江西环境工程职业学院环保卫士社会实践团队优秀案例 ｜ 2026年7月2日—8日 · 江西省赣州市上犹县油石乡"
};


window.TEAMS = [

{
  id: "huanweiweshi",
  name: "“环保卫士”社会实践队",
  color: "#1c5d99",
  desc: "学深法典 · 集市宣讲 · 田埂调研 · 知行合一",

  places: [

    /* ================= 第1站 · 一、案例背景 ================= */
    {
      name: "一、案例背景",
      short: "江西环境工程职业学院 · 集结出发",
      coords: [25.8669, 114.9150],
      summary: "2026年7月2日—8日，赴上犹县油石乡开展为期 7 天的“法治赣鄱行”暑期社会实践。",
      intro: "上犹县油石乡地处赣南山区，森林覆盖率高，生态资源丰富。近年来，油石乡深入践行“绿水青山就是金山银山”理念，围绕上犹县“生态优先、绿色发展”战略，走出了一条生态保护与经济发展协同并进的路子。\n\n油石乡的“两山”实践表明，生态优势转化为发展优势，既需要产业路径的打通，也需要法治保障的护航。从茶园面源污染防治到河道管护责任落实，从生态产品价值确认到生态损害追责，都迫切需要群众知法、懂法、用法。正是基于这一现实需求，2026年7月2日至8日，江西环境工程职业学院环保与城建学院环保卫士社会实践团队，围绕“法治赣鄱行”主题，赴油石乡开展为期7天的暑期社会实践。团队由10名核心成员和2名指导教师组成，立足环境专业特长，将《中华人民共和国生态环境法典》宣传与油石乡“两山”转化实践深度融合，以法治力量护航“两山”理念在基层落地生根。",
      media: [
        { type: "image", src: "images/common_depart-01.jpg", caption: "集结出发 · 合影" },
        { type: "image", src: "images/common_depart-02.jpg", caption: "集结出发 · 合影" },
        { type: "image", src: "images/common_depart-03.jpg", caption: "集结出发 · 合影" },
        { type: "image", src: "images/common_depart-04.jpg", caption: "集结出发 · 合影" },
        { type: "image", src: "images/common_depart-05.jpg", caption: "集结出发 · 合影" },
        { type: "image", src: "images/common_depart-06.jpg", caption: "集结出发 · 合影" },
        { type: "image", src: "images/common_depart-07.jpg", caption: "集结出发 · 合影" },
        { type: "image", src: "images/common_depart-08.jpg", caption: "集结出发 · 合影" },
        { type: "image", src: "images/common_depart-09.jpg", caption: "集结出发 · 合影" },
        { type: "video", src: "videos/common_depart-01.mp4", caption: "现场视频" },
        { type: "video", src: "videos/common_depart-02.mp4", caption: "现场视频" },
        { type: "video", src: "videos/common_depart-03.mp4", caption: "现场视频" },
        { type: "video", src: "videos/common_depart-04.mp4", caption: "现场视频" }
      ]
    },

    /* ================= 第2站 · （一）学深法典 ================= */
    {
      name: "（一）学深法典，带着“两山”理念出发",
      short: "笔架山 · 两山实践基地",
      coords: [25.8898, 114.5498],
      summary: "校党委书记主讲生态法治专题微党课，先学后讲，打磨茶乡话术。",
      intro: "团队坚持先学后讲。实践伊始，全体队员参加校党委书记主讲的生态法治专题微党课，系统研读《中华人民共和国生态环境法典》，重点掌握生态保护、污染防治、生态损害追责等核心条款。结合油石乡茶产业、河道管护、农村人居环境治理实际，梳理典型案例，打磨通俗化、本土化的宣讲话术，完成全员普法岗前培训。团队成立宣讲、调研、宣传三个工作小组，制定实践实施方案与安全应急预案，落实“白天一线服务、晚间集中复盘”工作机制，逐日归档台账，确保实践有章法、有实效。",
      media: [
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-01.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-02.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-03.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-04.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-05.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-06.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-07.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-08.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-09.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "image", src: "images/hw_bijiashan-10.jpg", caption: "实践现场" },
        { group: "生态法治专题微党课", type: "video", src: "videos/hw_bijiashan-01.mp4", caption: "现场视频" }
      ]
    },

    /* ================= 第3站 · （二）集市宣讲 ================= */
    {
      name: "（二）集市宣讲，把生态法条讲成茶乡话",
      short: "营前农贸市场 · 生态法治摊位",
      coords: [25.9298, 114.2836],
      summary: "设置“生态法治摊位”，把法条讲成茶乡话。",
      intro: "团队把集市作为普法主阵地，设置“生态法治摊位”，面向赶集村民、沿街商户发放图解折页和宣传手册。围绕水源地保护、秸秆禁烧、生态损害维权等群众关切问题现场答疑，尤其针对茶农关心的农药包装废弃物回收、茶园面源污染、河道非法采砂等，结合法典条文逐一解答。团队跳出晦涩的立法表述，用茶农身边事解读“谁污染谁治理”“生态有价、损害担责”，把法条讲成茶乡话。茶农听完连连点头、乡亲围拢咨询的场景，让队员真切体会到：守好绿水青山，就是守住茶产业的金饭碗。",
      media: [
        { type: "image", src: "images/hw_yingqian-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-08.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-09.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-10.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-11.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-12.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-13.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-14.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-15.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_yingqian-16.jpg", caption: "实践现场" }
      ]
    },

    /* ================= 第4站 · （三）田埂调研 ================= */
    {
      name: "（三）田埂调研，用专业监测摸清生态堵点",
      short: "河唇村 · 油石河河道",
      coords: [25.8830, 114.5410],
      summary: "踏勘油石河、采集水样、走访茶农，用专业监测摸清生态堵点。",
      intro: "为避免普法脱离乡土实际，团队同步深入河唇村、水村村和当地特色茶产业基地，走访茶农与基层群众，踏勘油石河河道，携带专业仪器开展水环境水样采集监测，记录水质变化，询问生活污水治理、垃圾收运等情况，摸排乡村生态治理堵点。每晚结合调研收集的群众诉求，动态调整宣讲侧重，让普法内容更贴合当地农林生产实际，也为河道管护和生态损害维权提供数据支撑。团队将专业监测与法治宣传结合，让群众看到“生态有价”的现实依据。",
      media: [
        { group: "水环境水样采集监测", type: "image", src: "images/hw_qushui-01.jpg", caption: "实践现场" },
        { group: "水环境水样采集监测", type: "image", src: "images/hw_qushui-02.jpg", caption: "实践现场" },
        { group: "水环境水样采集监测", type: "image", src: "images/hw_qushui-03.jpg", caption: "实践现场" },
        { group: "水环境水样采集监测", type: "image", src: "images/hw_qushui-04.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-01.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-02.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-03.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-04.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-05.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-06.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-07.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-08.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-09.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-10.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-11.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-12.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-13.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-14.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-15.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-16.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-17.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-18.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-19.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-20.jpg", caption: "实践现场" },
        { group: "走访茶农 · 茶园调研", type: "image", src: "images/hw_chayuan-21.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-01.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-02.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-03.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-04.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-05.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-06.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-07.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-08.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-09.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-10.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-11.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-12.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-13.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-14.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-15.jpg", caption: "实践现场" },
        { group: "深入水村村走访", type: "image", src: "images/hw_shuicun-16.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhicha-01.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhicha-02.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhicha-03.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhicha-04.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhicha-05.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhicha-06.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhicha-07.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhicha-08.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhicha-09.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhenpin-01.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhenpin-02.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhenpin-03.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhenpin-04.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhenpin-05.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhenpin-06.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhenpin-07.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhenpin-08.jpg", caption: "实践现场" },
        { group: "特色茶产业基地调研", type: "image", src: "images/hw_zhenpin-09.jpg", caption: "实践现场" }
      ]
    },

    /* ================= 第5站 · （四）知行合一 ================= */
    {
      name: "（四）知行合一，把普法成果留在乡村",
      short: "河唇村 · 河道清理与入户摸排",
      coords: [25.8868, 114.5428],
      summary: "开展河道清理与入户摸排，把普法成果留在乡村。",
      intro: "团队坚持知行合一，同步开展河道清理与人居环境入户摸排志愿服务，梳理形成基层生态普法工作建议，移交油石乡人民政府供生态宣教工作参考。活动结束后，团队开展实践分享，力求把暑期实践延伸为长期校地协同。循着学、讲、研、践完整链条，团队以生态环境法典宣传推动“两山”理念转化，用法治护航茶乡生态与产业共赢。",
      media: [
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-01.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-02.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-03.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-04.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-05.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-06.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-07.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-08.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-09.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-10.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-11.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-12.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-13.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-14.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-15.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-16.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-17.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-18.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-19.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-20.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-21.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-22.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-23.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-24.jpg", caption: "实践现场" },
        { group: "河道清理志愿服务", type: "image", src: "images/hw_hedao-25.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-01.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-02.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-03.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-04.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-05.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-06.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-07.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-08.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-09.jpg", caption: "实践现场" },
        { group: "人居环境入户摸排", type: "image", src: "images/hw_ruhu-10.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-01.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-02.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-03.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-04.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-05.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-06.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-07.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-08.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-09.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-10.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "image", src: "images/hw_qinghu-11.jpg", caption: "实践现场" },
        { group: "实践分享 · 红色研学", type: "video", src: "videos/hw_qinghu-01.mp4", caption: "现场视频" }
      ]
    }

  ]
}

];
