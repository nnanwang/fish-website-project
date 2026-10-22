import { useEffect, useState } from "react";

// BackToTop provides one accessible return control for every page.
function BackToTop() {
  // Hide the button near the top so it does not cover page content unnecessarily.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > 500);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      className={isVisible ? "back-to-top visible" : "back-to-top"}
      onClick={scrollToTop}
      aria-label="返回页面顶部"
      title="返回顶部"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 14 6-6 6 6" />
        <path d="M12 8v11" />
      </svg>
    </button>
  );
}

export default BackToTop;
