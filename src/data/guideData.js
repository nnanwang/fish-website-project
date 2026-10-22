// This file contains the complete content from the supplied concise guide.
// Keeping guide content separate from JSX makes the page easier to maintain.
export const guideSections = [
  {
    id: "prepare",
    number: "01",
    title: "养鱼前的准备",
    summary:
      "选鱼不是单纯挑好看，而是要在空间、水质、食物和性格四个维度做匹配，并结合自身经验与混养规则选择健康的个体。",
    subsections: [
      {
        title: "选鱼四条标准",
        ordered: true,
        items: [
          "空间：成体体长不超过缸长的 1/4 到 1/3。必须按成体体型计算，切勿用小缸养金鱼、曼龙等会长大的鱼。",
          "水质：水温与 pH 必须落在同一区间。先查本地自来水硬度与 pH，切勿把喜软水的灯鱼和喜硬水的孔雀鱼混养。",
          "食物：确认能长期稳定买到对应食物，切勿盲目购买只吃活饵的鱼，导致鱼因缺少合适食物而死亡。",
          "性格：评估成年体型差、是否咬鳍及领地性。切勿将斗鱼与孔雀鱼混养，或将大鱼与小鱼混养。",
        ],
      },
      {
        title: "挑鱼与买鱼技巧",
        paragraphs: [
          "人工繁殖多代、适应本地水质的个体远比野生捕捞鱼好养。新手应优先选择本地鱼店稳定进货、已开口吃饲料的鱼。买鱼时观察三点：游姿平稳、体表无白点与破损、腹部不凹陷；伏底、呼吸急促或离群独游的个体不要买。",
        ],
      },
      {
        title: "筛选逻辑与难度分级",
        paragraphs: [
          "选鱼应先满足硬约束，包括鱼缸容量、成体体长、水温与 pH；再看经验门槛，新手建议选择 1–2 星；最后考虑食性、性格、水层和群游等软偏好。",
        ],
        ordered: true,
        items: [
          "1 星：耐受范围宽、容错率高，按流程开缸即可，适合第一缸。",
          "2 星：需要稳定水质，会检测氨与亚硝酸盐，并坚持每周换水。",
          "3 星：对溶氧、水流或温度有明确要求，需要专门的造流或降温设备。",
          "4 星：对空间、活饵或水质有硬性要求，不建议作为第一缸。",
          "5 星：专家级，来源与参数尚不稳定，不建议新手尝试。",
        ],
      },
      {
        title: "20 种常见淡水鱼参数与混养特点",
        paragraphs: [
          "体长、水温与 pH 数据源自 FishBase v26.06；成体体型、最小缸容量与饲养温度源自 Seriously Fish；吻虾虎等原生鱼参数结合《基础知识》中的本地经验值。",
        ],
      },
      {
        title: "最推荐",
        ordered: true,
        items: [
          "斑马鱼（Danio rerio）：成体 3.8 cm，水温 18–25°C，pH 6.0–8.0，最小缸 81 L，杂食，上层活跃爱追咬，宜群养。",
          "白云金丝（Tanichthys albonubes）：成体 4.0 cm，水温 14–22°C，pH 6.0–8.0，最小缸 54 L，杂食，温和群游、耐低温。",
          "孔雀鱼（Poecilia reticulata）：成体 5.0 cm，水温 17–28°C，pH 7.0–8.0，最小缸 41 L，杂食，中上层活动，繁殖快，容易密度失控。",
          "月光鱼（Xiphophorus maculatus）：成体 4.0 cm，水温 20–26°C，pH 7.0–8.0，最小缸 54 L，杂食，中层温和。",
          "宝莲灯（Paracheirodon axelrodi）：成体 3.0 cm，水温 23–29°C，pH 4.0–6.0，最小缸 54 L，杂食偏肉，中层群游、需要软水。",
          "蓝曼龙（Trichopodus trichopterus）：成体 15.0 cm，水温 24–30°C，pH 6.0–8.0，最小缸 81 L，杂食，中层活动，可能欺负小鱼。",
        ],
      },
      {
        title: "推荐，但有一定痛点",
        ordered: true,
        items: [
          "红绿灯（Paracheirodon innesi）：成体 2.5 cm，水温 21–25°C，pH 5.0–7.0，最小缸 54 L，杂食偏肉，中层群游，勿与大口鱼同缸。",
          "泰国斗鱼（Betta splendens）：成体 6.5 cm，水温 22–30°C，pH 6.0–8.0，最小缸 41 L，肉食，上层活动，雄鱼必须单养。",
          "黑裙鱼（Gymnocorymbus ternetzi）：成体 7.5 cm，水温 20–26°C，pH 6.0–8.0，最小缸 68 L，杂食，中层活动，可能咬长鳍鱼。",
          "丽丽鱼（Trichogaster lalius）：成体 9.5 cm，水温 22–27°C，pH 6.0–8.0，最小缸 54 L，杂食，中层胆小，需要密植水草。",
          "咖啡鼠（Corydoras aeneus）：成体 6.5 cm，水温 21–27°C，pH 6.5–8.0，最小缸 72 L，底栖杂食，底层温和，需要细沙底。",
          "花鼠（Corydoras paleatus）：成体 6.0 cm，水温 22–26°C，pH 6.0–7.5，最小缸 70 L，底栖杂食，底层温和，需要细沙底。",
          "高体鳑鲏（Rhodeus ocellatus）：成体 9.2 cm，水温 18–24°C，pH 6.5–7.5，最小缸 54 L，杂食偏藻，中层活动，自然繁殖需要依赖淡水蚌。",
        ],
      },
      {
        title: "新手进阶",
        ordered: true,
        items: [
          "麦氏拟腹吸鳅（Pseudogastromyzon myersi，成体 6.0 cm）与贵州爬岩鳅（Beaufortia kweichowensis，成体 8.0 cm）：均为 3 星，水温 18–24°C，pH 6.5–7.5，最小缸 60 L，藻食，生活在底层急流环境，需要持续水流与高溶氧，水温超过 26°C 容易出现问题。",
          "鳜（Siniperca chuatsi）：成体 70 cm，水温 18–26°C，pH 7.0–7.4，最小缸 300 L，活饵肉食，伏击型，只吃活鱼活虾，不可与任何小鱼混养。",
        ],
      },
      {
        title: "混养五条规则",
        ordered: true,
        items: [
          "体型差不超过一倍。这是硬约束，大鱼嘴能吞下的小鱼一定会被吞，例如 15 cm 曼龙与 3 cm 灯鱼不可混养。",
          "水层与流速一致。这是硬约束，例如急流腹吸鳅与静水斗鱼不可同缸。",
          "食性可以兼容。肉食鱼会吃小鱼，藻食鱼也可能因缺少合适食物而饿死。",
          "评估领地性。同种雄鱼、同色系鱼容易打斗，斗鱼雄鱼必须隔离。",
          "先加入弱势鱼。例如先放灯鱼，两周后再放体型相近的鱼。",
        ],
      },
      {
        title: "兼容性总结",
        paragraphs: [
          "小型群游鱼、卵胎生鳉、底栖鼠鱼、藻食鱼之间通常可以混养，但藻食鱼之间仍需谨慎。斗鱼和曼龙类与小型鱼、鳉鱼、鼠鱼、藻食鱼混养时，需要结合体型、密度与水草躲避空间判断。斗鱼与斗鱼、斗鱼与曼龙不可混养，曼龙同类混养也需谨慎。掠食鱼与任何鱼都不可混养。金鱼仅适合与同类混养，与底栖鼠鱼混养需谨慎，与其他热带小型鱼不可混养。",
        ],
      },
    ],
  },
  {
    id: "ecosystem",
    number: "02",
    title: "鱼缸生态系统搭建",
    summary:
      "鱼缸不是简单的一缸水，而是一套处理废物的生态系统。开缸的本质是花 2–6 周培养硝化细菌群落，建立稳定的氮循环，并配置合适的过滤与基础设备。",
    subsections: [
      {
        title: "氮循环三步曲",
        ordered: true,
        items: [
          "残饵与排泄物被异养细菌分解为剧毒的氨（NH3/NH4+），浓度达到 0.25 ppm 即可引起鱼类应激。",
          "亚硝化菌将氨氧化为剧毒的亚硝酸盐（NO2-），亚硝酸盐会阻碍鱼类血液携氧。",
          "硝化菌将亚硝酸盐氧化为低毒的硝酸盐（NO3-），最后通过换水与植物吸收移除。",
        ],
        paragraphs: [
          "两类硝化细菌繁殖很慢，从零建立需要 2–6 周。市售硝化细菌产品只能加速，不能替代时间。开缸完成的唯一标准是测试数据显示氨和亚硝酸盐归零，而不是“水变清了”。",
        ],
      },
      {
        title: "四周开缸时间表",
        items: [
          "第 0 天：装缸、洗砂、安装设备、注水并除氯。过滤器与加热棒全天运行，稳定水温。",
          "第 1–3 天：不加鱼，按照说明加入硝化细菌启动。水发白通常属于正常菌膜生长。",
          "第 3–14 天：加入氨源，例如少量鱼食或专用氨水。每两天检测一次氨，氨先升高，随后亚硝酸盐升高。",
          "第 14–28 天：继续少量加氨并检测，氨和亚硝酸盐依次回落至 0，硝酸盐上升。",
          "第 28 天：确认氨为 0、亚硝酸盐为 0、硝酸盐低于 40 ppm 后，放入少量试水鱼。观察两周无异常，再逐步增加鱼。",
        ],
      },
      {
        title: "过滤系统的三种功能",
        items: [
          "物理过滤：使用过滤棉、海绵截留粪便与残饵，每 1–2 周用缸水冲洗。",
          "生物过滤：使用生化棉、陶瓷环、生化球培养硝化细菌。只能用缸水轻冲，绝不能用自来水清洗或全部更换。",
          "化学过滤：使用活性炭、树脂吸附色素与残留药物，按照说明更换，平时可以不常驻。",
        ],
      },
      {
        title: "过滤器选型",
        items: [
          "海绵过滤器适合 30–45 cm 小缸或繁殖缸，安静且不会吸入小鱼，但比较占空间。",
          "外挂过滤器适合 45–60 cm 鱼缸，价格较低且容易维护，但滤材较少、流量较小。",
          "滤桶适合 60 cm 以上鱼缸或草缸，滤材多并可外接设备，但清洗相对麻烦。",
          "底滤或背滤适合一体缸，外观整洁，但维护口较窄。",
        ],
        paragraphs: [
          "过滤器流量应按照每小时循环鱼缸容量的 4–6 倍选择。例如 60 L 鱼缸可选择标称 240–360 L/h 的过滤器，标称流量建议按七折估算实际流量。",
        ],
      },
      {
        title: "不同缸型的设备配置",
        items: [
          "30 cm 缸（约 25 L）：海绵或小型外挂过滤器、50 W 加热棒、每天开启 6–8 小时的基础 LED 灯、3–5 cm 细砂、氨/亚硝酸盐/pH 基础测试剂、温度计、除氯剂和捞网。",
          "60 cm 缸（约 60 L）：外挂或小型滤桶、100 W 加热棒、可调光 LED、5 cm 细砂或水草泥，并增加硝酸盐与硬度测试及虹吸管。",
          "90 cm 缸（约 160 L）：流量 700 L/h 以上的滤桶、200 W 加热棒（建议双棒备份）、分时段可调光 LED、5–7 cm 细砂或水草泥、全套试剂或电子笔，并增加备用电源。",
        ],
      },
    ],
  },
  {
    id: "maintenance",
    number: "03",
    title: "日常维护",
    summary:
      "日常维护的关键在于定期监测核心水质指标、坚持每周规范换水，并避开导致生态系统崩溃的常见操作误区。",
    subsections: [
      {
        title: "水质参数目标与检测频率",
        items: [
          "氨（NH3/NH4+）与亚硝酸盐（NO2-）：目标均为 0 ppm。超标说明过滤系统尚未建立或氮循环中断，需要立即换水。开缸期每 2 天检测一次，稳定后每周检测一次。",
          "硝酸盐（NO3-）：目标低于 20–40 ppm。超标通常说明换水不足或饲养密度过高，每周检测。",
          "pH：按照鱼种要求，通常保持在 6.5–7.5。骤变比数值本身更危险，每周检测。",
          "温度：热带鱼通常保持在 24–26°C。波动超过 2°C 会引起应激，每天查看温度计。",
          "溶氧：目标高于 5 mg/L。低于 2–3 mg/L 可能出现浮头，日常观察行为，必要时检测。",
          "余氯：目标为 0。未经除氯的自来水会直接损伤鱼鳃，每次换水前确认。",
        ],
      },
      {
        title: "换水标准流程",
        paragraphs: [
          "每周固定换水一次，每次更换鱼缸容量的 25%–30%，切忌整缸换水。新水必须提前除氯，并且与缸水的温差不超过 1°C。换水时使用虹吸管吸走底砂表面的粪便与残饵，不要只舀上层水。过滤棉只能使用抽出的原缸水清洗，避免自来水中的余氯杀死硝化细菌。换水后观察 24 小时，确认鱼没有夹鳍、浮头或异常游动。",
        ],
      },
      {
        title: "新手必避的六个常见错误",
        ordered: true,
        items: [
          "新缸当天放鱼：氨会迅速升高并可能致死，应先完成四周开缸。",
          "每天大量喂食：残饵腐败会导致氨飙升。每天喂 1–2 次，每次以 1–2 分钟内吃完为准。",
          "整缸换水：菌群与水质会剧烈波动，应每周更换 25%–30%。",
          "使用自来水清洗滤材：氯会杀死硝化细菌并导致循环崩溃，应用原缸水轻洗。",
          "鱼缸放在窗边：阳光直射会造成爆藻与水温剧烈波动，应避开直射光。",
          "一次加满鱼：容易超过过滤负荷，应每两周增加一批，并继续观察一周。",
        ],
      },
    ],
  },
  {
    id: "health",
    number: "04",
    title: "鱼类健康观察",
    summary:
      "大部分“鱼病”本质上是水质问题。发现异常时，应遵循“先查水、再看体表、最后考虑隔离用药”的顺序，切勿盲目向主缸下药。",
    subsections: [
      {
        title: "应激的八个可观察信号",
        ordered: true,
        items: [
          "夹鳍：背鳍和尾鳍收拢贴身，可能与温差过大、氨升高或新环境有关。",
          "浮头：在水面大口呼吸，可能由缺氧、氨中毒或亚硝酸盐中毒引起。",
          "体色变暗：体色发灰、变淡，可能是长期应激或疾病前期表现。",
          "躲藏：长时间躲在角落或水草中，可能受到欺负、光线太强或不适应新缸。",
          "拒食：不进食或吃后吐出，可能与水质差、寄生虫或低温有关。",
          "蹭缸：反复摩擦缸壁或底砂，可能受到体表寄生虫或水质刺激。",
          "乱窜：高速游动并撞击鱼缸，可能由惊吓、pH 骤变或药物刺激引起。",
          "群游散乱：不再成群，可能说明环境不适或受到追咬。",
        ],
      },
      {
        title: "三步判断流程",
        ordered: true,
        items: [
          "查环境：检测氨、亚硝酸盐、硝酸盐、温度、pH 与溶氧。有异常时先换水并修正环境，暂时不要用药。",
          "查体表：当氨与亚硝酸盐均为 0 且温度正常时，观察是否存在白点、绒毛、溃烂、鳍边发白或鳃盖张开。",
          "看影响范围：单条鱼发病时先隔离；全缸发病时，应检查水质与传染源。",
        ],
      },
    ],
  },
];

