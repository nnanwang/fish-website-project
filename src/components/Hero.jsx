// Store Hero image information in an array so React can create each slide.
const heroSlides = [
  // The first slide uses the main underwater image supplied for the project.
  {
    src: "https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/9F578883-CAB3-4765-84DFA52140C0859A/1E031121-5E32-40B6-9115CC57FF9641E4/WebsiteWebP_XL-shutterstock_1406047421%20-2.webp",
    alt: "蓝色水下环境中的鱼群",
  },

  // The second slide uses a local image from the public folder.
  {
    src: "/images/fish/esox-lucius/juvenile/juvenile pike.jpeg",
    alt: "白斑狗鱼幼体的水下照片",
  },

  // The third slide also uses a local image from the public folder.
  {
    src: "/images/fish/macropodus-chinensis/adult/mate.jpeg",
    alt: "圆尾斗鱼的水下照片",
  },
];

// Hero displays the introduction, calls to action, and scrollable images.
function Hero() {
  // Return one full-width section.
  return (
    // The id allows Home links to scroll back to this section.
    <section className="hero" id="home" aria-labelledby="hero-title">
      {/* This div becomes a horizontal scroll area through CSS. */}
      <div className="hero-gallery" aria-label="可左右滑动的鱼类图片">
        {/* map() creates one slide for every object in heroSlides. */}
        {heroSlides.map((slide, index) => (
          // key gives each generated slide a stable identity.
          <figure className="hero-slide" key={slide.src}>
            {/* Read the image path and accessible description from the slide object. */}
            <img src={slide.src} alt={slide.alt} />

            {/* This empty div creates the dark overlay that improves text contrast. */}
            <div className="hero-overlay" />

            {/* figcaption connects the displayed text to the Hero image. */}
            <figcaption className="hero-content">
              {/* Show the small English brand label. */}
              <p className="hero-eyebrow">CHINESE LOCAL FISHBASE</p>

              {/* Only the first heading receives the id used by aria-labelledby. */}
              <h1 id={index === 0 ? "hero-title" : undefined}>
                欢迎来到 CLFishbase

                {/* Put the second title line on its own line. */}
                <span>探索中国原生鱼类的多样世界</span>
              </h1>

              {/* Introduce the purpose of the student website. */}
              <p className="hero-intro">
                中国观赏鱼市场长期以引进物种为主，但近年来，中国原生鱼正逐渐走进更多玩家的视野。
                许多新手仍缺少清晰、可靠且容易理解的入门资料。CLFishbase
                希望通过图片与结构化数据，帮助你轻松认识中国本土鱼类及常见外来鱼类。
              </p>

              {/* Group the four simple in-page links. */}
              <div className="hero-actions">
                {/* Scroll to the website introduction in the Footer. */}
                <a className="button-primary" href="#about">了解鱼类基础</a>

                {/* The remaining links currently scroll to the fish cards. */}
                <a href="#explore">浏览中国原生鱼</a>
                <a href="#explore">认识常见外来鱼</a>
                <a href="#explore">查询物种资料</a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

// Export Hero so App.jsx can use it.
export default Hero;