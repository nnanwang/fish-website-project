function Navbar() {
  return (
    <header className="navbar">
      <nav aria-label="Main navigation">
        <a className="logo" href="#home">Fish Explorer</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
