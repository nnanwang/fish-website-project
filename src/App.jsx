import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedFish from "./components/FeaturedFish.jsx";
import Footer from "./components/Footer.jsx";
import fishData from "./data/fishData.json";
import "./App.css";

// JSON 中的图片路径与 public 中的真实文件不一致，
// 因此这里根据鱼的 id 使用已经确认存在的本地图片。
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
      <Footer />
    </>
  );
}

export default App;
