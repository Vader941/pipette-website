import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1>Pipette Calibration Services</h1>
          <p>Independent Specialist Service</p>
        </div>

        <nav className="site-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;