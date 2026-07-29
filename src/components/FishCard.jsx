import { useState } from "react";

function FishCard({ fish, index }) {
  const [showData, setShowData] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const detailsId = `fish-data-${fish.id}`;
  const waterTypes = fish.identification.waterType.join(", ");

  return (
    <article className="fish-card">
      <div className="fish-image">
        {!imageFailed ? (
          <img
            src={fish.images.cover.src}
            alt={fish.images.cover.alt}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="image-placeholder" role="img" aria-label={`Image unavailable. ${fish.images.cover.alt}`}>
            <span className="placeholder-fish" aria-hidden="true">◖</span>
            <p>Image not available yet</p>
            <small>The card still works because text and image data are separate.</small>
          </div>
        )}
        <span className="card-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="fish-card-content">
        <div className="card-labels">
          <span>{waterTypes}</span>
          <span>JSON → UI</span>
        </div>
        <h3>{fish.englishName}</h3>
        <p className="chinese-name" lang="zh">{fish.chineseName}</p>
        <p className="scientific-name"><i>{fish.scientificName}</i></p>
        <p className="habitat">{fish.habitat.description}</p>

        <button
          className="data-toggle"
          type="button"
          aria-expanded={showData}
          aria-controls={detailsId}
          onClick={() => setShowData((current) => !current)}
        >
          <span>{showData ? "Hide data" : "Show data behind this card"}</span>
          <span aria-hidden="true">{showData ? "−" : "+"}</span>
        </button>

        {showData && (
          <div className="data-behind-card" id={detailsId}>
            <p className="data-caption">The left side is the JSON path. The right side is what React reads.</p>
            <dl>
              <div><dt>fish.englishName</dt><dd>{fish.englishName}</dd></div>
              <div><dt>fish.scientificName</dt><dd>{fish.scientificName}</dd></div>
              <div><dt>fish.images.cover.src</dt><dd>{fish.images.cover.src}</dd></div>
              <div><dt>fish.identification.waterType</dt><dd>[{waterTypes}]</dd></div>
            </dl>
          </div>
        )}
      </div>
    </article>
  );
}

export default FishCard;
