const SearchBar = ({ title, filterText, onfilterTextChange }) => {
  return (
    <>
      <input
        id="searchInput"
        className="mb-3 w-50"
        type="search"
        placeholder="search..."
        onChange={onfilterTextChange}
      ></input>
    </>
  );
};

export default SearchBar;
