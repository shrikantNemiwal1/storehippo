import "../css/navbar.css";

const Navbar = ({ scrollYPosition }) => {
  return (
    <nav className={`navbar ${scrollYPosition > 60 ? "navbar--white" : ""}`}>
      <span className="navbar__icon">
        <img
          src={
            "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.settings/521c4d7548c284890e000001/594a155440e9fb9e592f2ba9-240x240.png"
          }
        />
      </span>

      <ul className="navbar__list">
        <li className="navbar__item">Solutions</li>
        <li className="navbar__item">Develop</li>
        <li className="navbar__item">Examples</li>
        <li className="navbar__item">Pricing</li>
        <li className="navbar__item">Resources</li>
      </ul>

      <button className="btn-primary">contact us</button>

      <button className="btn-menu">
        <div className="btn-menu__menu">
          <ul>
            <li>Contact Sales</li>
            <li>Start Free Trial</li>
            <li>Schedule Demo</li>
            <li>Login to your store</li>
          </ul>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
