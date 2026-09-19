/* ==========================================================================
   data/places.js —— 路线图内容数据

   【文案来源】依据学院一手材料整理：
     · 《环保与城建学院2026年暑期社会实践活动安排表》
     · 《“环保卫士”社会实践队》新闻稿
     · 《江西环境工程职业学院到上犹县开展暑期大思政实践活动》新闻稿
     · 《江西省高校暑假大思政实践活动优秀实践案例申报表》
     · 《“迎春花”实践队》实践纪实

   【关于职务】文中只写职务（如“学院党委书记”），未写姓名。

   【结构】window.TEAMS = [ 队伍1, 队伍2 ]，每队的 places 数组就是路线顺序。
   【坐标】已换算为高德坐标系（GCJ-02）。标 ⚠️ 的为推算值，建议核准。
   【素材】图片 images/<分类id>-序号.jpg，视频 videos/<分类id>-序号.mp4。
          换素材直接替换同名文件即可，不用改本文件。
   ========================================================================== */


window.SITE = {
  title: "环保与城建学院 · 三下乡实践路线图",
  subtitle: "江西环境工程职业学院 ｜ 江西省赣州市上犹县油石乡"
};


window.TEAMS = [

/* ======================================================================
   “迎春花”实践队 —— 11 项活动，归并为 8 个点位
   ====================================================================== */
{
  id: "yingchunhua",
  name: "“迎春花”实践队",
  color: "#1f7a4d",
  desc: "生态普法 · 红色研学 · 文化调研 · 暖心支教",

  places: [

    {
      name: "江西环境工程职业学院",
      short: "集结出发",
      coords: [25.8669, 114.9150],
      summary: "实践队从学校集结出发，抵达上犹县油石乡。",
      intro: "环保与城建学院“迎春花”实践队从江西环境工程职业学院集结出发，赴上犹县油石乡开展暑期“三下乡”社会实践。\n\n实践队依托城乡规划、环境监测、生态治理等专业优势，围绕生态普法、红色研学、文化调研、暖心支教四个方向制定实践方案，成立宣讲、调研、宣传三个工作小组，制定实践实施方案与安全应急预案，实行“白天一线服务、晚间集中复盘”的工作机制，逐日归档台账，确保实践有章法、有实效。",
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
      name: "笔架山",
      short: "书记讲党课",
      coords: [25.8898, 114.5498],
      summary: "学院党委书记讲授《生态环境法典》专题党课，并看望慰问全体队员。",
      intro: "在笔架山“两山”实践基地，学院党委书记为全体实践队员讲授《深入学习生态环境法典 护航绿色高质量发展》专题党课，并看望慰问扎根乡村、服务基层的实践队员。\n\n党课系统阐释了法典的立法初衷、核心制度以及乡村场景适用要点，重点强调：学院作为章贡区基层立法联系点，在《生态环境法典》立法征求意见阶段，面向城乡生态治理广泛征集民情民意，学院报送的立法修改意见被正式采纳。他以这份全过程人民民主的实践成果激励全体青年学子，号召大家立足环境监测、生态治理专业特长，把法典法律条文转化为助力乡村振兴的务实举措。\n\n党课结束后，实践队伍开展法典专题交流研讨会。队员们逐条研读《生态环境法典》规范，围绕农村人居环境整治、农业面源污染防控等乡村高频生态议题梳理典型普法案例，打磨适配乡村群众的通俗化宣讲内容，实现理论认知与宣讲能力同步提升。\n\n实践队员余岚歆感慨：“以前只是在网上简单浏览法条，今天跟着书记结合茶园实景学习法典，我才真正读懂这部法律和乡村百姓的生活息息相关。”",
      media: [
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/yc_bijiashan-01.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/yc_bijiashan-02.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/yc_bijiashan-03.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/yc_bijiashan-04.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/yc_bijiashan-05.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/yc_bijiashan-06.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/yc_bijiashan-07.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "image", src: "images/yc_bijiashan-08.jpg", caption: "实践现场" },
        { group: "书记讲党课 · 看望慰问全体队员", type: "video", src: "videos/yc_bijiashan-01.mp4", caption: "现场视频" }
      ]
    },

    {
      name: "两山实践基地",
      short: "法典研学·普法",
      coords: [25.8923, 114.5533],
      summary: "内部研学法典后，开展“法治护绿，法典惠民”专场普法宣讲。",
      intro: "【内部研学】实践队在两山实践基地开展集中研学，逐条研读《中华人民共和国生态环境法典》，重点掌握生态保护、污染防治、生态损害追责等核心条款。结合油石乡茶产业、河道管护、农村人居环境治理实际，梳理典型案例，打磨通俗化、本土化的宣讲话术，完成全员普法岗前培训。\n\n【专场宣讲】实践队面向油石乡百余名村民举办《生态环境法典》专题普法宣讲会。宣讲摒弃生硬晦涩的专业法理，结合本地河道管护、茶叶种植、人居环境整治等身边实例以案释法，细致解读污水规范处置、秸秆禁烧、野生动植物保护、生态污染维权等群众密切关注的法律条款。\n\n宣讲现场设置互动答疑环节，队员耐心回应村民关于日常环保权责、污染纠纷处置、绿色惠农政策等各类疑问，清晰界定生态保护法定义务与违法法律后果，引导基层群众树立“学法护绿、守法守山、用法维权”的生态法治自觉，实现集中式、全覆盖、零距离乡村普法。\n\n实践队员陈莉表示：“一开始担心专业法条村民听不懂，我们提前把法律知识改编成茶农、农户能听懂的大白话，看到大家主动提问、主动领取普法手册，我真切感受到普法工作的价值，也体会到青年服务基层的责任。”",
      media: [
        { group: "内部研学《生态环境法典》", type: "image", src: "images/yc_ls_yanxue-01.jpg", caption: "实践现场" },
        { group: "内部研学《生态环境法典》", type: "image", src: "images/yc_ls_yanxue-02.jpg", caption: "实践现场" },
        { group: "内部研学《生态环境法典》", type: "image", src: "images/yc_ls_yanxue-03.jpg", caption: "实践现场" },
        { group: "“法治护绿，法典惠民”专场宣讲", type: "image", src: "images/yc_ls_pufa-01.jpg", caption: "实践现场" },
        { group: "“法治护绿，法典惠民”专场宣讲", type: "image", src: "images/yc_ls_pufa-02.jpg", caption: "实践现场" },
        { group: "“法治护绿，法典惠民”专场宣讲", type: "image", src: "images/yc_ls_pufa-03.jpg", caption: "实践现场" },
        { group: "“法治护绿，法典惠民”专场宣讲", type: "image", src: "images/yc_ls_pufa-04.jpg", caption: "实践现场" },
        { group: "“法治护绿，法典惠民”专场宣讲", type: "image", src: "images/yc_ls_pufa-05.jpg", caption: "实践现场" },
        { group: "“法治护绿，法典惠民”专场宣讲", type: "image", src: "images/yc_ls_pufa-06.jpg", caption: "实践现场" }
      ]
    },

    {
      name: "油石乡 · 河唇村",
      short: "调查·纹样·思政·支教",
      coords: [25.8868, 114.5428],
      summary: "入户人居环境调查、宗祠纹样采集、党群服务中心思政课与暖心支教。",
      intro: "河唇村位于油石乡东北部约 1 公里处，距县城约 10 分钟路程，上太线 S221 穿境而过，与社溪镇接壤，是笔架山“两山”实践生态产业示范园的门户村，也是江西省“十四五”省定乡村振兴重点帮扶村、2023 年江西省乡村振兴示范村。实践队多次进驻该村，是本次实践的主阵地。\n\n【入户人居环境调查】队员走村入户，围绕生活垃圾处置、生活污水排放、村容村貌提升等内容与村民面对面交流，发放环保调查问卷，细致记录群众反映的环境治理难题，为后续专业服务找准基层需求切入点。\n\n【客家宗祠 · 纹样采集】队员走进河唇村客家宗祠与百年罗氏祖祠，实地勘测传统古建结构，系统采集客家民俗纹样素材，围绕乡土建筑保护、人居环境优化等课题与村干部深入交流，留存乡土文脉调研一手资料。\n\n【党群服务中心 · 思政课】在村党群服务中心开展思政课堂，把理论宣讲与乡村实际相结合，引导青年学子在乡土一线坚定理想信念、明确专业服务基层的落脚点。\n\n【党群服务中心 · 暖心支教】实践队聚焦乡村少年成长需求开展暖心支教志愿服务，搭建“思政+安全+语言科普+科学美育”多元趣味课堂，同步开设防溺水安全教育、普通话推广、本土红色故事宣讲、趣味科学实验、石膏娃娃彩绘等特色课程，耐心陪伴低龄孩童学习互动，为乡村留守儿童送去温暖与知识。",
      media: [
        { group: "入户人居环境调查", type: "image", src: "images/yc_ruhu-01.jpg", caption: "实践现场" },
        { group: "入户人居环境调查", type: "image", src: "images/yc_ruhu-02.jpg", caption: "实践现场" },
        { group: "客家宗祠 · 纹样采集", type: "image", src: "images/yc_cizhi-01.jpg", caption: "实践现场" },
        { group: "客家宗祠 · 纹样采集", type: "video", src: "videos/yc_cizhi-01.mp4", caption: "现场视频" },
        { group: "客家宗祠 · 纹样采集", type: "image", src: "images/yc_cizhi-02.jpg", caption: "实践现场" },
        { group: "客家宗祠 · 纹样采集", type: "image", src: "images/yc_cizhi-03.jpg", caption: "实践现场" },
        { group: "客家宗祠 · 纹样采集", type: "image", src: "images/yc_cizhi-04.jpg", caption: "实践现场" },
        { group: "客家宗祠 · 纹样采集", type: "image", src: "images/yc_cizhi-05.jpg", caption: "实践现场" },
        { group: "客家宗祠 · 纹样采集", type: "image", src: "images/yc_cizhi-06.jpg", caption: "实践现场" },
        { group: "客家宗祠 · 纹样采集", type: "image", src: "images/yc_cizhi-07.jpg", caption: "实践现场" },
        { group: "客家宗祠 · 纹样采集", type: "image", src: "images/yc_cizhi-08.jpg", caption: "实践现场" },
        { group: "客家宗祠 · 纹样采集", type: "image", src: "images/yc_cizhi-09.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 思政课", type: "image", src: "images/yc_sizheng-01.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 思政课", type: "image", src: "images/yc_sizheng-02.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 思政课", type: "image", src: "images/yc_sizheng-03.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 思政课", type: "image", src: "images/yc_sizheng-04.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 思政课", type: "image", src: "images/yc_sizheng-05.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 思政课", type: "image", src: "images/yc_sizheng-06.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 思政课", type: "image", src: "images/yc_sizheng-07.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-01.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-02.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-03.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-04.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-05.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-06.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-07.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-08.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-09.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-10.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-11.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-12.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-13.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-14.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-15.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-16.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-17.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-18.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-19.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-20.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-21.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-22.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-23.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-24.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-25.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-26.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-27.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-28.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-29.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-30.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-31.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-32.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-33.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-34.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-35.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-36.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-37.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-38.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-39.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-40.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-41.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-42.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-43.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-44.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-45.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "image", src: "images/yc_zhijiao-46.jpg", caption: "实践现场" },
        { group: "党群服务中心 · 暖心支教", type: "video", src: "videos/yc_zhijiao-01.mp4", caption: "现场视频" }
      ]
    },

    {
      name: "油石乡 · 走访慰问老党员",
      short: "红色寻访",
      coords: [25.8789, 114.5357],
      summary: "分组走访老党员与革命后代，记录红色故事。",
      intro: "实践队分组走访油石乡老党员与革命后代，带着慰问品上门，与老一辈面对面交流，聆听他们扎根基层的奋斗故事，细致记录访谈内容与红色记忆。\n\n走访结束后，实践队召开红色感悟分享会，队员们交流访谈所得，在红色对话中锤炼青年理想信念，把思政课堂搬到了乡土一线。",
      media: [
        { type: "image", src: "images/yc_laodangyuan-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-08.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-09.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-10.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-11.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-12.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-13.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-14.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-15.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-16.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-17.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-18.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-19.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-20.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_laodangyuan-21.jpg", caption: "实践现场" },
        { type: "video", src: "videos/yc_laodangyuan-01.mp4", caption: "现场视频" },
        { type: "video", src: "videos/yc_laodangyuan-02.mp4", caption: "现场视频" }
      ]
    },

    {
      name: "茶博馆 · 传统文化研学",
      short: "茶文化研学",
      coords: [25.8463, 114.4717],
      summary: "走进茶博馆，开展中华传统茶文化研学。",
      intro: "实践队走进茶博馆开展传统文化研学，系统了解上犹茶产业的发展脉络与制茶工艺沿革，在沉浸式体验中感受传统茶文化的魅力，把“两山”转化成果与乡土文化传承结合起来，拓宽乡土文化视野。\n\n⚠️ 本点位坐标暂按梅水乡园村（赣南茶叶第一村）定位，请核实茶博馆确切位置后替换 coords。",
      media: [
        { type: "image", src: "images/yc_chaboguan-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_chaboguan-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_chaboguan-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_chaboguan-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_chaboguan-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_chaboguan-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_chaboguan-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_chaboguan-08.jpg", caption: "实践现场" }
      ]
    },

    {
      name: "清湖红色教育基地",
      short: "红色研学",
      coords: [25.8019, 114.5249],
      summary: "参观清湖革命教育基地，研读本土革命史料。",
      intro: "实践队赴清湖革命教育基地参观学习。基地位于上犹县东山镇清湖村，占地面积 6000 平方米，以清湖暴动旧址群为依托，以上犹革命史为主要内容，以红色文化体验互动为亮点。\n\n队员们聆听红色历史讲解，研读本土革命史料、瞻仰革命老物件，深入了解赣南苏区革命斗争历程，在实地研学中厚植爱国爱乡的红色情怀。",
      media: [
        { type: "image", src: "images/yc_qinghu-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-08.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-09.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-10.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-11.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-12.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_qinghu-13.jpg", caption: "实践现场" }
      ]
    },

    {
      name: "营前镇 · 营前农贸市场",
      short: "集市普法",
      coords: [25.9298, 114.2836],
      summary: "在集市设摊，把生态法条讲成茶乡话。",
      intro: "实践队把集市作为普法主阵地，在营前农贸市场设置“生态法治摊位”，面向赶集村民、沿街商户发放《生态环境法典》单行本、图解折页和宣传手册。\n\n围绕水源地保护、秸秆禁烧、生态损害维权等群众关切问题现场答疑，尤其针对茶农关心的农药包装废弃物回收、茶园面源污染、河道非法采砂等，结合法典条文逐一解答。团队跳出晦涩的立法表述，用茶农身边事解读“谁污染谁治理”“生态有价、损害担责”，把法条讲成茶乡话。\n\n同期，队员还面向往来村民普及防溺水、反诈骗、森林防火、垃圾分类知识，用通俗直白的讲解提升群众安全防护与生态保护意识。",
      media: [
        { type: "image", src: "images/yc_yingqian-01.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-02.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-03.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-04.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-05.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-06.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-07.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-08.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-09.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-10.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-11.jpg", caption: "实践现场" },
        { type: "image", src: "images/yc_yingqian-12.jpg", caption: "实践现场" },
        { type: "video", src: "videos/yc_yingqian-01.mp4", caption: "现场视频" }
      ]
    }

  ]
},


/* ======================================================================
   “环保卫士”实践队 —— 8 项活动，归并为 9 个点位
   ====================================================================== */
{
  id: "huanweiweshi",
  name: "“环保卫士”实践队",
  color: "#1c5d99",
  desc: "河道清理 · 水质监测 · 产业调研 · 红色研学",

  places: [

    {
      name: "江西环境工程职业学院",
      short: "集结出发",
      coords: [25.8669, 114.9150],
      summary: "实践队从学校集结出发，抵达上犹县油石乡。",
      intro: "环保与城建学院“环保卫士”社会实践队从江西环境工程职业学院集结出发，赴上犹县油石乡开展“牢记嘱托强国有我 行走赣鄱感恩奋进——法治赣鄱行”暑期大思政实践活动。\n\n实践队由 10 名核心成员和 2 名指导教师组成，学院党委书记担任实践队队长。团队紧扣“学、讲、研、行”四维工作体系，将《中华人民共和国生态环境法典》宣传与油石乡“两山”转化实践深度融合，构建分层化、场景化、接地气的生态法治宣传矩阵，以专业所长赋能乡村生态治理。",
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
      name: "笔架山",
      short: "书记讲党课",
      coords: [25.8898, 114.5498],
      summary: "学院党委书记讲授《生态环境法典》专题党课，并看望慰问全体队员。",
      intro: "在笔架山“两山”实践基地，学院党委书记、实践队队长专程看望慰问实践小队，对队员扎根乡村、发挥专业特长服务基层的行动予以肯定，并殷切嘱托，让全体队员进一步明晰青年生态服务使命。\n\n书记为全体实践队员讲授《深入学习生态环境法典 护航绿色高质量发展》专题党课，系统阐释法典立法初衷、核心制度以及乡村场景适用要点。他重点强调：学院作为章贡区基层立法联系点，在《生态环境法典》立法征求意见阶段，面向城乡生态治理广泛征集民情民意，学院报送的立法修改意见被正式采纳，以这份全过程人民民主的实践成果激励青年学子立足专业特长，把法典条文转化为助力乡村振兴的务实举措。\n\n党课结束后，实践队伍开展法典专题交流研讨会，逐条研读法典规范，围绕农村人居环境整治、农业面源污染防控等乡村高频生态议题梳理典型案例，实现理论认知与宣讲能力同步提升。",
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
      short: "清理·调查·取样",
      coords: [25.8830, 114.5410],
      summary: "河道两岸环境清理、入户人居环境调查与水质取样监测。",
      intro: "【河道环境清理】实践队抵达油石乡后即开展河唇村河道清理行动，清除河道两岸杂草与垃圾，改善河道周边环境面貌，同步走访沿河村民，了解河道管护的实际难题。\n\n【人居环境调查】队员分组开展人居环境整治与入户摸排，发放环保调查问卷，围绕生活垃圾处置、生活污水排放、村容村貌提升等内容与村民面对面交流，梳理形成基层生态普法工作建议，移交油石乡人民政府供生态宣教工作参考。\n\n【水质取样监测】结合环境监测专业特长，队员携带专业仪器在河唇村河边踏勘河道、开展水环境水样采集监测，按技术规范采集水样、记录现场信息，询问生活污水治理与垃圾收运情况，摸排乡村生态治理堵点。采集的水样带回实验室检测分析，为当地水环境治理与生态损害维权提供科学数据支撑。\n\n实践期间，团队累计完成水样监测与入户访谈 52 人次，以专业监测与法治宣传相结合的方式，让群众看到“生态有价”的现实依据。",
      media: [
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
        { group: "河道环境清理", type: "image", src: "images/hw_hedao-25.jpg", caption: "实践现场" },
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
        { group: "水质取样监测", type: "image", src: "images/hw_qushui-01.jpg", caption: "实践现场" },
        { group: "水质取样监测", type: "image", src: "images/hw_qushui-02.jpg", caption: "实践现场" },
        { group: "水质取样监测", type: "image", src: "images/hw_qushui-03.jpg", caption: "实践现场" },
        { group: "水质取样监测", type: "image", src: "images/hw_qushui-04.jpg", caption: "实践现场" }
      ]
    },

    {
      name: "茶园与油石嶂",
      short: "走访调研",
      coords: [25.8900, 114.4818],
      summary: "走访茶园务工村民，徒步油石嶂开展生态与产业调研。",
      intro: "油石嶂位于上犹县油石乡与梅水乡交界处，主峰海拔 939.9 米，面积约 8 平方公里，山间多油茶林、松杉竹木。油石乡是上犹县茶叶主产区之一，全乡茶叶种植面积约 3000 亩。\n\n【入户走访茶园村民】实践队深入茶园，走访茶园务工村民，细致记录茶园种植过程中的各类生态难题与群众真实诉求，为后续精准普法提供现实依据。\n\n【油石嶂生态徒步】实践队开展油石嶂生态徒步，沿路勘测油茶、脐橙等山林植被，向村民宣讲护林法规与“两山”理念，开展生态流动宣传。\n\n【产业访谈】队员随后走访笔架山茶园与生态种植合作社，访谈经营主体，探寻农林产业与生态保护协同发展路径。\n\n依托系列实地走访、样本采集与群众访谈成果，实践队统筹梳理法典在农村人居、农林产业、水土资源保护场景下的落地难点，形成适配乡村基层的普法工作思路。",
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
      short: "观摩制茶",
      coords: [25.8839, 114.5149],
      summary: "走进制茶加工厂，观摩绿色茶叶加工工艺。",
      intro: "实践队融合产业实践与专业调研，走进当地制茶加工厂，实地观摩绿色茶叶从摊青、杀青、揉捻到干燥的完整加工工艺流程，了解制茶设备与质量控制环节。\n\n队员们把课堂上的环境工程、生态治理专业知识与生产实际对照起来，重点关注加工环节的清洁生产与废弃物处置，为后续普法宣讲积累了一线案例。",
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
      short: "助农直播",
      coords: [25.7964, 114.5389],
      summary: "走进上犹臻品体验中心，开展线上助农直播。",
      intro: "“上猷臻品”是上犹县打造的区域公用品牌。实践队走进上犹臻品体验中心，了解本地特色农产品的品牌运营与标准化建设情况，并利用晚间开展线上助农直播，推介本土特色茶叶及农产品，助力乡村特色产业发展。\n\n队员用青年视角为家乡好物代言，把生态优势转化为发展优势的“两山”转化路径落到具体实践中。\n\n⚠️ 本点位坐标暂置于上犹县城，请核实体验中心确切位置后替换。",
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
      short: "稻田拔苗",
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
      short: "红色研学",
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
      short: "集市普法",
      coords: [25.9298, 114.2836],
      summary: "在集市设摊宣讲，把生态法条讲成茶乡话。",
      intro: "实践队把集市作为普法主阵地，在营前农贸市场设置“生态法治摊位”，面向赶集村民、沿街商户发放图解折页和宣传手册。\n\n围绕水源地保护、秸秆禁烧、生态损害维权等群众关切问题现场答疑，尤其针对茶农关心的农药包装废弃物回收、茶园面源污染、河道非法采砂等，结合法典条文逐一解答。团队跳出晦涩的立法表述，用茶农身边事解读“谁污染谁治理”“生态有价、损害担责”，把法条讲成茶乡话。\n\n茶农听完连连点头、乡亲围拢咨询的场景，让队员真切体会到：守好绿水青山，就是守住茶产业的金饭碗。同期，队员还面向往来村民普及防溺水、反诈骗、森林防火、垃圾分类知识。",
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
