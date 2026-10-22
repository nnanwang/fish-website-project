import { useEffect, useState } from "react";

// Navbar is responsible only for the website name and primary navigation links.
function Navbar({ currentPage, onShowHomeSection, onShowPage }) {
  // Track whether the fixed navigation is still positioned over the Hero image.
  const [isOverHero, setIsOverHero] = useState(currentPage === "home");

  useEffect(() => {
    // Compare the bottom of the Hero with the height of the navigation bar.
    function updateNavbarBackground() {
      const hero = document.querySelector(".hero, .page-hero");
      const navbarHeight = 78;

      setIsOverHero(
        hero !== null && hero.getBoundingClientRect().bottom > navbarHeight,
      );
    }

    // Run once after each page change so standalone pages receive the dark style.
    updateNavbarBackground();

    // Update the background as the visitor moves between the Hero and the content.
    window.addEventListener("scroll", updateNavbarBackground, { passive: true });
    window.addEventListener("resize", updateNavbarBackground);

    // Remove listeners when Navbar is replaced or the current page changes.
    return () => {
      window.removeEventListener("scroll", updateNavbarBackground);
      window.removeEventListener("resize", updateNavbarBackground);
    };
  }, [currentPage]);

  // Return semantic header and nav elements.
  return (
    // The header identifies the top section of the website.
    <header
      className={
        isOverHero ? "navbar navbar--transparent" : "navbar navbar--solid"
      }
    >
      {/* aria-label explains the purpose of this navigation to screen readers. */}
      <nav aria-label="主导航">
        {/* Clicking the logo returns the user to the Hero section. */}
        <a
          className="logo"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            onShowHomeSection("home");
          }}
        >
          {/* The strong element displays the main Chinese website name. */}
          <strong>中国原生鱼类网站</strong>

          {/* The small element displays the English subtitle. */}
          <small>Chinese Local Fishbase</small>
        </a>

        {/* This container keeps the in-page navigation links together. */}
        <div className="nav-links">
          {/* Move to the top Hero section. */}
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              onShowHomeSection("home");
            }}
          >
            首页
          </a>

          {/* Move to the fish card section. */}
          <a
            href="#explore"
            onClick={(event) => {
              event.preventDefault();
              onShowHomeSection("explore");
            }}
          >
            探索鱼类
          </a>

          {/* Open the appearance-based species finder. */}
          <a
            href="#identify"
            onClick={(event) => {
              event.preventDefault();
              onShowPage("identify");
            }}
            aria-current={currentPage === "identify" ? "page" : undefined}
          >
            外形查询
          </a>

          {/* Keep the guide landing page and its four branches together. */}
          <div className="nav-dropdown">
            <a
              href="?page=guide"
              className="nav-dropdown__trigger"
              aria-haspopup="true"
              aria-current={
                currentPage.startsWith("guide") ? "page" : undefined
              }
              onClick={(event) => {
                event.preventDefault();
                onShowPage("guide");
              }}
            >
              饲养指南
            </a>

            <div className="nav-dropdown__menu">
              <a
                className={currentPage === "guide" ? "active" : ""}
                href="?page=guide"
                aria-current={currentPage === "guide" ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onShowPage("guide");
                }}
              >
                <span className="nav-dropdown__icon" aria-hidden="true">
                  ▦
                </span>
                指南首页
              </a>
              <a
                className={currentPage === "guide-prepare" ? "active" : ""}
                href="?page=guide-prepare"
                aria-current={
                  currentPage === "guide-prepare" ? "page" : undefined
                }
                onClick={(event) => {
                  event.preventDefault();
                  onShowPage("guide-prepare");
                }}
              >
                <span className="nav-dropdown__icon" aria-hidden="true">
                  ◇
                </span>
                养鱼前的准备
              </a>
              <a
                className={
                  currentPage === "guide-ecosystem" ? "active" : ""
                }
                href="?page=guide-ecosystem"
                aria-current={
                  currentPage === "guide-ecosystem" ? "page" : undefined
                }
                onClick={(event) => {
                  event.preventDefault();
                  onShowPage("guide-ecosystem");
                }}
              >
                <span className="nav-dropdown__icon" aria-hidden="true">
                  ≋
                </span>
                鱼缸生态系统搭建
              </a>
              <a
                className={
                  currentPage === "guide-maintenance" ? "active" : ""
                }
                href="?page=guide-maintenance"
                aria-current={
                  currentPage === "guide-maintenance" ? "page" : undefined
                }
                onClick={(event) => {
                  event.preventDefault();
                  onShowPage("guide-maintenance");
                }}
              >
                <span className="nav-dropdown__icon" aria-hidden="true">
                  ↻
                </span>
                日常维护
              </a>
              <a
                className={currentPage === "guide-health" ? "active" : ""}
                href="?page=guide-health"
                aria-current={
                  currentPage === "guide-health" ? "page" : undefined
                }
                onClick={(event) => {
                  event.preventDefault();
                  onShowPage("guide-health");
                }}
              >
                <span className="nav-dropdown__icon" aria-hidden="true">
                  +
                </span>
                鱼类健康观察
              </a>
            </div>
          </div>

          {/* Open the standalone website introduction page. */}
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              onShowPage("about");
            }}
            aria-current={currentPage === "about" ? "page" : undefined}
          >
            关于我们
          </a>
        </div>
      </nav>
    </header>
  );
}

// Export Navbar so App.jsx can use it.
export default Navbar;
