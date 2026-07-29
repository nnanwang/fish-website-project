import FishCard from "./FishCard.jsx";

function FeaturedFish({ fish }) {
  const featuredFish = fish.slice(0, 3);

  return (
    <section className="featured-section" id="featured" aria-labelledby="featured-title">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">01 · Data becomes design</p>
          <h2 id="featured-title">Featured fish</h2>
        </div>
        <p>
          React reads all <strong>{fish.length}</strong> fish from one JSON file. The first{" "}
          <strong>{featuredFish.length}</strong> become reusable cards.
        </p>
      </div>

      <div className="fish-grid">
        {featuredFish.map((item, index) => (
          <FishCard key={item.id} fish={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedFish;
