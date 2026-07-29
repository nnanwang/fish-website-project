import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedFish from "./components/FeaturedFish.jsx";
import fishData from "./data/fishData.json";
import "./App.css";

// The JSON image paths do not match the files currently in public.
// These paths were matched using each fish id and real local filenames.
const localFishImages = {
  "channa-argus": "/images/fish/channa-argus/adult/identification.png",
  "macropodus-chinensis": "/images/fish/macropodus-chinensis/adult/mate.jpeg",
  "esox-lucius": "/images/fish/esox-lucius/adult/side.jpg",
  "siniperca-chuatsi":
    "/images/fish/siniperca-chuatsi/adult/:siniperca-chuatsi:adult.png",
};

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero fishData={fishData} imagePaths={localFishImages} />
        <FeaturedFish fishData={fishData} imagePaths={localFishImages} />
      </main>
    </>
  );
}

export default App;
