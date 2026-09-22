/* ==========================================================================
   data/places-huanwei.js —— “环保卫士”单队路线图内容数据（给 huanwei.html 用）

   【路线】5 站，按实际行程排：

       第1站  学校集结 · 奔赴上犹县油石乡
       第2站  笔架山 · 生态法治微党课开讲
       第3站  营前农贸市场 · 生态法治摊位开进集市
       第4站  油石嶂 · 徒步踏勘茶山 采集水样
       第5站  河唇村 · 河道清理与人居环境入户摸排

   【标题】标题直接写“到这个地方干了什么”，不用“案例背景”“（一）”这类章节名。

   【正文】新闻稿体，一站一篇，各自独立；事实依据：
       · 《以法治守护“两山”转化》优秀案例
       · 《“环保卫士”社会实践队》新闻稿
       · 《江西环境工程职业学院到上犹县开展暑期大思政实践活动》新闻稿
       · 《江西省高校暑假大思政实践活动优秀实践案例申报表》

   【关于职务】文中只写职务（如“学院党委书记”），未写姓名。

   【坐标】已换算为高德坐标系（GCJ-02）。
         油石嶂为 OSM 实测主峰 25.89299/114.47683（海拔 939.9 米）。
   【素材】和主页面 data/places.js 共用同一批图片视频，不重复占空间。
   ========================================================================== */


window.SITE = {
  title: "以法治守护“两山”转化",
  subtitle: "江西环境工程职业学院环保与城建学院“环保卫士”社会实践队 ｜ 2026年7月2日—8日 · 江西省赣州市上犹县油石乡"
};


