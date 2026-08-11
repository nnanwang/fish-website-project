import { useState } from "react";
import fishData from "../data/fishData.json";
import SearchBar from "./SearchBar.jsx";
import FilterBar from "./FilterBar.jsx";
import FishCard from "./FishCard.jsx";

// The JSON image paths do not match the files currently in public.
// This object connects each confirmed fish id to a real local image.
const localFishImages = {
  "channa-argus": "/images/fish/channa-argus/adult/identification.png",
  "macropodus-chinensis": "/images/fish/macropodus-chinensis/adult/mate.jpeg",
  "esox-lucius": "/images/fish/esox-lucius/adult/side.jpg",
  "siniperca-chuatsi":
    "/images/fish/siniperca-chuatsi/adult/:siniperca-chuatsi:adult.png",
};

// Create the region options from the real arrays inside fishData.json.
const regions = [
  ...new Set(fishData.flatMap((fish) => fish.identification?.regions || [])),
].sort();

// Create one button for each real family value in the JSON.
const families = [
  ...new Set(fishData.map((fish) => fish.taxonomy?.family).filter(Boolean)),
].sort();

// Body shape has two distinct values, so it is useful as a second filter.
const bodyShapes = [
  ...new Set(
    fishData.map((fish) => fish.identification?.bodyShape).filter(Boolean),
  ),
].sort();

function FishDatabase() {
  // Store the text currently visible inside the input.
  const [searchInput, setSearchInput] = useState("");

  // Store the submitted search term used by filter().
  const [searchTerm, setSearchTerm] = useState("");

  // Store each selected classification value.
  const [selectedFamily, setSelectedFamily] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedBodyShape, setSelectedBodyShape] = useState("all");

  // Remove extra spaces and ignore English letter case.
  const normalizedSearch = searchTerm.trim().toLowerCase();

  // Create a new array containing only fish that match every condition.
  const filteredFish = fishData.filter((fish) => {
    // Missing name fields become empty strings so includes() stays safe.
    const chineseName = (fish.chineseName || "").toLowerCase();
    const englishName = (fish.englishName || "").toLowerCase();
    const scientificName = (fish.scientificName || "").toLowerCase();

    // Missing filter arrays become empty arrays so includes() stays safe.
    const fishRegions = fish.identification?.regions || [];
    const fishFamily = fish.taxonomy?.family || "";
    const fishBodyShape = fish.identification?.bodyShape || "";

    const matchesSearch =
      chineseName.includes(normalizedSearch) ||
      englishName.includes(normalizedSearch) ||
      scientificName.includes(normalizedSearch);

    const matchesRegion =
      selectedRegion === "all" || fishRegions.includes(selectedRegion);

    const matchesFamily =
      selectedFamily === "all" || fishFamily === selectedFamily;

    const matchesBodyShape =
      selectedBodyShape === "all" || fishBodyShape === selectedBodyShape;

    return (
      matchesSearch && matchesFamily && matchesRegion && matchesBodyShape
    );
  });

  // Check whether any search or filter value has changed.
  const hasActiveFilters =
    searchInput !== "" ||
    searchTerm !== "" ||
    selectedFamily !== "all" ||
    selectedRegion !== "all" ||
    selectedBodyShape !== "all";

  // Submit with the button or Enter without reloading the page.
  function handleSearchSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchInput.trim());
  }

  // Reset every control to its default value.
  function clearFilters() {
    setSearchInput("");
    setSearchTerm("");
    setSelectedFamily("all");
    setSelectedRegion("all");
    setSelectedBodyShape("all");
  }

  return (
    <section
      className="fish-database"
      id="explore"
      aria-labelledby="database-title"
    >
      <div className="section-heading">
        <p className="eyebrow">FISH DATABASE</p>
        <h2 id="database-title">中国鱼类数据库</h2>
        <p>通过名称与分类条件，查找并认识不同的鱼类。</p>
      </div>

      <SearchBar
        searchInput={searchInput}
        onSearchInputChange={setSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      <FilterBar
        families={families}
        selectedFamily={selectedFamily}
        onFamilyChange={setSelectedFamily}
        regions={regions}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        bodyShapes={bodyShapes}
        selectedBodyShape={selectedBodyShape}
        onBodyShapeChange={setSelectedBodyShape}
        onClear={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      <p className="result-count" aria-live="polite">
        共找到 {filteredFish.length} 种鱼类
      </p>

      {filteredFish.length > 0 ? (
        <div className="fish-grid">
          {filteredFish.map((fish) => (
            <FishCard
              key={fish.id}
              fish={fish}
              imageSrc={localFishImages[fish.id]}
            />
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <h3>没有找到符合条件的鱼类</h3>
          <p>请尝试其他名称，或清除当前筛选条件。</p>
          <button type="button" onClick={clearFilters}>
            查看全部鱼类
          </button>
        </div>
      )}
    </section>
  );
}

export default FishDatabase;
