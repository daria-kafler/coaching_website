export default function Navigation() {
  return (
    <>
      <section className="nav-wrapper">
        <nav>
          <a href="#root" className="logo">
            Daria.
          </a>
          <ul>
            <li className="navlink">
              <a href="#about">About</a>
            </li>
            <li className="navlink">
              <a href="#products">Products</a>
            </li>
            <li className="navlink">
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
          <a href="#form" className="primary-button">
            Get in touch
          </a>
          <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
          </svg>
        </nav>
      </section>
    </>
  );
}
