import React, { useState } from "react";

function SearchBar({handleSearch}) {
  const [searchInput, setSearchInput] = useState();  

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSearch(searchInput);
  };

  return (
    <div>
      <h1>SnapShot</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar;
