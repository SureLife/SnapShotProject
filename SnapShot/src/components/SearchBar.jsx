import React, { useState } from "react";
import "../style/SearchBar.css"
function SearchBar({handleSearch}) {
  const [searchInput, setSearchInput] = useState();  

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSearch(searchInput);
  };

  return (
    <div className="searchContainer">
      <h1>SnapShot</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder='Search...'
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar;
