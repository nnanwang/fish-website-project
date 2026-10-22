import { useState } from "react";
import { guideSections } from "../data/guideData.js";

// GuideNavigation gives every guide page the same compact directory.
function GuideNavigation({ currentSectionId, section, onShowPage }) {
  // Remember the last subsection selected so the directory can emphasize it.
  const [activeSubsection, setActiveSubsection] = useState("");

  return (
    <aside className="guide-toc guide-page-navigation">
      <nav aria-label="饲养指南目录">
        <p>指南目录</p>

        <button
          type="button"
          className={!currentSectionId ? "active" : ""}
          onClick={() => onShowPage("guide")}
        >
          指南首页
        </button>

        <ol>
          {guideSections.map((guideSection) => {
            const isCurrent = currentSectionId === guideSection.id;

            return (
              <li key={guideSection.id}>
                <button
                  type="button"
                  className={isCurrent ? "active" : ""}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => onShowPage(`guide-${guideSection.id}`)}
                >
                  {guideSection.title}
                </button>

                {isCurrent && section && (
                  <ul className="guide-page-navigation__subsections">
                    {section.subsections.map((subsection, index) => (
                      <li key={subsection.title}>
                        <a
                          className={
                            activeSubsection === `guide-part-${index + 1}`
                              ? "active"
                              : ""
                          }
                          href={`#guide-part-${index + 1}`}
                          onClick={() =>
                            setActiveSubsection(`guide-part-${index + 1}`)
                          }
                        >
                          {subsection.title}
                        </a>
                      </li>
                    ))}
                    {section.id === "health" && (
                      <>
                        <li>
                          <a
                            className={
                              activeSubsection === "common-conditions"
                                ? "active"
                                : ""
                            }
                            href="#common-conditions"
                            onClick={() =>
                              setActiveSubsection("common-conditions")
                            }
                          >
                            常见问题与处理
                          </a>
                        </li>
                        <li>
                          <a
                            className={
                              activeSubsection === "medication-guide"
                                ? "active"
                                : ""
                            }
                            href="#medication-guide"
                            onClick={() =>
                              setActiveSubsection("medication-guide")
                            }
                          >
                            隔离检疫与用药
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </li>
            );
          })}

          <li>
            <button
              type="button"
              onClick={() => onShowPage("guide", "guide-faq")}
            >
              常见问题 FAQ
            </button>
          </li>
        </ol>
      </nav>
    </aside>
  );
}

export default GuideNavigation;
