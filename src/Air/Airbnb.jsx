import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Card } from "./Components/Card";

import AthletePhoto from "/images/airbnb/athlete.png";
import WeddingPhoto from "/images/airbnb/wedding-photo.png";
import MountainBikePhoto from "/images/airbnb/mountain-bike.png";

import "./styles.css"

function App() {
  const data = [
    {
      image: AthletePhoto,
      rating: 5,
      review: 6,
      country: "USA",
      description: "Life lesson with Katie Zeferes",
      price: "$136",
    },
    {
      image: WeddingPhoto,
      rating: 5,
      review: 30,
      country: "USA",
      description: "Learn wedding photography",
      price: "$125",
    },
    {
      image: MountainBikePhoto,
      rating: 5,
      review: 6,
      country: "USA",
      description: "Group Mountain Biking",
      price: "$50",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="card--container">
        {data.map((item) => (
          <Card
            key={item.description}
            image={item.image}
            rating={item.rating}
            review={item.review}
            country={item.country}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
