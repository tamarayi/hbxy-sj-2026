/* ==========================================================================
   data/places-huanwei.js —— “环保卫士”单队路线图内容数据

   【这个文件是干什么的】
     给 huanwei.html 专用：只放“环保卫士”一支队伍，页面不显示队伍切换标签，
     方便单独录“环保卫士”的行程视频。

   【文案来源】《以法治守护“两山”转化——江西环境工程职业学院环保卫士
     社会实践团队优秀案例》，并结合学院一手材料补充细节：
       · 《江西省高校暑假大思政实践活动优秀实践案例申报表》
       · 《“环保卫士”社会实践队》新闻稿
       · 《江西环境工程职业学院到上犹县开展暑期大思政实践活动》新闻稿

   【关于职务】文中只写职务（如“学院党委书记”），未写姓名。

   【结构】window.TEAMS 里只有一支队伍，places 数组就是路线顺序。
   【坐标】已换算为高德坐标系（GCJ-02）。
   【素材】图片 images/<分类id>-序号.jpg，视频 videos/<分类id>-序号.mp4。
           与主页面 data/places.js 共用同一批素材，换图直接替换同名文件即可。
   ========================================================================== */


window.SITE = {
  title: "以法治守护“两山”转化",
  subtitle: "江西环境工程职业学院“环保卫士”社会实践队 ｜ 2026年7月2日—8日 · 江西省赣州市上犹县油石乡"
};


