import {
  guideSections,
  healthConditions,
  medicationPrinciples,
  quarantineGuidance,
} from "../data/guideData.js";
import guideCoverImages from "../data/guideImages.js";
import GuideNavigation from "./GuideNavigation.jsx";

// These three subsections contain the complete recommendation lists from the
// supplied guide document. They are independent from fishData.json.
const recommendationTitles = new Set([
  "最推荐",
  "推荐，但有一定痛点",
  "新手进阶",
]);

// GuideTopicPage reuses one layout for each of the four guide subjects.
function GuideTopicPage({ sectionId, onShowPage }) {
  const section = guideSections.find((item) => item.id === sectionId);

  if (!section) {
    return null;
  }

  return (
    <section className="beginner-guide guide-topic-page">
      <header className="page-hero guide-topic-hero">
        <img
          src={guideCoverImages[section.id]}
          alt={`${section.title}主题图片`}
        />
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="页面层级">
            <button type="button" onClick={() => onShowPage("guide")}>
              新手淡水鱼饲养指南
            </button>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{section.title}</span>
          </nav>
          <p className="eyebrow">FRESHWATER CARE GUIDE · {section.number}</p>
          <h1>{section.title}</h1>
          <p>{section.summary}</p>
        </div>
      </header>

      <div className="guide-container">
        <div className="guide-layout">
          <GuideNavigation
            section={section}
            onShowPage={onShowPage}
          />

          <div className="guide-main">
            <article className="guide-card guide-topic-article">
              {section.subsections.map((subsection, subsectionIndex) => {
                const isRecommendationGroup = recommendationTitles.has(
                  subsection.title,
                );
                const isSelectionStandards =
                  subsection.title === "选鱼四条标准";
                const isDifficultyScale =
                  subsection.title === "筛选逻辑与难度分级";
                const isStressSignals =
                  subsection.title === "应激的八个可观察信号";

                return (
                  <section
                    className="guide-subsection"
                    id={`guide-part-${subsectionIndex + 1}`}
                    key={subsection.title}
                  >
                    <h3>{subsection.title}</h3>

                    {subsection.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {isSelectionStandards ? (
                      <div className="selection-standard-grid">
                        {subsection.items.map((item, index) => {
                          const [title, ...description] = item.split("：");

                          return (
                            <article
                              className="selection-standard-card"
                              key={item}
                            >
                              <span aria-hidden="true">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <h4>{title}</h4>
                              <p>{description.join("：")}</p>
                            </article>
                          );
                        })}
                      </div>
                    ) : isDifficultyScale ? (
                      <div className="difficulty-list">
                        {subsection.items.map((item) => {
                          const [label, ...description] = item.split("：");
                          const level = Number.parseInt(label, 10);

                          return (
                            <article className="difficulty-item" key={item}>
                              <div
                                className="difficulty-stars"
                                aria-label={`${level} 星难度`}
                              >
                                {Array.from({ length: 5 }, (_, index) => (
                                  <span
                                    className={
                                      index < level
                                        ? "difficulty-star active"
                                        : "difficulty-star"
                                    }
                                    aria-hidden="true"
                                    key={index}
                                  >
                                    {index < level ? "★" : "☆"}
                                  </span>
                                ))}
                              </div>
                              <p>{description.join("：")}</p>
                            </article>
                          );
                        })}
                      </div>
                    ) : isStressSignals ? (
                      <div className="stress-signal-grid">
                        {subsection.items.map((item) => {
                          const [signal, ...description] = item.split("：");

                          return (
                            <article className="stress-signal-card" key={item}>
                              <h4>{signal}</h4>
                              <p>{description.join("：")}</p>
                            </article>
                          );
                        })}
                      </div>
                    ) : isRecommendationGroup ? (
                      <div className="guide-species-grid">
                        {subsection.items.map((item) => {
                          const [name, ...details] = item.split("：");

                          return (
                            <article className="guide-species-card" key={item}>
                              <h4>{name}</h4>
                              <p>{details.join("：")}</p>
                            </article>
                          );
                        })}
                      </div>
                    ) : (
                      subsection.items &&
                      (subsection.ordered ? (
                        <ol>
                          {subsection.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      ) : (
                        <ul>
                          {subsection.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ))
                    )}
                  </section>
                );
              })}
            </article>

            {section.id === "health" && (
              <>
                <section
                  className="health-guide"
                  id="common-conditions"
                  aria-labelledby="health-guide-title"
                >
                  <div className="health-guide__heading">
                    <div>
                      <p className="eyebrow">FISH HEALTH</p>
                      <h2 id="health-guide-title">常见问题与处理</h2>
                    </div>
                    <p>汇总常见症状、可能原因与基础处理方式。</p>
                  </div>

                  <div className="health-condition-grid">
                    {healthConditions.map((condition) => (
                      <article
                        className="health-condition"
                        key={condition.name}
                      >
                        <h3>{condition.name}</h3>
                        <dl>
                          <div>
                            <dt>表现</dt>
                            <dd>{condition.signs}</dd>
                          </div>
                          <div>
                            <dt>可能原因</dt>
                            <dd>{condition.cause}</dd>
                          </div>
                          <div>
                            <dt>处理方式</dt>
                            <dd>{condition.action}</dd>
                          </div>
                        </dl>
                      </article>
                    ))}
                  </div>

                  <div className="medication-principles" id="medication-guide">
                    <h3>隔离检疫与用药原则</h3>
                    <p>{quarantineGuidance}</p>
                    <ol>
                      {medicationPrinciples.map((principle) => (
                        <li key={principle}>{principle}</li>
                      ))}
                    </ol>
                  </div>
                </section>

                <p className="guide-note">
                  本页提供基础科普信息，不能替代专业诊断。实际处理前应结合鱼种耐受性和正规药品说明。
                </p>
              </>
            )}

            <nav className="guide-page-actions" aria-label="指南页面操作">
              <button type="button" onClick={() => onShowPage("guide")}>
                ← 返回指南首页
              </button>
              <button
                type="button"
                onClick={() => onShowPage("guide", "guide-faq")}
              >
                查看常见问题 →
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuideTopicPage;
