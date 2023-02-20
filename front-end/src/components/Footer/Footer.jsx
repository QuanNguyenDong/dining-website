import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__links">
          <h1 className="col-3 footer__links__title">Stay in touch</h1>
          <div className="col-3 footer__menu">
            <h1>Social Media</h1>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="col-3 footer__menu">
            <h1>Menu</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-3 footer__menu">
            <h1>Contact Us</h1>
            <ul>
              <li>Norton Street, Leichhardt</li>
              <li>Sydney, NSW</li>
              <li>0123 123 123</li>
              <li>email</li>
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
