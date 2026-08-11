// Create an object that translates JSON body-shape values for the Chinese UI.
const bodyShapeLabels = {
  // Show the JSON value "elongated" as "细长型" on the page.
  elongated: "细长型",
  // Show the JSON value "compressed" as "侧扁型" on the page.
  compressed: "侧扁型",
};

// Store reusable line-style symbols in an array instead of installing an icon library.
const familyMarks = ["◇", "≋", "◌", "⌁", "△"];

// Define the FilterBar component and receive its data and event functions as props.
function FilterBar({
  // families is an array of the real family names found in fishData.json.
  families,
  // selectedFamily stores the family button that is currently selected.
  selectedFamily,
  // onFamilyChange updates the selected family in FishDatabase.jsx.
  onFamilyChange,
  // regions is an array of the real region values found in fishData.json.
  regions,
  // selectedRegion stores the current region filter value.
  selectedRegion,
  // onRegionChange updates the selected region in FishDatabase.jsx.
  onRegionChange,
  // bodyShapes contains the distinct body-shape values from fishData.json.
  bodyShapes,
  // selectedBodyShape stores the current body-shape filter value.
  selectedBodyShape,
  // onBodyShapeChange updates the selected body shape in FishDatabase.jsx.
  onBodyShapeChange,
  // onClear resets every search and filter value.
  onClear,
  // hasActiveFilters tells this component whether anything needs to be cleared.
  hasActiveFilters,
}) {
  // Return the family buttons and the two useful select menus.
  return (
    // A Fragment groups sibling elements without adding an unnecessary HTML wrapper.
    <>
      {/* Use a semantic section to group all family filter buttons. */}
      <section className="family-filter" aria-label="按科属筛选鱼类">
        {/* This div controls the responsive layout of the family buttons. */}
        <div className="family-filter__buttons">
          {/* This button removes only the family selection by choosing "all". */}
          <button
            // type="button" prevents the button from submitting a nearby form.
            type="button"
            // Add the active class when "全部鱼类" is selected.
            className={
              selectedFamily === "all" ? "family-button active" : "family-button"
            }
            // Tell assistive technology whether this filter button is selected.
            aria-pressed={selectedFamily === "all"}
            // Send the value "all" back to FishDatabase when the button is clicked.
            onClick={() => onFamilyChange("all")}
          >
            {/* The symbol is decorative, so screen readers can ignore it. */}
            <span className="family-button__mark" aria-hidden="true">
              ◎
            </span>
            {/* Keep the visible button label in its own styled container. */}
            <span className="family-button__text">
              <strong>全部鱼类</strong>
            </span>
          </button>

          {/* map() creates one reusable button for every family in the array. */}
          {families.map((family, index) => (
            <button
              // Keep this generated control as a normal button, not a submit button.
              type="button"
              // React uses the unique family name to track this list item.
              key={family}
              // Apply the active style only when this family is selected.
              className={
                selectedFamily === family
                  ? "family-button active"
                  : "family-button"
              }
              // Expose the selected state to screen readers.
              aria-pressed={selectedFamily === family}
              // Pass the clicked family value back to FishDatabase.jsx.
              onClick={() => onFamilyChange(family)}
            >
              {/* Choose a decorative symbol based on the button's array index. */}
              <span className="family-button__mark" aria-hidden="true">
                {/* The remainder operator reuses the symbols if there are more families. */}
                {familyMarks[index % familyMarks.length]}
              </span>
              {/* Display the real family name from the JSON data. */}
              <span className="family-button__text">
                <strong>{family}</strong>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Group the region, body-shape, and reset controls in one filter bar. */}
      <div className="secondary-filters">
        {/* Only show the region menu when it has more than one useful option. */}
        {regions.length > 1 && (
          <div className="secondary-filter">
            {/* Keep an accessible label while hiding it visually with CSS. */}
            <label className="sr-only" htmlFor="region-filter">
              地区
            </label>
            {/* This is a controlled select because its value comes from React state. */}
            <select
              // Connect this select to the label above.
              id="region-filter"
              // Display the region that is currently stored in state.
              value={selectedRegion}
              // Send the newly selected value back to FishDatabase.jsx.
              onChange={(event) => onRegionChange(event.target.value)}
            >
              {/* "all" means that every region should be included. */}
              <option value="all">全部地区</option>
              {/* Create one option for every real region value. */}
              {regions.map((region) => (
                // key helps React identify each generated option.
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Only show the body-shape menu when the data has multiple shapes. */}
        {bodyShapes.length > 1 && (
          <div className="secondary-filter">
            {/* This hidden label still gives the select an accessible name. */}
            <label className="sr-only" htmlFor="body-shape-filter">
              体型
            </label>
            {/* This controlled select reads and updates the body-shape state. */}
            <select
              // Connect the label and select with matching htmlFor and id values.
              id="body-shape-filter"
              // Display the body shape currently stored in React state.
              value={selectedBodyShape}
              // Update the parent state whenever the user chooses another option.
              onChange={(event) => onBodyShapeChange(event.target.value)}
            >
              {/* "all" means that every body shape should be included. */}
              <option value="all">全部体型</option>
              {/* Create one option for each distinct JSON body-shape value. */}
              {bodyShapes.map((bodyShape) => (
                // Use the original JSON value for both the key and option value.
                <option key={bodyShape} value={bodyShape}>
                  {/* Show a Chinese label when available, otherwise show the raw value. */}
                  {bodyShapeLabels[bodyShape] || bodyShape}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Use a real button so the reset action works with a mouse or keyboard. */}
        <button
          // Apply the compact outline style from App.css.
          className="clear-filters"
          // Prevent this button from submitting the search form.
          type="button"
          // Run the parent component's reset function when clicked.
          onClick={onClear}
          // Disable the button when every control already has its default value.
          disabled={!hasActiveFilters}
        >
          清除筛选
        </button>
      </div>
    </>
  );
}

// Export the component so FishDatabase.jsx can import and render it.
export default FilterBar;
