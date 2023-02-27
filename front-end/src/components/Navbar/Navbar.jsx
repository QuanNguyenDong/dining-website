import './Navbar.css';
const Navbar = () => (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
          <span class="fs-1">Pho Nam Dinh</span>
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <a href="#!" class="nav-link link-secondary disabled">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/menu" class="nav-link link-dark">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" class="nav-link link-dark">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
);
export default Navbar;
