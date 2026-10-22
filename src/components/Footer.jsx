// Footer displays the website introduction, simple links, and copyright.
function Footer({ onShowHomeSection, onShowPage }) {
  // Return a semantic footer element.
  return (
    // The Footer remains shared across every standalone page.
    <footer className="site-footer">
      {/* Keep the introduction and navigation in one flexible row. */}
      <div className="footer-content">
        {/* This div contains the website identity and description. */}
        <div>
          {/* Main Chinese website name. */}
          <h2>中国原生鱼类网站</h2>

          {/* Smaller English subtitle. */}
          <p className="footer-english">Chinese Local Fishbase</p>

          {/* Brief explanation of the website purpose. */}
          <p className="footer-description">
            通过清晰的图片与结构化资料，为鱼类爱好者提供简单易懂的中国原生鱼类信息。
          </p>
        </div>

        {/* Provide a small set of useful in-page links. */}
        <nav className="footer-links" aria-label="页脚导航">
          {/* Return to the Hero section. */}
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

          {/* Move to the interactive appearance finder. */}
          <a
            href="#identify"
            onClick={(event) => {
              event.preventDefault();
              onShowPage("identify");
            }}
          >
            外形查询
          </a>

          {/* Move to the care guide and FAQ. */}
          <a
            href="#guide"
            onClick={(event) => {
              event.preventDefault();
              onShowPage("guide");
            }}
          >
            饲养指南
          </a>

          {/* Open the standalone About page. */}
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              onShowPage("about");
            }}
          >
            关于我们
          </a>

          {/* Return to the top of the page. */}
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            返回顶部 ↑
          </a>
        </nav>
      </div>

      {/* Display the project copyright line. */}
      <p className="copyright">© 2026 CLFishbase · 中国原生鱼类资料平台</p>
    </footer>
  );
}

// Export Footer so App.jsx can use it.
export default Footer;
