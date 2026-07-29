import FishCard from "./FishCard.jsx";

function FeaturedFish({ fishData, imagePaths }) {
  return (
    <section className="featured-fish" id="explore" aria-labelledby="featured-title">
      <div className="section-heading">
        <p className="eyebrow">Explore the collection</p>
        <h2 id="featured-title">Featured Fish</h2>
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
