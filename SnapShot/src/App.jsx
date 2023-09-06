import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [images, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  // fetch data from API
  useEffect(() => {

  const query = 'mountain' //todo==> to modify

    fetch(  //todo  controll apikey !!!!!!
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${import.meta.env.VITE_API_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(data =>{ console.log(data) ; setPhotos(data.photos.photo)}) //!remember to delete console.log(data)
      .catch(error => {setError(error)})
  }, []) //todo==> modify dependency? 


  return (
    <BrowserRouter>

    <NavBar/>

    <Routes> 
      {/* path for the pages */}
        <Route path="/mountain" element={<div>Mountain Page</div>} />
        <Route path="/beaches" element={<div>Beaches Page</div>} />
        <Route path="/birds" element={<div>Birds Page</div>} />
        <Route path="/food" element={<div>Food Page</div>} />
      </Routes>


      <div>
        {images.map(photo => (
          <div key={photo.id}>
            <img src={photo} />
          </div>
        ))}
      </div>



    </BrowserRouter>
  )
}

export default App