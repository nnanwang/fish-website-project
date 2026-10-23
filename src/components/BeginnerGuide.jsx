import {
  faqItems,
  guideSections,
  sourceNotes,
} from "../data/guideData.js";
import fishImages from "../data/fishImages.js";
import guideCoverImages from "../data/guideImages.js";

// BeginnerGuide is now a short landing page for the complete care guide.
function BeginnerGuide({ onShowPage }) {
  return (
    <section
      className="beginner-guide guide-landing"
      id="guide"
      aria-labelledby="guide-title"
    >
      <header className="page-hero">
        <img
          src={fishImages["macropodus-chinensis"]?.cover?.src}
          alt="圆尾斗鱼的水下照片"
        />
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="eyebrow">BEGINNER FRESHWATER GUIDE</p>
          <h1 id="guide-title">新手淡水鱼饲养指南</h1>
          <p>从选鱼、开缸到健康观察，按主题阅读完整的基础饲养知识。</p>
        </div>
      </header>

      <div className="guide-landing__content">
        <header className="guide-landing__heading">
          <p className="eyebrow">GUIDE TOPICS</p>
          <h2>从一个主题开始</h2>
          <p>每个主题都拥有独立页面和章节目录，可以按照自己的进度阅读。</p>
        </header>

        <div className="guide-topic-grid">
          {guideSections.map((section) => (
            <a
              className="guide-topic-card"
              href={`?page=guide-${section.id}`}
              key={section.id}
              onClick={(event) => {
                event.preventDefault();
                onShowPage(`guide-${section.id}`);
              }}
            >
              <div className="guide-topic-card__header">
                <span>GUIDE {section.number}</span>
                <strong>淡水鱼饲养</strong>
              </div>
              <div className="guide-topic-card__image">
                <img
                  src={guideCoverImages[section.id]}
                  alt={`${section.title}主题封面`}
                />
              </div>
              <div className="guide-topic-card__content">
                <h3>{section.title}</h3>
                <p>{section.summary}</p>
              </div>
              <div className="guide-topic-card__footer">
                <span className="guide-topic-card__link">阅读本主题 →</span>
              </div>
            </a>
          ))}
        </div>

        <section
          className="guide-faq-entry"
          id="guide-faq"
          aria-labelledby="faq-entry-title"
        >
          <header>
            <p className="eyebrow">COMMON QUESTIONS</p>
            <h2 id="faq-entry-title">还有具体问题？</h2>
            <p>从选鱼、设备、水质、喂养、混养和健康问题中快速寻找答案。</p>
          </header>

          <div className="faq-list guide-landing__faq-list">
            {faqItems.map((item, index) => (
              <details className="faq-item" key={item.question}>
                <summary>
                  <span className="faq-item__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <small>{item.category}</small>
                    <strong>{item.question}</strong>
                  </span>
                  <span className="faq-item__icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="source-section guide-landing__sources">
          <div className="source-heading">
            <p className="eyebrow">SOURCES AND NOTES</p>
            <h2>资料来源与说明</h2>
          </div>

          <div className="source-list">
            {sourceNotes.map((note, index) => (
              <article key={note.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{note.title}</h3>
                  <p>{note.scope}</p>
                  <p>
                    <strong>资料来源：</strong>
                    {note.source}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default BeginnerGuide;
