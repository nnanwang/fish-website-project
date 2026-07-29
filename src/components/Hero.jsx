function Hero({ fishData, imagePaths }) {
  const fishWithImages = fishData.filter((fish) => imagePaths[fish.id]);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-text">
        <p className="eyebrow">Freshwater fish gallery</p>
        <h1 id="hero-title">Discover the underwater world</h1>
        <p>Explore fish species through images and data.</p>
        <a href="#explore">Explore fish</a>
      </div>

      <div className="hero-gallery" aria-label="Scrollable fish image gallery">
        {fishWithImages.map((fish) => (
          <figure className="hero-image" key={fish.id}>
            <img
              src={imagePaths[fish.id]}
              alt={fish.images?.cover?.alt || `${fish.englishName} fish`}
            />
            <figcaption>{fish.englishName}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Hero;
