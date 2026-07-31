function Navbar() {
  return (
    // The header identifies the top section of the website.
    <header className="navbar">
      {/* aria-label explains the purpose of this navigation to screen readers. */}
      <nav aria-label="主导航">

              <a className="logo" href="#home">
          {/* The strong element displays the main Chinese website name. */}
          <strong>中国原生鱼类网站</strong>

          {/* The small element displays the English subtitle. */}
          <small>Chinese Local Fishbase</small>
        </a>

        {/* This container keeps the three navigation links together. */}
        <div className="nav-links">
          <a href="#home">首页</a>
          <a href="#explore">探索鱼类</a>
          <a href="#about">关于我们</a>
        </div>
      </nav>
    </header>
  );
}

// Export Navbar so App.jsx can use it.
export default Navbar;