import {
  guideRecommendationGroups,
  guideSections,
  healthConditions,
  medicationPrinciples,
  quarantineGuidance,
} from "../data/guideData.js";
import fishData from "../data/fishData.json";
import fishImages from "../data/fishImages.js";
import FishCard from "./FishCard.jsx";
import GuideNavigation from "./GuideNavigation.jsx";

const fishByScientificName = new Map(
  fishData.map((fish) => [fish.scientificName, fish]),
);

const guideHeroFish = {
  prepare: "macropodus-chinensis",
  ecosystem: "channa-argus",
  maintenance: "esox-reicherti",
  health: "siniperca-chuatsi",
};

// GuideTopicPage reuses one layout for each of the four guide subjects.
function GuideTopicPage({ sectionId, onShowPage, onFishSelect }) {
  const section = guideSections.find((item) => item.id === sectionId);

  if (!section) {
    return null;
  }

  const heroFishId = guideHeroFish[section.id];

  return (
    <section className="beginner-guide guide-topic-page">
      <header className="page-hero guide-topic-hero">
        <img
          src={fishImages[heroFishId]?.cover?.src}
          alt={`${section.title}主题图片`}
        />
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="eyebrow">FRESHWATER CARE GUIDE · {section.number}</p>
          <h1>{section.title}</h1>
          <p>{section.summary}</p>
        </div>
      </header>

      <div className="guide-container">
        <div className="guide-layout">
          <GuideNavigation
            currentSectionId={section.id}
            section={section}
            onShowPage={onShowPage}
          />

          <div className="guide-main">
            <article className="guide-card guide-topic-article">
              <span className="guide-card__number" aria-hidden="true">
                {section.number}
              </span>
              <h2>{section.title}</h2>
              <p>{section.summary}</p>

              {section.subsections.map((subsection, subsectionIndex) => {
                const recommendationGroup = guideRecommendationGroups.find(
                  (group) => group.title === subsection.title,
                );
                const isSelectionStandards =
                  subsection.title === "选鱼四条标准";

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
                    ) : recommendationGroup ? (
                      <div className="guide-recommendation-group">
                        <p>{recommendationGroup.description}</p>

                        <div className="fish-grid guide-fish-grid">
                          {recommendationGroup.fish.map((guideFish) => {
                            const databaseFish = fishByScientificName.get(
                              guideFish.scientificName,
                            );
                            const displayedFish = databaseFish || guideFish;

                            return (
                              <FishCard
                                key={displayedFish.id}
                                fish={displayedFish}
                                imageSrc={
                                  fishImages[displayedFish.id]?.cover?.src
                                }
                                onSelect={onFishSelect}
                              />
                            );
                          })}
                        </div>

                        <details className="guide-complete-list">
                          <summary>查看这一分级的完整文字参数</summary>
                          <ol>
                            {subsection.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ol>
                        </details>
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
