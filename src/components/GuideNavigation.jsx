import { useState } from "react";

// GuideNavigation lists only the subsections that belong to the current topic.
function GuideNavigation({ section, onShowPage }) {
  // Remember the last subsection selected so the directory can emphasize it.
  const [activeSubsection, setActiveSubsection] = useState("");

  if (!section) {
    return null;
  }

  function getLinkClass(sectionId) {
    return activeSubsection === sectionId ? "active" : "";
  }

  return (
    <aside className="guide-toc guide-page-navigation">
      <nav aria-label={`${section.title}目录`}>
        <p>本页目录</p>

        <button
          type="button"
          onClick={() => onShowPage("guide")}
        >
          ← 返回指南首页
        </button>

        <h2>{section.title}</h2>

        <ol>
          {section.subsections.map((subsection, index) => {
            const subsectionId = `guide-part-${index + 1}`;

            return (
              <li key={subsection.title}>
                <a
                  className={getLinkClass(subsectionId)}
                  href={`#${subsectionId}`}
                  onClick={() => setActiveSubsection(subsectionId)}
                >
                  {subsection.title}
                </a>
              </li>
            );
          })}

          {section.id === "health" && (
            <>
              <li>
                <a
                  className={getLinkClass("common-conditions")}
                  href="#common-conditions"
                  onClick={() => setActiveSubsection("common-conditions")}
                >
                  九种常见问题与疾病处理
                </a>
              </li>
              <li>
                <a
                  className={getLinkClass("medication-guide")}
                  href="#medication-guide"
                  onClick={() => setActiveSubsection("medication-guide")}
                >
                  隔离检疫与用药五原则
                </a>
              </li>
            </>
          )}
        </ol>
      </nav>
    </aside>
  );
}

export default GuideNavigation;
