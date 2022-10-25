import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid wide">
        <div className="footer__links">
          <h1 className="footer__links__title">Stay in touch</h1>
          <div className="footer__menu">
            <h1>Social Media</h1>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer__menu">
            <h1>Menu</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer__menu">
            <h1>Lorem.</h1>
            <ul>
              <li>Lorem.</li>
              <li>Lorem.</li>
              <li>Lorem.</li>
              <li>Lorem.</li>
            </ul>
          </div>
        </div>
        <div className="footer__information">
          <div>
            <div className="footer__information__site-title">Pho Nam Dinh</div>
            <small className="footer__information__date">&copy; 2022</small>
          </div>
          <ul className="footer__legal-menu">
            <li>PRIVACY</li>
            <li>TERM & CONDITIONS</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
