import { useEffect, useRef } from "react";
import fishImages from "../data/fishImages.js";

// Store Hero image information in one array so the slides remain easy to edit.
const heroSlides = [
  {
    src: "https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/9F578883-CAB3-4765-84DFA52140C0859A/1E031121-5E32-40B6-9115CC57FF9641E4/WebsiteWebP_XL-shutterstock_1406047421%20-2.webp",
    alt: "蓝色水下环境中的鱼群",
  },
  {
    src: fishImages["esox-lucius"]?.cover?.src,
    alt: "白斑狗鱼的水下照片",
  },
  {
    src: fishImages["macropodus-chinensis"]?.cover?.src,
    alt: "圆尾斗鱼的水下照片",
  },
];

// Hero displays one fixed introduction over an automatically changing gallery.
function Hero({ onShowPage }) {
  // Keep a reference to the horizontal image container.
  const galleryRef = useRef(null);

  // Remember the current slide without rerendering the fixed Hero text.
  const currentSlideRef = useRef(0);

  // Pause automatic movement while the visitor is interacting with the Hero.
  const isPausedRef = useRef(false);

  useEffect(() => {
    // Respect the operating system setting for reduced motion.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    // Move to the next full-width image every five seconds.
    const autoplayTimer = window.setInterval(() => {
      const gallery = galleryRef.current;

      if (!gallery || isPausedRef.current) {
        return;
      }

      const nextSlide = (currentSlideRef.current + 1) % heroSlides.length;
      currentSlideRef.current = nextSlide;

      gallery.scrollTo({
        left: nextSlide * gallery.clientWidth,
        behavior: "smooth",
      });
    }, 5000);

    // Stop the timer when the Hero component leaves the page.
    return () => window.clearInterval(autoplayTimer);
  }, []);

  // Keep autoplay in sync after the visitor manually swipes the gallery.
  function updateCurrentSlide() {
    const gallery = galleryRef.current;

    if (!gallery || gallery.clientWidth === 0) {
      return;
    }

    currentSlideRef.current = Math.round(
      gallery.scrollLeft / gallery.clientWidth,
    );
  }

  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
      onFocusCapture={() => {
        isPausedRef.current = true;
      }}
      onBlurCapture={() => {
        isPausedRef.current = false;
      }}
    >
      {/* Only the images repeat; the text remains fixed above every slide. */}
      <div
        className="hero-gallery"
        ref={galleryRef}
        onScroll={updateCurrentSlide}
        aria-label="可左右滑动并自动播放的鱼类图片"
      >
        {heroSlides.map((slide) => (
          <figure className="hero-slide" key={slide.src}>
            <img src={slide.src} alt={slide.alt} />
            <div className="hero-overlay" />
          </figure>
        ))}
      </div>

      {/* This content is rendered once and stays in place while images move. */}
      <div className="hero-content">
        <p className="hero-eyebrow">CHINESE LOCAL FISHBASE</p>

        <h1 id="hero-title">
          欢迎来到 CLFishbase
          <span>探索中国原生鱼类的多样世界</span>
        </h1>

        <p className="hero-intro">
          中国观赏鱼市场长期以引进物种为主，但近年来，中国原生鱼正逐渐走进更多玩家的视野。
          许多新手仍缺少清晰、可靠且容易理解的入门资料。CLFishbase
          希望通过图片与结构化数据，帮助你轻松认识中国本土鱼类及常见外来鱼类。
        </p>

        <div className="hero-actions">
          <a
            className="button-primary"
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              onShowPage("about");
            }}
          >
            了解鱼类基础
          </a>

          <a href="#explore">浏览中国原生鱼</a>
          <a
            href="#identify"
            onClick={(event) => {
              event.preventDefault();
              onShowPage("identify");
            }}
          >
            根据外形查询
          </a>
          <a
            href="#guide"
            onClick={(event) => {
              event.preventDefault();
              onShowPage("guide");
            }}
          >
            新手饲养指南
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
