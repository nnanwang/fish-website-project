function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Freshwater Field Notes home">
        <span className="brand-mark" aria-hidden="true">F</span>
        <span>
          <strong>Freshwater</strong>
          <small>Field Notes · Class 1</small>
        </span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#top">Home</a>
        <a href="#featured">Explore</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;