// These representative fish come directly from the recommendation parameters
// above. They remain separate from fishData.json so the original database is
// not changed merely to support the guide page.
export const guideRecommendationGroups = [
  {
    title: "最推荐",
    description: "耐受范围较宽，适合作为第一缸的代表鱼种。",
    fish: [
      {
        id: "guide-danio-rerio",
        chineseName: "斑马鱼",
        scientificName: "Danio rerio",
        taxonomy: { genus: "Danio" },
        identification: { waterType: ["freshwater"] },
        basicInfo: { maximumLengthCm: 3.8, diet: ["杂食"] },
        habitat: { description: "适宜水温 18–25°C，pH 6.0–8.0；建议最小缸容量 81 L。" },
        appearance: { summary: "上层活动活跃，适合群养，但可能追咬其他鱼。" },
        care: { difficulty: "入门推荐", warning: "建议群养，并预留充足的水平游动空间。" },
      },
      {
        id: "guide-tanichthys-albonubes",
        chineseName: "白云金丝",
        scientificName: "Tanichthys albonubes",
        taxonomy: { genus: "Tanichthys" },
        identification: { waterType: ["freshwater"] },
        basicInfo: { maximumLengthCm: 4, diet: ["杂食"] },
        habitat: { description: "适宜水温 14–22°C，pH 6.0–8.0；建议最小缸容量 54 L。" },
        appearance: { summary: "性格温和、耐低温，是适合群养的小型鱼。" },
        care: { difficulty: "入门推荐", warning: "避免长期处于过高水温。" },
      },
      {
        id: "guide-poecilia-reticulata",
        chineseName: "孔雀鱼",
        scientificName: "Poecilia reticulata",
        taxonomy: { genus: "Poecilia" },
        identification: { waterType: ["freshwater"] },
        basicInfo: { maximumLengthCm: 5, diet: ["杂食"] },
        habitat: { description: "适宜水温 17–28°C，pH 7.0–8.0；建议最小缸容量 41 L。" },
        appearance: { summary: "主要在中上层活动，繁殖速度较快。" },
        care: { difficulty: "入门推荐", warning: "需要提前控制繁殖数量，避免密度失控。" },
      },
    ],
  },
  {
    title: "推荐，但有一定痛点",
    description: "可以饲养，但需要提前处理单养、底砂或繁殖条件等问题。",
    fish: [
      {
        id: "guide-betta-splendens",
        chineseName: "泰国斗鱼",
        scientificName: "Betta splendens",
        taxonomy: { genus: "Betta" },
        identification: { waterType: ["freshwater"] },
        basicInfo: { maximumLengthCm: 6.5, diet: ["肉食"] },
        habitat: { description: "适宜水温 22–30°C，pH 6.0–8.0；建议最小缸容量 41 L。" },
        appearance: { summary: "主要在上层活动，雄鱼具有较强领地性。" },
        care: { difficulty: "入门需注意", warning: "雄鱼必须单养，不建议与孔雀鱼混养。" },
      },
      {
        id: "guide-corydoras-aeneus",
        chineseName: "咖啡鼠",
        scientificName: "Corydoras aeneus",
        taxonomy: { genus: "Corydoras" },
        identification: { waterType: ["freshwater"] },
        basicInfo: { maximumLengthCm: 6.5, diet: ["底栖杂食"] },
        habitat: { description: "适宜水温 21–27°C，pH 6.5–8.0；建议最小缸容量 72 L。" },
        appearance: { summary: "性格温和，主要在鱼缸底层活动。" },
        care: { difficulty: "入门需注意", warning: "需要使用细沙底，避免损伤触须。" },
      },
      {
        id: "guide-rhodeus-ocellatus",
        chineseName: "高体鳑鲏",
        scientificName: "Rhodeus ocellatus",
        taxonomy: { genus: "Rhodeus" },
        identification: { waterType: ["freshwater"] },
        basicInfo: { maximumLengthCm: 9.2, diet: ["杂食偏藻"] },
        habitat: { description: "适宜水温 18–24°C，pH 6.5–7.5；建议最小缸容量 54 L。" },
        appearance: { summary: "主要在中层活动，自然繁殖方式较特殊。" },
        care: { difficulty: "入门需注意", warning: "自然繁殖需要依赖淡水蚌。" },
      },
    ],
  },
  {
    title: "新手进阶",
    description: "对水流、溶氧、空间或食物有明确要求，建议具备基础经验后再尝试。",
    fish: [
      {
        id: "guide-pseudogastromyzon-myersi",
        chineseName: "麦氏拟腹吸鳅",
        scientificName: "Pseudogastromyzon myersi",
        taxonomy: { genus: "Pseudogastromyzon" },
        identification: { waterType: ["freshwater"] },
        basicInfo: { maximumLengthCm: 6, diet: ["藻食"] },
        habitat: { description: "适宜水温 18–24°C，pH 6.5–7.5；生活在底层急流环境。" },
        appearance: { summary: "需要持续水流与高溶氧，建议最小缸容量 60 L。" },
        care: { difficulty: "3 星进阶", warning: "水温超过 26°C 容易出现问题。" },
      },
      {
        id: "guide-beaufortia-kweichowensis",
        chineseName: "贵州爬岩鳅",
        scientificName: "Beaufortia kweichowensis",
        taxonomy: { genus: "Beaufortia" },
        identification: { waterType: ["freshwater"] },
        basicInfo: { maximumLengthCm: 8, diet: ["藻食"] },
        habitat: { description: "适宜水温 18–24°C，pH 6.5–7.5；生活在底层急流环境。" },
        appearance: { summary: "需要持续水流与高溶氧，建议最小缸容量 60 L。" },
        care: { difficulty: "3 星进阶", warning: "水温超过 26°C 容易出现问题。" },
      },
      {
        id: "guide-siniperca-chuatsi",
        chineseName: "鳜",
        scientificName: "Siniperca chuatsi",
        taxonomy: { genus: "Siniperca" },
        identification: { waterType: ["freshwater"] },
        basicInfo: { maximumLengthCm: 70, diet: ["活饵肉食"] },
        habitat: { description: "适宜水温 18–26°C，pH 7.0–7.4；建议最小缸容量 300 L。" },
        appearance: { summary: "大型伏击型肉食鱼，对空间和食物有较高要求。" },
        care: { difficulty: "进阶饲养", warning: "只吃活鱼活虾，不可与任何小鱼混养。" },
      },
    ],
  },
];

