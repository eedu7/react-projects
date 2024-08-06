import "./styles.css";
import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch.jsx"

export const ImageGalleryApp = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("flowers");
  const API_KEY = import.meta.env.VITE_APP_PIXABAY_API_KEY; 

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  }, [term])


  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading? <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1> :<div className="grid grid-cols-3 gap-4">
        {
          images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))
        }
      </div>}
    </div>
  )
}
