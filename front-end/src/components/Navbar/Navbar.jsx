import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="grid wide">
      <nav className="app__navbar">
        <Link className="app__navbar-logo" to="/">
          <img src={images.noodleLogo} alt="app__logo" />
          <h1>Pho Nam Dinh</h1>
        </Link>
        <ul className="app__navbar-links">
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

export default Navbar;