export const healthConditions = [
  { name: "白点病", signs: "体表与鱼鳍出现盐粒状白点，并伴随蹭缸。", cause: "由多子小瓜虫（Ichthyophthirius multifiliis）引起，常见诱因包括温差较大或新鱼未检疫。", action: "缓慢升温至 28–30°C，保持一周并配合白点病专用药。预防时，新鱼入缸前应隔离 2–4 周。" },
  { name: "水霉", signs: "伤口或鱼鳍边缘出现白色棉絮状菌丝。", cause: "常与外伤或水质不良有关。", action: "改善水质、隔离并使用抗真菌药。平时注意避免打斗和捞伤。" },
  { name: "烂鳍烂尾", signs: "鱼鳍边缘发白、变短，外观呈破布状。", cause: "常由水质不良或咬伤后继发细菌感染引起。", action: "换水、隔离并使用抗菌药；严重时修剪坏死组织。平时应控制密度并避免咬鳍鱼混养。" },
  { name: "柱状病", signs: "嘴部或背部出现灰白色棉絮状斑，而且发展较快。", cause: "由柱状黄杆菌（Flavobacterium columnare）引起，高温、高密度和水质不良可能增加风险。", action: "立即隔离，使用抗菌药并降低饲养密度。" },
  { name: "鳃吸虫", signs: "鳃盖张开、呼吸急促并且黏液增多。", cause: "可能由新鱼带入。", action: "严格检疫，发病后隔离并使用抗寄生虫药。" },
  { name: "氨中毒", signs: "浮头、鳃部发红，严重时可能突然死亡。", cause: "常见原因包括没有完成养水、过滤系统崩溃或喂食过量。", action: "立即换水 50%、停食并加强过滤。" },
  { name: "亚硝酸盐中毒", signs: "呼吸困难、体色变暗、行动迟钝。", cause: "常与氮循环中断有关。", action: "立即换水、按照说明加盐并停食。" },
  { name: "腹水", signs: "腹部鼓胀、鳞片竖起。", cause: "可能与细菌感染或内脏疾病有关。", action: "隔离、停食并进行抗菌治疗。其治愈率较低，平时不要喂变质饲料。" },
  { name: "肠炎", signs: "排白色透明粪便、腹部凹陷或鼓胀，并伴随拒食。", cause: "可能与饲料变质、低温或寄生虫有关。", action: "停食 1–2 天、升温并使用肠道药。" },
];

