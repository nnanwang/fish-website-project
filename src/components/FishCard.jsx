// Import useState so the component can remember if an image fails to load.
import { useState } from "react";

// Translate known JSON control words for the Chinese interface.
const waterTypeLabels = {
  freshwater: "淡水",
  saltwater: "海水",
  marine: "海水",
  brackish: "咸淡水",
};

// Keep unknown control words visible instead of inventing a translation.
function getWaterTypeLabel(waterType) {
  return waterTypeLabels[waterType] || waterType;
}

// Receive one fish object and one optional local image path as props.
function FishCard({ fish, imageSrc }) {
  // Start with false because the image has not failed when the card first renders.
  const [imageFailed, setImageFailed] = useState(false);

  // Read each display value from its real JSON path.
  const chineseName = fish.chineseName || "";
  const englishName = fish.englishName || "";
  const scientificName = fish.scientificName || "";
  const familyName = fish.taxonomy?.family || "";
  const genusName = fish.taxonomy?.genus || "";

  // Convert waterType to an array so the card also stays safe with one value.
  const rawWaterType = fish.identification?.waterType;
  const waterTypes = Array.isArray(rawWaterType)
    ? rawWaterType
    : rawWaterType
      ? [rawWaterType]
      : [];

  // Use the JSON alt text first, or the Chinese name as a safe fallback.
  const altText =
    fish.images?.cover?.alt || chineseName || englishName || "鱼类图片";

  // Return one semantic article for one fish.
  return (
    <article className="fish-card">
      {/* Use the real family as the short category heading. */}
      {familyName && (
        <div className="fish-card__category">{familyName}</div>
      )}

      {/* Keep the complete image centered inside the pale blue area. */}
      <div className="fish-card__image-area">
        {/* Show the image only when a path exists and loading has not failed. */}
        {imageSrc && !imageFailed ? (
          <img
            className="fish-card__image"
            // Use the matched public image path.
            src={imageSrc}

            // Give the image a meaningful accessible description.
            alt={altText}

            // If loading fails, update state so React displays the placeholder.
            onError={() => setImageFailed(true)}
          />
        ) : (
          // This CSS placeholder prevents a broken-image icon.
          <div
            className="fish-card__placeholder"
            role="img"
            aria-label={`${chineseName || englishName || "该鱼类"}暂无本地图片`}
          >
            {/* Hide this decorative symbol from screen readers. */}
            <span aria-hidden="true">≈</span>

            {/* Show the fish name inside the placeholder. */}
            <p>{chineseName || englishName || "暂无图片"}</p>

            {/* Explain why there is no photograph. */}
            <small>暂无本地图片</small>
          </div>
        )}
      </div>

      {/* Display the text information below the image. */}
      <div className="fish-card__content">
        {/* Create the tags from the real identification.waterType values. */}
        {waterTypes.length > 0 && (
          <div className="fish-card__water-types" aria-label="水域类型">
            {waterTypes.map((waterType) => (
              <span
                className={`water-type-tag water-type-${waterType}`}
                key={waterType}
              >
                {getWaterTypeLabel(waterType)}
              </span>
            ))}
          </div>
        )}

        {/* The Chinese name is the card heading. */}
        {chineseName && (
          <h3 className="fish-card__chinese-name">{chineseName}</h3>
        )}

        {/* Render the English name only when it has a value. */}
        {englishName && (
          <p className="fish-card__english-name">{englishName}</p>
        )}

        {/* Render the scientific name only when it has a value. */}
        {scientificName && (
          <p className="fish-card__scientific-name">
            {/* Scientific names are conventionally written in italics. */}
            <i>{scientificName}</i>
          </p>
        )}

      </div>

      {/* Keep complete family and genus information in the card footer. */}
      {(familyName || genusName) && (
        <div className="fish-card__footer">
          <span>科属</span>
          <strong>{[familyName, genusName].filter(Boolean).join(" · ")}</strong>
        </div>
      )}
    </article>
  );
}

// Export FishCard so FishDatabase.jsx can reuse it.
export default FishCard;
