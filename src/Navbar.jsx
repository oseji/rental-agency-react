const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MinimumLivingCost</h2>

      <ul className="navList">
        <li className="navText">
          <a href="#" className="navLink">
            Home
          </a>
        </li>
        <li className="navText">
          <a href="#" className="navLink">
            Landlords
          </a>
        </li>
        <li className="navText">
          <a href="#section3" className="navLink">
            Properties
          </a>
        </li>
        <li className="navText">
          <a href="#footer" className="navLink">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
