import React from "react";

function Search({ addPlant }) {

  function handleSearches(e) {
    addPlant(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearches}
      />
    </div>
  );
}

export default Search;
