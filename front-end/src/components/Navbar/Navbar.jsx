import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="grid wide">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.noodleLogo} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <Link to="/">Home</Link>
          </li>
          <li className="p__opensans">
            <Link to="/about">About</Link>
          </li>
          <li className="p__opensans">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="p__opensans">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
