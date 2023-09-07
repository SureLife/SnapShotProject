import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";

function App() {
  const [images, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("colours");

  // fetch data from API
  async function handleSearch(text) {
    
    setQuery(text); 
  }
    useEffect(() => {

      fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
          import.meta.env.VITE_API_KEY
        }&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPhotos(data.photos.photo);
        }) 
        .catch((error) => {
          setError(error);
        });
        console.log(query);
    }, [query]); 
  
  return (
    <BrowserRouter>
      <SearchBar handleSearch={handleSearch}/>
      <NavBar handleSearch={handleSearch}/>
      <Routes>
        {/* path for the pages */}
        <Route path="/mountain" />
        <Route path="/beaches" />
        <Route path="/birds"/>
        <Route path="/food"/>
      </Routes>
      <Cards images={images} />
    </BrowserRouter>
  );
}

export default App;
