import './Navbar.css';

const Navbar = () => (
  <header className="header">
      <div className="container">
        <div className="nav__list">
          <ul className="nav">
            <li className="nav-item">
              <h1>Pho Nam Dinh</h1>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link disabled" href="#!">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#!">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#!">Contact</a>
            </li>
          </ul>
        </div>
      </div>
  </header>
)
export default Navbar;
