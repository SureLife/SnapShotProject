import React, { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState();  

  const handleSubmit = (e) => {
    e.preventDefault();
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