export const quarantineGuidance =
  "新鱼入缸前必须单独隔离 2–4 周。隔离缸只需过滤、加热与躲避物，无需造景；隔离水绝不能倒回主缸，捞网等工具应专缸专用，以防交叉感染。";

export const medicationPrinciples = [
  "先水质后药物：氨与亚硝酸盐未归零时，药物治疗无法替代水质处理。",
  "能隔离就隔离：避免全缸下药破坏硝化系统。",
  "规范使用抗生素：不要自行增加剂量，也不要混合使用药物。",
  "用药期间关闭活性炭与紫外线灯，避免药物被吸附或分解。",
  "疗程结束后换水、补充硝化细菌，并重新检测氨与亚硝酸盐。",
];

export const faqItems = [
  { category: "选鱼与买鱼", question: "第一次养鱼，应该选什么？", answer: "选择耐受力强、人工繁殖稳定、体型不超过 5 厘米的小型鱼，例如斑马鱼、白云金丝和孔雀鱼。不要第一次就养鳜、金鱼或野生虾虎。参数参考 FishBase v26.06 与 Seriously Fish。" },
  { category: "选鱼与买鱼", question: "怎么判断一条鱼健不健康？", answer: "看三点：游姿平稳、体表完整无白点、腹部不凹陷。伏在缸底、呼吸急促、离群独游的个体不要买。" },
  { category: "选鱼与买鱼", question: "一次可以买多少条？", answer: "按照成体体型与过滤能力计算。新手第一缸建议先放 6–10 条小型鱼，观察两周后再增加。" },
  { category: "开缸与设备", question: "新缸要泡多久才能放鱼？", answer: "不是泡，而是养菌。通常需要两到四周，直到氨与亚硝酸盐都检测为 0 ppm。标准参考水族氮循环通用规范。" },
  { category: "开缸与设备", question: "开缸时水发白怎么办？", answer: "通常是细菌或悬浮物繁殖，属于正常过程。保持过滤运行，不要频繁换水或下药，几天后通常会自行澄清。" },
  { category: "开缸与设备", question: "过滤器要 24 小时开吗？", answer: "需要。硝化细菌需要持续水流与氧气，停机超过几小时就可能导致菌群死亡，进而引发氮循环崩溃。" },
  { category: "水质", question: "多久换一次水？", answer: "每周一次，每次更换鱼缸容量的 25%–30%。高密度饲养或大型鱼可以增加到每周两次，切忌整缸换水。" },
  { category: "水质", question: "可以直接用自来水吗？", answer: "不可以，必须除氯。可以使用除氯剂，或提前静置 24 小时。自来水中的余氯会直接损伤鱼鳃并杀死硝化细菌。" },
  { category: "水质", question: "换水时温差多大算危险？", answer: "温差超过 2°C 就可能引起鱼类应激。换水时，新水温度应与缸水相差不超过 1°C。" },
  { category: "水质", question: "过滤棉多久洗一次？", answer: "每 1–2 周清洗一次，必须使用抽出的原缸水轻洗。不要使用自来水清洗，也不要一次性更换全部滤材，以免破坏硝化系统。" },
  { category: "喂养", question: "一天喂几次？", answer: "每天 1–2 次，每次投喂量以鱼在 1–2 分钟内吃完为准。宁可少喂，不要多喂，残饵腐败会导致氨迅速飙升。" },
  { category: "混养", question: "斗鱼可以和孔雀鱼一起养吗？", answer: "不推荐。斗鱼可能追咬孔雀鱼飘逸的长鳍，孔雀鱼也可能反过来咬斗鱼的鳍；此外，斗鱼雄鱼之间也必须严格隔离单养。" },
  { category: "健康与疾病", question: "鱼身上有白点是什么？", answer: "最常见的是白点病，由多子小瓜虫（纤毛虫）引起。应缓慢升温至 28–30°C 并保持一周，同时配合白点病专用药治疗。资料参考 Wikipedia 的 Ichthyophthirius multifiliis 词条。" },
  { category: "健康与疾病", question: "鱼一直浮在水面呼吸怎么办？", answer: "这是典型的“浮头”症状。应先检测氨与亚硝酸盐是否超标，再检查溶氧是否不足（低于 2–3 mg/L）。应急处理需要立即换水 30%–50%，并增加水面扰动或打氧。" },
  { category: "健康与疾病", question: "新鱼一定要隔离吗？生病了是全缸下药还是单独隔离？", answer: "新鱼入缸前必须隔离 2–4 周，以防把白点、水霉与寄生虫带入主缸。治疗疾病时也应优先单独隔离下药，因为全缸下药会破坏主缸的硝化系统，并对健康鱼造成负担。" },
];

