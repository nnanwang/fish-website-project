import FishCard from "./FishCard.jsx";

function FeaturedFish({ fishData, imagePaths }) {
  return (
    <section className="featured-fish" id="explore" aria-labelledby="featured-title">
      <div className="section-heading">
        <p className="eyebrow">鱼类资料</p>
        <h2 id="featured-title">探索鱼类</h2>
        <p>从我们的鱼类资料中认识不同的物种。</p>
      </div>

      <div className="fish-grid">
        {fishData.map((fish) => (
          <FishCard
            key={fish.id}
            fish={fish}
            imageSrc={imagePaths[fish.id]}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedFish;
