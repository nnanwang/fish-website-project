import { useEffect, useState } from "react";

// Import the navigation section.
import Navbar from "./components/Navbar.jsx";

// Import the large introductory section.
import Hero from "./components/Hero.jsx";

// Import the searchable local fish database.
import FishDatabase from "./components/FishDatabase.jsx";

// Import the interactive appearance-based species finder.
import SpeciesFinder from "./components/SpeciesFinder.jsx";

// Import the static freshwater care guide and FAQ.
import BeginnerGuide from "./components/BeginnerGuide.jsx";

// Import the reusable page for each full guide topic.
import GuideTopicPage from "./components/GuideTopicPage.jsx";

// Import the standalone project introduction page.
import AboutPage from "./components/AboutPage.jsx";

// Import the dynamic page shown after a card is selected.
import FishDetail from "./components/FishDetail.jsx";

// Import the bottom section of the page.
import Footer from "./components/Footer.jsx";

// Import the shared floating return-to-top control.
import BackToTop from "./components/BackToTop.jsx";

// 图片修复：详情页与卡片共用同一份真实图片映射，避免两处路径不一致。
import fishImages from "./data/fishImages.js";
import fishData from "./data/fishData.json";

// Import the shared CSS styles for the whole website.
import "./App.css";

function findFishById(fishId) {
  // Only complete database records can open a detail page. Guide-only fish
  // remain static recommendations because their full profiles are incomplete.
  return fishData.find((fish) => fish.id === fishId) || null;
}

// Read the current view from the URL so refresh and browser Back both work.
function readNavigationFromUrl() {
  const parameters = new URLSearchParams(window.location.search);
  const requestedPage = parameters.get("page") || "home";
  const pageName = requestedPage === "guide-faq" ? "guide" : requestedPage;
  const fishId = parameters.get("fish");
  const returnPage = parameters.get("from") || pageName;

  return {
    pageName,
    fishId,
    returnPage,
    sectionId:
      requestedPage === "guide-faq"
        ? "guide-faq"
        : window.location.hash.replace(/^#/, ""),
  };
}

// App is the top-level component that combines every page section.
function App() {
  const initialNavigation = readNavigationFromUrl();

  // Store which top-level page is currently visible without installing a router.
  const [currentPage, setCurrentPage] = useState(initialNavigation.pageName);

  // null means no detail page is open; a fish object displays FishDetail.
  const [selectedFish, setSelectedFish] = useState(() =>
    findFishById(initialNavigation.fishId),
  );

  // Remember which page opened the fish detail so the back button returns there.
  const [detailReturnPage, setDetailReturnPage] = useState(
    initialNavigation.returnPage,
  );

  // Apply a browser-history state without creating another history entry.
  function displayNavigation(navigation) {
    setCurrentPage(navigation.pageName || "home");
    setSelectedFish(findFishById(navigation.fishId));
    setDetailReturnPage(navigation.returnPage || navigation.pageName || "home");

    window.setTimeout(() => {
      if (navigation.sectionId) {
        document
          .getElementById(navigation.sectionId)
          ?.scrollIntoView({ behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }, 0);
  }

  // Store one app view in browser history and reflect it in the address bar.
  function saveNavigation(navigation, replace = false) {
    const parameters = new URLSearchParams();

    if (navigation.pageName && navigation.pageName !== "home") {
      parameters.set("page", navigation.pageName);
    }

    if (navigation.fishId) {
      parameters.set("fish", navigation.fishId);
      parameters.set("from", navigation.returnPage || navigation.pageName);
    }

    const query = parameters.toString();
    const hash = navigation.sectionId ? `#${navigation.sectionId}` : "";
    const url = `${window.location.pathname}${query ? `?${query}` : ""}${hash}`;
    const method = replace ? "replaceState" : "pushState";

    window.history[method](navigation, "", url);
  }

  useEffect(() => {
    // Give the first loaded view a complete state for later Back/Forward events.
    saveNavigation(
      {
        ...initialNavigation,
        fromApp: false,
      },
      true,
    );

    function handleHistoryChange(event) {
      const navigation = event.state || readNavigationFromUrl();

      displayNavigation({
        ...navigation,
        sectionId: window.location.hash.replace(/^#/, ""),
      });
    }

    window.addEventListener("popstate", handleHistoryChange);

    return () => window.removeEventListener("popstate", handleHistoryChange);
    // Initial navigation is intentionally registered only once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openFishDetail(fish, returnPage) {
    setDetailReturnPage(returnPage);
    setSelectedFish(fish);
    saveNavigation({
      pageName: returnPage,
      fishId: fish.id,
      returnPage,
      fromApp: true,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showPage(pageName, sectionId = "") {
    setSelectedFish(null);
    setCurrentPage(pageName);
    saveNavigation({ pageName, sectionId, fromApp: true });

    window.setTimeout(() => {
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  }

  function showHomeSection(sectionId) {
    setSelectedFish(null);
    setCurrentPage("home");
    saveNavigation({ pageName: "home", sectionId, fromApp: true });

    // Wait until the Home page is rendered, then scroll to its requested section.
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  function returnFromDetail() {
    if (window.history.state?.fromApp) {
      window.history.back();
    } else {
      showPage(detailReturnPage || "home");
    }
  }

  // Return the JSX that React will display.
  return (
    // A Fragment groups elements without adding an extra HTML wrapper.
    <>
      {/* Show the navigation at the top of the page. */}
      <Navbar
        currentPage={currentPage}
        onShowHomeSection={showHomeSection}
        onShowPage={showPage}
      />

      {/* The main element contains the primary page content. */}
      <main>
        {selectedFish ? (
          /* One component can display any fish object selected from the database. */
          // 图片修复：根据当前鱼的 id 传入封面和图库，缺图时详情页会显示占位区域。
          <FishDetail
            fish={selectedFish}
            images={fishImages[selectedFish.id]}
            onBack={returnFromDetail}
          />
        ) : currentPage === "home" ? (
          <>
            {/* Show the full-width image and introduction section. */}
            <Hero onShowPage={showPage} />

            {/* Pass a function down so every FishCard can open the detail page. */}
            <FishDatabase
              onFishSelect={(fish) => openFishDetail(fish, "home")}
            />
          </>
        ) : currentPage === "identify" ? (
          /* The appearance finder is a standalone page. */
          <SpeciesFinder
            onFishSelect={(fish) => openFishDetail(fish, "identify")}
          />
        ) : currentPage === "guide" ? (
          /* The care guide landing page introduces the available topics. */
          <BeginnerGuide onShowPage={showPage} />
        ) : currentPage.startsWith("guide-") ? (
          /* One reusable component displays each of the four guide topics. */
          <GuideTopicPage
            sectionId={currentPage.replace("guide-", "")}
            onShowPage={showPage}
          />
        ) : (
          /* The project introduction is a standalone page. */
          <AboutPage />
        )}
      </main>

      {/* Show the website information and links at the bottom. */}
      <Footer onShowHomeSection={showHomeSection} onShowPage={showPage} />

      {/* Make returning to the top easy on every page and detail view. */}
      <BackToTop />
    </>
  );
}

// Export App so main.jsx can import and render it.
export default App;
