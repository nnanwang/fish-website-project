import { useState } from "react";

import Navbar from "./components/Navbar.jsx";

import Hero from "./components/Hero.jsx";

import FishDatabase from "./components/FishDatabase.jsx";

import FishDetail from "./components/FishDetail.jsx";

import Footer from "./components/Footer.jsx";

// Use the same confirmed image path on both the card and detail page.
import fishImages from "./data/fishImages.js";

import "./App.css";

function App() {
  // null means the list page is visible; a fish object means the detail page is visible.
  const [selectedFish, setSelectedFish] = useState(null);

  function openFishDetail(fish) {
    setSelectedFish(fish);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showListSection(sectionId) {
    setSelectedFish(null);

    // Wait until the list page is rendered again, then move to the requested section.
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  function returnToDatabase() {
    showListSection("explore");
  }

  return (
    <>
      <Navbar onShowListSection={showListSection} />

      <main>
        {selectedFish ? (
          /* One component can display any fish object selected from the database. */
          <FishDetail
            fish={selectedFish}
            images={fishImages[selectedFish.id]}
            onBack={returnToDatabase}
          />
        ) : (
          <>
            <Hero />

            <FishDatabase onFishSelect={openFishDetail} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;