export const sourceNotes = [
  { title: "鱼类基础生物学参数", scope: "包括 20 种淡水鱼的具体体长，例如斑马鱼 3.8 cm、金鱼 48 cm、鳜 70 cm；适宜水温，例如白云金丝 14–22°C、宝莲灯 23–29°C；以及 pH 范围，例如宝莲灯 pH 4.0–6.0、孔雀鱼 pH 7.0–8.0。", source: "FishBase / SeaLifeBase v26.06（2026 年 6 月快照）。数据采用 CC BY-NC 3.0 许可，非商业使用需要署名 FishBase；商业运营需要提前获得授权。" },
  { title: "饲养空间与鱼缸容量", scope: "包括各鱼种最小饲养水体估算，例如孔雀鱼、泰国斗鱼和小精灵最小 41 L，红绿灯与白云金丝 54 L，斑马鱼与蓝曼龙 81 L，金鱼 200 L，鳜 300 L，以及相应的饲养温度建议。", source: "Seriously Fish（seriouslyfish.com）的成体体型、最小缸容量与缸体尺寸推荐标准。" },
  { title: "原生鱼特殊参数与定水经验", scope: "包括子陵吻虾虎的水温 18–28°C、pH 7.0–7.5 与定水期高应激损耗经验；麦氏拟腹吸鳅和贵州爬岩鳅的水温不超过 26°C 及高溶氧急流要求；鳑鲏繁殖依赖淡水蚌等内容。", source: "原项目文档《基础知识》中的本地原生鱼饲养经验值，并交叉核对 FishBase v26.06。3 星及以上原生鱼的部分参数来自饲养经验，建议结合本地水质复核。" },
  { title: "疾病病原、症状与治疗方法", scope: "包括白点病病原及缓慢升温至 28–30°C 保持一周并配合专用药的疗法；柱状病病原、高温高密度诱因与抗菌隔离疗法；烂鳍烂尾的继发细菌感染、修剪与抗菌处理；以及氨中毒换水 50%、肠炎停食 1–2 天、新鱼隔离 2–4 周等护理方案。", source: "Wikipedia 的相关鱼病词条，以及《新手淡水鱼饲养指南》第四部分的鱼类健康护理规范。" },
  { title: "水质管理核心阈值与日常维护指标", scope: "包括氨致应激阈值 0.25 ppm、氨和亚硝酸盐安全目标 0 ppm、硝酸盐低于 20–40 ppm、溶氧高于 5 mg/L、浮头危险溶氧低于 2–3 mg/L、开缸周期 4 周或 28 天、每周换水 25%–30%、换水温差不超过 1°C、温差超过 2°C 容易应激，以及过滤器每小时循环缸容 4–6 倍。", source: "《新手淡水鱼饲养指南》第二部分 Ecosystem Data 的标准开缸与水质管理规范。" },
];