window.TEAMS = [

/* ======================================================================
   “环保卫士”社会实践队 —— 8 项活动，归并为 9 个点位
   叙事主线：学深法典 → 集市宣讲 → 田埂调研 → 知行合一
   ====================================================================== */
{
  id: "huanweiweshi",
  name: "“环保卫士”社会实践队",
  color: "#1c5d99",
  desc: "法典宣传 · 集市普法 · 水质监测 · 河道清理",

  places: [

    {
      name: "江西环境工程职业学院",
      short: "学 · 集结出发",
      coords: [25.8669, 114.9150],
      summary: "10 名核心成员 + 2 名指导教师集结出发，奔赴上犹县油石乡。",
      intro: "上犹县油石乡地处赣南山区，森林覆盖率高，生态资源丰富。近年来，油石乡深入践行“绿水青山就是金山银山”理念，围绕上犹县“生态优先、绿色发展”战略，走出了一条生态保护与经济发展协同并进的路子。\n\n油石乡的“两山”实践表明，生态优势转化为发展优势，既需要产业路径的打通，也需要法治保障的护航。从茶园面源污染防治到河道管护责任落实，从生态产品价值确认到生态损害追责，都迫切需要群众知法、懂法、用法。\n\n正是基于这一现实需求，2026年7月2日至8日，江西环境工程职业学院环保与城建学院“环保卫士”社会实践团队，围绕“法治赣鄱行”主题，赴油石乡开展为期7天的暑期社会实践。团队由10名核心成员和2名指导教师组成，学院党委书记担任实践队队长，立足环境专业特长，将《中华人民共和国生态环境法典》宣传与油石乡“两山”转化实践深度融合，以法治力量护航“两山”理念在基层落地生根。\n\n团队成立宣讲、调研、宣传三个工作小组，制定实践实施方案与安全应急预案，落实“白天一线服务、晚间集中复盘”工作机制，逐日归档台账，确保实践有章法、有实效。",
      media: [
        { type: "image", src: "images/common_depart-01.jpg", caption: "出发 · 合影" },
        { type: "image", src: "images/common_depart-02.jpg", caption: "出发 · 合影" },
        { type: "image", src: "images/common_depart-03.jpg", caption: "出发 · 合影" },
        { type: "image", src: "images/common_depart-04.jpg", caption: "出发 · 合影" },
        { type: "image", src: "images/common_depart-05.jpg", caption: "出发 · 合影" },
        { type: "image", src: "images/common_depart-06.jpg", caption: "出发 · 合影" },
        { type: "image", src: "images/common_depart-07.jpg", caption: "出发 · 合影" },
        { type: "image", src: "images/common_depart-08.jpg", caption: "出发 · 合影" },
        { type: "image", src: "images/common_depart-09.jpg", caption: "出发 · 合影" },
        { type: "video", src: "videos/common_depart-01.mp4", caption: "现场视频" },
        { type: "video", src: "videos/common_depart-02.mp4", caption: "现场视频" },
        { type: "video", src: "videos/common_depart-03.mp4", caption: "现场视频" },
        { type: "video", src: "videos/common_depart-04.mp4", caption: "现场视频" }
      ]
    },

    {
      name: "笔架山 · 两山实践基地",
      short: "学 · 书记讲党课",
      coords: [25.8898, 114.5498],
      summary: "学院党委书记讲授生态法治专题微党课，队员们带着“两山”理念出发。",
      intro: "团队坚持先学后讲。实践伊始，全体队员在笔架山“两山”实践基地参加学院党委书记主讲的生态法治专题微党课。\n\n书记以《深入学习生态环境法典 护航绿色高质量发展》为题，系统阐释法典立法初衷、核心制度以及乡村场景适用要点，带领队员重点掌握生态保护、污染防治、生态损害追责等核心条款。他特别提到：学院作为章贡区基层立法联系点，在《生态环境法典》立法征求意见阶段，面向城乡生态治理广泛征集民情民意，学院报送的立法修改意见被正式采纳——这份全过程人民民主的实践成果，激励青年学子立足专业特长，把法典条文转化为助力乡村振兴的务实举措。\n\n党课结束后，实践队伍开展法典专题交流研讨会，结合油石乡茶产业、河道管护、农村人居环境治理实际，逐条研读法典规范，梳理典型案例，打磨通俗化、本土化的宣讲话术，完成全员普法岗前培训。\n\n带着“两山”理念出发，队员们在理论认知与宣讲能力上同步提升。",
      media: [
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-01.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-02.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-03.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-04.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-05.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-06.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-07.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-08.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-09.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/hw_bijiashan-10.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "video", src: "videos/hw_bijiashan-01.mp4", caption: "现场视频" }
      ]
    },

    {
      name: "油石乡 · 河唇村河道",
      short: "研 · 清理·调查·取样",
      coords: [25.8830, 114.5410],
      summary: "踏勘油石河、采集水样、入户摸排人居环境，用专业监测摸清生态堵点。",
      intro: "为避免普法脱离乡土实际，团队同步深入河唇村开展田埂调研，用专业监测摸清生态堵点。\n\n【水环境监测】结合环境监测专业特长，队员携带专业仪器在河唇村河边踏勘油石河河道、开展水环境水样采集监测，按技术规范采集水样、记录水质变化与现场信息，摸排乡村生态治理堵点。采集的水样带回实验室检测分析，为河道管护和生态损害维权提供数据支撑。团队将专业监测与法治宣传结合，让群众看到“生态有价”的现实依据。\n\n【人居环境调查】队员分组开展人居环境整治入户摸排，发放环保调查问卷，围绕生活垃圾处置、生活污水排放、垃圾收运、村容村貌提升等内容与村民面对面交流，细致记录群众真实诉求，梳理形成基层生态普法工作建议，移交油石乡人民政府供生态宣教工作参考。\n\n【河道环境清理】实践队同步开展河唇村河道清理志愿服务，清除河道两岸杂草与垃圾，改善河道周边环境面貌，并走访沿河村民，了解河道管护的实际难题。\n\n实践期间，团队累计完成水样监测与入户访谈 52 人次。每晚结合调研收集的群众诉求，动态调整宣讲侧重，让普法内容更贴合当地农林生产实际。",
      media: [
        { group: "水质取样监测", type: "image", src: "images/hw_qushui-01.jpg", caption: "实践现场" },
        { group: "水质取样监测", type: "image", src: "images/hw_qushui-02.jpg", caption: "实践现场" },
        { group: "水质取样监测", type: "image", src: "images/hw_qushui-03.jpg", caption: "实践现场" },
        { group: "水质取样监测", type: "image", src: "images/hw_qushui-04.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-01.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-02.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-03.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-04.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-05.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-06.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-07.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-08.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-09.jpg", caption: "实践现场" },
        { group: "人居环境调查", type: "image", src: "images/hw_ruhu-10.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-01.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-02.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-03.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-04.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-05.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-06.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-07.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-08.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-09.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-10.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-11.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-12.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-13.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-14.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-15.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-16.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-17.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-18.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-19.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-20.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-21.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-22.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-23.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-24.jpg", caption: "实践现场" },
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-25.jpg", caption: "实践现场" }
      ]
    },

    {
      name: "茶园与油石嶂",
      short: "研 · 走访调研",
      coords: [25.8900, 114.4818],
      summary: "走访茶农与经营主体，徒步油石嶂开展生态与产业调研。",
      intro: "油石嶂位于上犹县油石乡与梅水乡交界处，主峰海拔 939.9 米，面积约 8 平方公里，山间多油茶林、松杉竹木。油石乡是上犹县茶叶主产区之一，全乡茶叶种植面积约 3000 亩。\n\n【入户走访茶园村民】实践队深入茶园，走访茶园务工村民，细致记录茶园种植过程中的各类生态难题与群众真实诉求——农药包装废弃物往哪儿扔、茶园面源污染怎么防，这些都成了后续普法的鲜活素材。\n\n【油石嶂生态徒步】实践队开展油石嶂生态徒步，沿路勘测油茶、脐橙等山林植被，向村民宣讲护林法规与“两山”理念，开展生态流动宣传。\n\n【产业访谈】队员随后走访笔架山茶园与生态种植合作社，访谈经营主体，探寻农林产业与生态保护协同发展路径。\n\n依托系列实地走访、样本采集与群众访谈成果，实践队统筹梳理法典在农村人居、农林产业、水土资源保护场景下的落地难点，形成适配乡村基层的普法工作思路。",
      media: [
        { type: "image", src: "images/hw_chayuan-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-08.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-09.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-10.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-11.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-12.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-13.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-14.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-15.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-16.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-17.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-18.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-19.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-20.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_chayuan-21.jpg", caption: "实践现场" }
      ]
    },

    {
      name: "制茶加工厂",
      short: "践 · 观摩制茶",
      coords: [25.8952, 114.5568],
      summary: "走进制茶加工厂，观摩绿色茶叶加工工艺。",
      intro: "实践队融合产业实践与专业调研，走进位于笔架山“两山”产业园的制茶加工厂，实地观摩绿色茶叶从摊青、杀青、揉捻到干燥的完整加工工艺流程，了解制茶设备与质量控制环节。\n\n队员们把课堂上的环境工程、生态治理专业知识与生产实际对照起来，重点关注加工环节的清洁生产与废弃物处置，为后续普法宣讲积累了一线案例。",
      media: [
        { type: "image", src: "images/hw_zhicha-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhicha-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhicha-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhicha-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhicha-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhicha-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhicha-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhicha-08.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhicha-09.jpg", caption: "实践现场" }
      ]
    },

    {
      name: "上犹臻品体验中心",
      short: "践 · 助农直播",
      coords: [25.8905, 114.5545],
      summary: "走进上犹臻品体验中心，开展线上助农直播。",
      intro: "“上犹臻品”是上犹县打造的区域公用品牌。实践队走进位于笔架山“两山”产业园的上犹臻品体验中心，了解本地特色农产品的品牌运营与标准化建设情况，并利用晚间开展线上助农直播，推介本土特色茶叶及农产品，助力乡村特色产业发展。\n\n队员用青年视角为家乡好物代言，把生态优势转化为发展优势的“两山”转化路径落到具体实践中。",
      media: [
        { type: "image", src: "images/hw_zhenpin-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhenpin-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhenpin-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhenpin-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhenpin-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhenpin-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhenpin-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhenpin-08.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_zhenpin-09.jpg", caption: "实践现场" }
      ]
    },

    {
      name: "水村村 · 稻田",
      short: "践 · 稻田拔苗",
      coords: [25.8759, 114.5278],
      summary: "稻田拔苗农事体验，在田间树立粮食安全意识。",
      intro: "水村村位于上太线公路沿线西侧，与社溪镇交界，全村 22 个村民小组、总人口 2551 人，以种植水稻、大棚蔬菜为主。\n\n实践队前往水村村开展社会实践，参与稻田拔苗农事体验。队员挽起裤脚踏进水田，亲身感受农耕劳作的辛劳，在田间实践中树立粮食安全意识，让劳动教育真正落到泥土里。",
      media: [
        { type: "image", src: "images/hw_shuicun-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-08.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-09.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-10.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-11.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-12.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-13.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-14.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-15.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_shuicun-16.jpg", caption: "实践现场" }
      ]
    },

    {
      name: "清湖红色教育基地",
      short: "践 · 红色研学",
      coords: [25.8019, 114.5249],
      summary: "参观红色教育基地，观看革命历史影像。",
      intro: "实践队赴清湖革命教育基地开展红色研学。基地位于上犹县东山镇清湖村，占地面积 6000 平方米，以清湖暴动旧址群为依托，以上犹革命史为主要内容。\n\n队员们参观红色教育基地、观看革命历史影像，感悟赣南苏区先辈坚守奉献的红色精神；随后开展红色感悟分享会，在实地研学中厚植爱国爱乡情怀。",
      media: [
        { type: "image", src: "images/hw_qinghu-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-08.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-09.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-10.jpg", caption: "实践现场" },
        { type: "image", src: "images/hw_qinghu-11.jpg", caption: "实践现场" },
        { type: "video", src: "videos/hw_qinghu-01.mp4", caption: "现场视频" }
      ]
    },

    {
      name: "营前镇 · 营前农贸市场",
      short: "讲 · 集市普法",
      coords: [25.9298, 114.2836],
      summary: "设“生态法治摊位”，把生态法条讲成茶乡话。",
      intro: "团队把集市作为普法主阵地，在营前农贸市场设置“生态法治摊位”，面向赶集村民、沿街商户发放图解折页和宣传手册。\n\n围绕水源地保护、秸秆禁烧、生态损害维权等群众关切问题现场答疑，尤其针对茶农关心的农药包装废弃物回收、茶园面源污染、河道非法采砂等，结合法典条文逐一解答。团队跳出晦涩的立法表述，用茶农身边事解读“谁污染谁治理”“生态有价、损害担责”，把法条讲成茶乡话。\n\n茶农听完连连点头、乡亲围拢咨询的场景，让队员真切体会到：守好绿水青山，就是守住茶产业的金饭碗。\n\n同期，队员还面向往来村民普及防溺水、反诈骗、森林防火、垃圾分类知识。\n\n实践期间，团队累计服务群众 360 余人次，发放普法物料 480 余份。",
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
    }

  ]
}

];