window.TEAMS = [

{
  id: "huanweiweshi",
  name: "“环保卫士”社会实践队",
  color: "#1c5d99",
  desc: "法典宣传 · 集市普法 · 田埂调研 · 志愿服务",

  places: [

    /* ================= 第1站 · 学校集结 ================= */
    {
      name: "学校集结 · 奔赴上犹县油石乡",
      short: "集结出发",
      coords: [25.8669, 114.9150],
      summary: "实践队从学校集结出发，赴上犹县油石乡开展 7 天“三下乡”社会实践。",
      intro: "7月2日，江西环境工程职业学院环保与城建学院“环保卫士”社会实践队从学校集结出发，赴赣州市上犹县油石乡开展为期7天的文化科技卫生“三下乡”社会实践。学院党委书记担任实践队队长。\n\n油石乡地处赣南山区，森林覆盖率高，生态资源丰富，是上犹县茶叶主产区之一。近年来，该乡深入践行“绿水青山就是金山银山”理念，围绕上犹县“生态优先、绿色发展”战略，走出了一条生态保护与经济发展协同并进的路子。但生态优势向发展优势转化，既需要产业路径的打通，也需要法治保障的护航——从茶园面源污染防治到河道管护责任落实，从生态产品价值确认到生态损害追责，都迫切需要群众知法、懂法、用法。\n\n正是基于这一现实需求，实践队立足环境专业特长，围绕“法治赣鄱行”主题，将《中华人民共和国生态环境法典》宣传与油石乡“两山”转化实践深度融合。出发前，团队已成立宣讲、调研、宣传三个工作小组，制定实践实施方案与安全应急预案，明确“白天一线服务、晚间集中复盘”工作机制，并落实逐日台账归档安排。",
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

    /* ================= 第2站 · 笔架山微党课 ================= */
    {
      name: "笔架山 · 生态法治微党课开讲",
      short: "书记讲党课",
      coords: [25.8898, 114.5498],
      summary: "学院党委书记讲授生态法治专题微党课，全员完成普法岗前培训。",
      intro: "实践伊始，“环保卫士”社会实践队在笔架山“两山”实践基地参加生态法治专题微党课。学院党委书记、实践队队长以《深入学习生态环境法典 护航绿色高质量发展》为题授课，全体队员参加。\n\n党课系统阐释了法典的立法初衷、核心制度以及乡村场景适用要点，重点讲解生态保护、污染防治、生态损害追责等核心条款。授课中，书记介绍了学院作为章贡区基层立法联系点的实践成果：在《生态环境法典》立法征求意见阶段，学院面向城乡生态治理广泛征集民情民意，报送的立法修改意见被正式采纳。这份全过程人民民主的实践成果，让队员对“法条从哪里来、为谁而立”有了更具体的认识。\n\n课后，实践队随即开展法典专题交流研讨会，结合油石乡茶产业、河道管护、农村人居环境治理实际，逐条研读法典规范、梳理典型案例，打磨通俗化、本土化的宣讲话术，完成全员普法岗前培训，为随后的进村入户宣讲打牢基础。",
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

    /* ================= 第3站 · 营前集市普法 ================= */
    {
      name: "营前农贸市场 · 生态法治摊位开进集市",
      short: "集市普法",
      coords: [25.9298, 114.2836],
      summary: "设“生态法治摊位”，服务群众 360 余人次，发放普法物料 480 余份。",
      intro: "实践队把集市作为普法主阵地，在营前农贸市场设置“生态法治摊位”，面向赶集村民、沿街商户发放图解折页和宣传手册。\n\n摊位前，队员围绕水源地保护、秸秆禁烧、生态损害维权等群众关切问题现场答疑。针对茶农关心的农药包装废弃物回收、茶园面源污染、河道非法采砂等，结合法典条文逐一解答。为让群众听得懂、用得上，队员跳出晦涩的立法表述，用茶农身边事解读“谁污染谁治理”“生态有价、损害担责”，把法条讲成茶乡话。同期，队员还面向往来村民普及防溺水、反诈骗、森林防火、垃圾分类等知识。\n\n实践期间，团队累计服务群众360余人次，发放普法物料480余份。茶农听完连连点头、乡亲围拢咨询的场景，让队员真切体会到：守好绿水青山，就是守住茶产业的金饭碗。",
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

    /* ================= 第4站 · 油石嶂调研监测 ================= */
    {
      name: "油石嶂 · 徒步踏勘茶山 采集水样",
      short: "田埂调研 · 水样监测",
      coords: [25.8930, 114.4768],   // 油石嶂主峰（OSM 实测，海拔 939.9 米）
      summary: "徒步油石嶂踏勘茶山，采集水样，完成监测与访谈 52 人次。",
      intro: "为避免普法脱离乡土实际，实践队深入油石乡田间地头开展田埂调研，用专业监测摸清生态堵点。\n\n油石嶂位于油石乡与梅水乡交界处，主峰海拔939.9米，山间多油茶林、松杉竹木；油石乡是上犹县茶叶主产区之一，全乡茶叶种植面积约3000亩。队员徒步油石嶂，沿路勘测油茶、脐橙等山林植被，向村民宣讲护林法规与“两山”理念；同时走进茶园，走访茶园务工村民和基层群众，细致记录种植环节的生态难题与群众诉求。\n\n在河唇村、水村村和当地特色茶产业基地，队员踏勘油石河河道，携带专业仪器开展水环境水样采集监测，按技术规范采集水样、记录水质变化，并询问生活污水治理、垃圾收运等情况。实践期间，团队累计完成水样监测与入户访谈52人次。\n\n每晚，队员结合当天收集的群众诉求动态调整宣讲侧重，让普法内容更贴合当地农林生产实际；采集的水样带回实验室检测分析，为河道管护和生态损害维权提供数据支撑。团队把专业监测与法治宣传结合起来，让群众看到“生态有价”的现实依据。",
      media: [
        { group: "水环境水样采集监测", type: "image", src: "images/hw_qushui-01.jpg", caption: "实践现场" },
        { group: "水环境水样采集监测", type: "image", src: "images/hw_qushui-02.jpg", caption: "实践现场" },
        { group: "水环境水样采集监测", type: "image", src: "images/hw_qushui-03.jpg", caption: "实践现场" },
        { group: "水环境水样采集监测", type: "image", src: "images/hw_qushui-04.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-01.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-02.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-03.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-04.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-05.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-06.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-07.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-08.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-09.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-10.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-11.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-12.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-13.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-14.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-15.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-16.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-17.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-18.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-19.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-20.jpg", caption: "实践现场" },
        { group: "徒步油石嶂 · 走访茶农", type: "image", src: "images/hw_chayuan-21.jpg", caption: "实践现场" },
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

    /* ================= 第5站 · 河唇村志愿服务 ================= */
    {
      name: "河唇村 · 河道清理与人居环境入户摸排",
      short: "志愿服务 · 成果移交",
      coords: [25.8868, 114.5428],
      summary: "清理河道、入户摸排，形成基层生态普法工作建议移交乡政府。",
      intro: "实践队坚持知行合一，把志愿服务送到群众身边。在河唇村河道，队员开展河道清理行动，清除两岸杂草与垃圾，改善河道周边环境面貌，并走访沿河村民，了解河道管护中遇到的实际难题。\n\n同步，队员分组开展人居环境整治入户摸排，发放环保调查问卷，围绕生活垃圾处置、生活污水排放、垃圾收运、村容村貌提升等内容与村民面对面交流，梳理形成基层生态普法工作建议，并移交油石乡人民政府，供当地生态宣教工作参考。\n\n实践期间，团队发布推文与新闻稿20篇、合计阅读量4万余次，原创新闻稿先后在新华网、中国青年网、中新网等平台刊发，并入选学习强国，江西新闻、江西教育电视台《教育新闻》栏目予以报道。活动结束后，团队开展实践分享，推动把暑期实践延伸为长期校地协同。循着“学、讲、研、践”完整链条，团队以生态环境法典宣传推动“两山”理念转化，用法治护航茶乡生态与产业共赢。",
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
