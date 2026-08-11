// Footer displays the website introduction, simple links, and copyright.
function Footer() {
  // Return a semantic footer element.
  return (
    // The id allows About links to scroll to this section.
    <footer className="site-footer" id="about">
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
          <a href="#home">首页</a>

          {/* Move to the fish card section. */}
          <a href="#explore">探索鱼类</a>

          {/* Return to the top of the page. */}
          <a href="#home">返回顶部 ↑</a>
        </nav>
      </div>

      {/* Display the project copyright line. */}
      <p className="copyright">© 2026 CLFishbase · 学生学习项目</p>
    </footer>
  );
}

// Export Footer so App.jsx can use it.
export default Footer;
