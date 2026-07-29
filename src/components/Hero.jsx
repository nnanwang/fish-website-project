function Hero({ fishCount }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Class 01 · Web foundations</p>
        <h1 id="hero-title">Discover China’s <em>Freshwater Fish</em></h1>
        <p className="hero-intro">
          Meet five freshwater species while learning how HTML, CSS, React components,
          and JSON work together to make a real website.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#featured">Explore Fish <span aria-hidden="true">↓</span></a>
          <span className="lesson-note">No fish facts are invented.</span>
        </div>
      </div>

      <div className="hero-board" aria-label="Lesson data overview">
        <div className="board-top">
          <span>DATA SPECIMEN</span>
          <span>01 / 05</span>
        </div>
        <div className="fish-shape" aria-hidden="true">
          <span className="fish-tail" />
          <span className="fish-body"><i /></span>
        </div>
        <div className="board-code" aria-hidden="true">
          <p><span>&quot;englishName&quot;</span>: &quot;Northern Snakehead&quot;,</p>
          <p><span>&quot;waterType&quot;</span>: [&quot;freshwater&quot;]</p>
        </div>
        <dl>
          <div><dt>Species</dt><dd>{fishCount}</dd></div>
          <div><dt>Format</dt><dd>JSON</dd></div>
          <div><dt>UI</dt><dd>React</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default Hero;
