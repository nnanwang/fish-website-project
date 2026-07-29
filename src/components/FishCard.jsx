import { useState } from "react";

function FishCard({ fish, imageSrc }) {
  const [imageFailed, setImageFailed] = useState(false);
  const classification =
    fish.taxonomy?.family || fish.identification?.waterType?.join(", ");
  const altText =
    fish.images?.cover?.alt || `${fish.englishName} fish`;

  return (
    <article className="fish-card">
      <div className="card-image">
        {imageSrc && !imageFailed ? (
          <img
            src={imageSrc}
            alt={altText}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="image-placeholder" role="img" aria-label={`No local image found for ${fish.englishName}`}>
            <span aria-hidden="true">≈</span>
            <p>Image not available</p>
          </div>
        )}
      </div>

      <div className="card-content">
        <h3>{fish.englishName}</h3>
        {fish.scientificName && (
          <p className="scientific-name">
            <i>{fish.scientificName}</i>
          </p>
        )}
        {classification && <p className="classification">{classification}</p>}
      </div>
    </article>
  );
}

export default FishCard;
