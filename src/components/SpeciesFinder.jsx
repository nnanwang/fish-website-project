import { useState } from "react";
import fishData from "../data/fishData.json";
import fishImages from "../data/fishImages.js";
import FishCard from "./FishCard.jsx";

// The student JSON currently contains four repeated IDs.
// Keep the first record for each ID without changing the original JSON file.
const uniqueFishData = fishData.filter(
  (fish, index, allFish) =>
    fish.id && allFish.findIndex((item) => item.id === fish.id) === index,
);

// Build every option from the real appearance fields in fishData.json.
const bodyShapes = [
  ...new Set(
    uniqueFishData
      .map((fish) => fish.identification?.bodyShape)
      .filter(Boolean),
  ),
].sort();

const colors = [
  ...new Set(
    uniqueFishData.flatMap((fish) => fish.appearance?.primaryColors || []),
  ),
].sort();

const patterns = [
  ...new Set(
    uniqueFishData.flatMap((fish) => fish.appearance?.patterns || []),
  ),
].sort();

const bodyShapeLabels = {
  elongated: "细长型",
  compressed: "侧扁型",
  cylindrical: "圆筒型",
};

function SpeciesFinder({ onFishSelect }) {
  // Each useState value stores one observation selected by the visitor.
  const [selectedBodyShape, setSelectedBodyShape] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedPattern, setSelectedPattern] = useState("all");
  const [featureTerm, setFeatureTerm] = useState("");

  const normalizedFeatureTerm = featureTerm.trim().toLowerCase();
  const hasCriteria =
    selectedBodyShape !== "all" ||
    selectedColor !== "all" ||
    selectedPattern !== "all" ||
    normalizedFeatureTerm !== "";

  // filter() keeps fish that match every chosen appearance characteristic.
  const matchingFish = hasCriteria
    ? uniqueFishData.filter((fish) => {
        const bodyShape = fish.identification?.bodyShape || "";
        const fishColors = fish.appearance?.primaryColors || [];
        const fishPatterns = fish.appearance?.patterns || [];
        const searchableFeatures = [
          fish.appearance?.summary || "",
          ...fishColors,
          ...fishPatterns,
          ...(fish.appearance?.keyFeatures || []),
        ]
          .join(" ")
          .toLowerCase();

        const matchesBodyShape =
          selectedBodyShape === "all" || bodyShape === selectedBodyShape;
        const matchesColor =
          selectedColor === "all" || fishColors.includes(selectedColor);
        const matchesPattern =
          selectedPattern === "all" || fishPatterns.includes(selectedPattern);
        const matchesFeature =
          normalizedFeatureTerm === "" ||
          searchableFeatures.includes(normalizedFeatureTerm);

        return (
          matchesBodyShape && matchesColor && matchesPattern && matchesFeature
        );
      })
    : [];

  function clearFinder() {
    setSelectedBodyShape("all");
    setSelectedColor("all");
    setSelectedPattern("all");
    setFeatureTerm("");
  }

  return (
    <section
      className="species-finder"
      id="identify"
      aria-labelledby="species-finder-title"
    >
      <header className="page-hero">
        <img
          src={fishImages["esox-lucius"]?.gallery?.[0]?.src}
          alt="白斑狗鱼的水下照片"
        />
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <p className="eyebrow">INTERACTIVE SPECIES FINDER</p>
          <h1 id="species-finder-title">根据外形查询物种</h1>
          <p>选择你观察到的体型、颜色和斑纹，缩小可能的鱼类范围。</p>
        </div>
      </header>

      <div className="finder-content">
        <div className="finder-panel">
        <div className="finder-controls">
          <label>
            <span>身体形状</span>
            <select
              value={selectedBodyShape}
              onChange={(event) => setSelectedBodyShape(event.target.value)}
            >
              <option value="all">不限体型</option>
              {bodyShapes.map((bodyShape) => (
                <option key={bodyShape} value={bodyShape}>
                  {bodyShapeLabels[bodyShape] || bodyShape}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>主要颜色</span>
            <select
              value={selectedColor}
              onChange={(event) => setSelectedColor(event.target.value)}
            >
              <option value="all">不限颜色</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>身体斑纹</span>
            <select
              value={selectedPattern}
              onChange={(event) => setSelectedPattern(event.target.value)}
            >
              <option value="all">不限斑纹</option>
              {patterns.map((pattern) => (
                <option key={pattern} value={pattern}>
                  {pattern}
                </option>
              ))}
            </select>
          </label>

          <label className="finder-feature-field">
            <span>其他辨识特征</span>
            <input
              type="search"
              value={featureTerm}
              onChange={(event) => setFeatureTerm(event.target.value)}
              placeholder="例如：长吻、胡须、黑斑"
            />
          </label>

          <button
            className="finder-clear"
            type="button"
            onClick={clearFinder}
            disabled={!hasCriteria}
          >
            清除条件
          </button>
        </div>

        <div className="finder-help">
          <strong>如何使用</strong>
          <p>不确定的项目可以保留“不限”。资料不完整的鱼可能不会出现在严格筛选结果中。</p>
        </div>
        </div>

        <div className="finder-results" aria-live="polite">
        {!hasCriteria ? (
          <div className="finder-empty">
            <span aria-hidden="true">◎</span>
            <h3>请选择至少一个外形特征</h3>
            <p>查询只使用资料库中已记录的特征，不会推测缺失信息。</p>
          </div>
        ) : matchingFish.length > 0 ? (
          <>
            <p className="finder-result-count">
              找到 {matchingFish.length} 个可能结果
            </p>
            <div className="fish-grid">
              {matchingFish.map((fish) => (
                <FishCard
                  key={fish.id}
                  fish={fish}
                  imageSrc={fishImages[fish.id]?.cover?.src}
                  onSelect={onFishSelect}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="finder-empty">
            <span aria-hidden="true">≈</span>
            <h3>暂时没有匹配的物种</h3>
            <p>可以减少一个条件，或换一种特征描述后再试。</p>
            <button type="button" onClick={clearFinder}>
              重新查询
            </button>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}

export default SpeciesFinder;
