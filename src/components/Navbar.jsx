function Navbar() {
  return (
    <header className="navbar">
      <nav aria-label="主导航">
        <a className="logo" href="#home">鱼类探索馆</a>
        <div className="nav-links">
          <a href="#home">首页</a>
          <a href="#explore">探索鱼类</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
