import fishData from "../data/fishData.json";
import fishImages from "../data/fishImages.js";

// Count each species once because the source file may contain repeated IDs.
const uniqueFish = [
  ...new Map(fishData.map((fish) => [fish.id, fish])).values(),
];

// Build the public statistics directly from the current database.
const aboutStats = [
  {
    icon: "fish",
    value: uniqueFish.length,
    label: "种鱼类资料",
  },
  {
    icon: "taxonomy",
    value: new Set(
      uniqueFish.map((fish) => fish.taxonomy?.family).filter(Boolean),
    ).size,
    label: "个鱼类科属",
  },
  {
    icon: "location",
    value: new Set(
      uniqueFish.flatMap((fish) => fish.distribution?.chinaRegions || []),
    ).size,
    label: "个地区标签",
  },
  {
    icon: "compass",
    value: 4,
    label: "种探索方式",
  },
];

// Draw small line icons without installing an icon library.
function StatIcon({ name }) {
  if (name === "fish") {
    return (
      <svg className="about-stat-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12c3.2-4.2 7-6 11-4.8 2.2.7 3.8 2.4 5 4.8-1.2 2.4-2.8 4.1-5 4.8C11 18 7.2 16.2 4 12Z" />
        <path d="m4 12-2.5-3v6L4 12Z" />
        <circle cx="15.5" cy="10.5" r=".7" />
      </svg>
    );
  }

  if (name === "taxonomy") {
    return (
      <svg className="about-stat-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="9" y="2.5" width="6" height="5" rx="1" />
        <rect x="2.5" y="16.5" width="6" height="5" rx="1" />
        <rect x="15.5" y="16.5" width="6" height="5" rx="1" />
        <path d="M12 7.5v4M5.5 16.5v-2.7H18.5v2.7M12 11.5v2.3" />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg className="about-stat-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    );
  }

  return (
    <svg className="about-stat-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-1.5 4.1-4.1 1.5 1.5-4.1 4.1-1.5Z" />
      <path d="M12 1.5v2M12 20.5v2M1.5 12h2M20.5 12h2" />
    </svg>
  );
}

const websiteFeatures = [
  "查看中文名、英文名、学名与分类信息",
  "认识栖息环境、水域类型与分布地区",
  "通过名称、科属、地区和体型筛选资料",
  "根据颜色、斑纹和外形特征查询物种",
  "浏览本地鱼类图片与对应替代文字",
  "阅读开缸、水质维护与鱼类健康指南",
];

const editorialPrinciples = [
  "名称、学名、分类和控制词汇保留资料库中的原始写法。",
  "缺失信息保持空缺，不根据常识自动补写物种资料。",
  "图片优先使用已有的本地文件，并提供清晰的替代文字。",
  "资料更新时同步检查字段结构、图片对应关系与页面显示结果。",
];

function AboutPage() {
  return (
    <section className="about-page" id="about-page" aria-labelledby="about-title">
      <header className="page-hero about-hero">
        <img
          src={fishImages["garra-orientalis"]?.cover?.src}
          alt="东方墨头鱼生活在水下环境中的照片"
        />
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="about-breadcrumb">首页 › 关于我们</p>
          <p className="eyebrow">ABOUT CLFISHBASE</p>
          <h1 id="about-title">中国淡水鱼类资料参考</h1>
          <p>
            汇集鱼类名称、分类、分布、外形与栖息环境，帮助每一位对水下世界感到好奇的人更清晰地认识鱼类。
          </p>
        </div>
      </header>

      <div className="about-page__container">
        <dl className="about-stats" aria-label="当前资料库概览">
          {aboutStats.map((stat) => (
            <div key={stat.label}>
              <dt>
                <StatIcon name={stat.icon} />
                <strong>{stat.value}</strong>
              </dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>

        <section className="about-mission" aria-labelledby="about-mission-title">
          <p className="eyebrow">OUR MISSION</p>
          <h2 id="about-mission-title">我们的使命</h2>
          <p>
            CLFishbase 希望让鱼类资料更容易查找、阅读和理解。无论是想认识一种鱼、比较不同物种，还是从观察到的外形特征开始辨识，都可以在这里找到清晰的入口。
          </p>
          <p>
            网站聚焦中国原生鱼类，同时收录资料库中已有的常见外来淡水鱼。内容以结构化数据呈现，让名称、分类、分布、外形、栖息环境和图片之间保持明确联系。
          </p>
        </section>

        <div className="about-information-grid">
          <section className="about-information" aria-labelledby="about-features-title">
            <p className="eyebrow">WHAT&apos;S INSIDE</p>
            <h2 id="about-features-title">网站内容</h2>
            <ul>
              {websiteFeatures.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true">◆</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="about-information" aria-labelledby="about-data-title">
            <p className="eyebrow">OUR DATA</p>
            <h2 id="about-data-title">关于资料</h2>
            <p>
              每条鱼类记录由本地 JSON 数据驱动。鱼类卡片、详情、搜索筛选和外形查询共用同一份资料，减少不同页面之间的信息偏差。
            </p>
            <p>
              部分记录仍在持续完善。只有资料中明确提供的来源、图片和授权信息才会显示；无法确认的内容不会被推测或补写。
            </p>
          </section>
        </div>

        <section
          className="about-standards"
          aria-labelledby="about-standards-title"
        >
          <p className="eyebrow">EDITORIAL PRINCIPLES</p>
          <h2 id="about-standards-title">内容原则</h2>
          <ol>
            {editorialPrinciples.map((principle, index) => (
              <li key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{principle}</p>
              </li>
            ))}
          </ol>
        </section>

        <p className="about-disclaimer">
          CLFishbase 提供鱼类科普与资料检索内容。物种鉴定、保护状态和饲养处理应结合最新专业资料与实际情况进一步确认。
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
