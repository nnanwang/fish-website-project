// SearchBar displays the controlled input and submits a name search.
function SearchBar({ searchInput, onSearchInputChange, onSearchSubmit }) {
  return (
    <form className="database-search" onSubmit={onSearchSubmit}>
      <div className="database-search__input">
        <span className="database-search__icon" aria-hidden="true">
          ⌕
        </span>

        <label className="sr-only" htmlFor="fish-search">
          搜索鱼类
        </label>

        <input
          id="fish-search"
          type="search"
          value={searchInput}
          placeholder="输入中文名、英文名或学名"
          onChange={(event) => onSearchInputChange(event.target.value)}
        />
      </div>

      <button className="database-search__button" type="submit">
        搜索
      </button>
    </form>
  );
}

export default SearchBar;
