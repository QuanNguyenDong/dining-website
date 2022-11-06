import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <div className="grid wide">
      <nav className="app__navbar">
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <Link className="app__navbar-logo" to="/">
          <img src={images.noodleLogo} alt="app__logo" />
          <h1>Pho Nam Dinh</h1>
        </Link>
        <ul className="app__navbar-links" ref={navRef}>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
//  hide-on-mobile-tablet
export default Navbar;
