import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "../style/NavBar.css"

function NavBar({handleSearch}) {
  const [search, setSearch] = useState(""); 
  
    
    handleSearch(search);
  

    return (
    <nav className="navContainer">
      <ul className="navUl">
        <li className="navLi" onClick={(e) => setSearch("mountain")}><Link to="/mountain">Mountain</Link></li>
        <li className="navLi" onClick={(e) => setSearch("beaches")}><Link to="/beaches">Beaches</Link></li>
        <li className="navLi" onClick={(e) => setSearch("birds")}><Link to="/birds">Birds</Link></li>
        <li className="navLi" onClick={(e) => setSearch("food")}><Link to="/food">Food</Link></li>
      </ul>
    </nav>
    )
}

export default NavBar;