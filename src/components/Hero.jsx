function Hero({ fishData, imagePaths }) {
  const fishWithImages = fishData.filter((fish) => imagePaths[fish.id]);
  const slogans = [
    "每一条鱼，都有自己的故事",
    "从图片出发，认识水下生命",
    "一起探索丰富多彩的鱼类世界",
    "发现河流与湖泊中的生命",
  ];

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-gallery" aria-label="可左右滑动的鱼类图片">
        {fishWithImages.map((fish, index) => (
          <figure className="hero-slide" key={fish.id}>
            <img
              src={imagePaths[fish.id]}
              alt={fish.images?.cover?.alt || fish.chineseName}
            />
            <div className="hero-overlay" />
            <figcaption className="hero-content">
              <p className="hero-slogan">{slogans[index]}</p>
              <h1 id={index === 0 ? "hero-title" : undefined}>探索水下世界</h1>
              <p>认识不同的鱼类，发现河流、湖泊与海洋中的生命。</p>
              <a href="#explore">开始探索</a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Hero;
