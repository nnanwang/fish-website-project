import { useState } from "react";

function FishCard({ fish, imageSrc }) {
  const [imageFailed, setImageFailed] = useState(false);
  const family = fish.taxonomy?.family;
  const altText = fish.images?.cover?.alt || fish.chineseName;

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
          <div className="image-placeholder" role="img" aria-label={`${fish.chineseName}暂无本地图片`}>
            <span aria-hidden="true">≈</span>
            <p>{fish.chineseName}</p>
            <small>暂无本地图片</small>
          </div>
        )}
      </div>

      <div className="card-content">
        <h3>{fish.chineseName}</h3>
        {fish.englishName && <p className="english-name">{fish.englishName}</p>}
        {fish.scientificName && (
          <p className="scientific-name">
            <i>{fish.scientificName}</i>
          </p>
        )}
        {family && (
          <p className="classification">
            <span>科属</span>
            {family}
          </p>
        )}
      </div>
    </article>
  );
}

export default FishCard;
