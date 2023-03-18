import Link from "next/dist/client/link";
import { useState } from "react";
import { Home, News, Pages, Project } from "./menus";

const MobileHeader = ({
  transparentTop,
  transparentHeader,
  topSecondaryBg,
}) => {
  const [toggle, setToggle] = useState(false);
  const [activeToggle, setActiveToggle] = useState("");
  const setActive = (value) =>
      setActiveToggle(value === activeToggle ? "" : value),
    activeLi = (value) =>
      value === activeToggle ? { display: "block" } : { display: "none" },
    activeArrow = (value) => (value === activeToggle ? "submenu-opened" : "");
  return (
    <header
      className={`site-header sticky-header  d-lg-none ${
        transparentTop ? "topbar-transparent" : ""
      } ${transparentHeader ? "transparent-header" : ""}`}
      id="header-sticky"
    >
      <div
        className={`header-topbar d-none d-sm-block ${
          topSecondaryBg ? "topbar-secondary-bg" : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <ul className="contact-info">
                <li>
                  <a href="#">
                    <i className="far fa-envelope" /> support@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-map-marker-alt" /> 250 Main Street, 2nd
                    Floor, USA
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto d-none d-md-block">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-wrapper breakpoint-on">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo.png" alt="Funden" />
                </a>
              </Link>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              <Link href="/events">
                <a className="main-btn nav-btn d-none d-sm-inline-block">
                  Donate Now <i className="far fa-arrow-right" />
                </a>
              </Link>
              <a
                href="#"
                className={`nav-toggler ${toggle ? "panel-opened" : ""}`}
                onClick={() => setToggle(!toggle)}
              >
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-menu-panel ${toggle ? "panel-opened" : ""}`}>
        <div className="panel-logo">
          <Link href="/">
            <a>
              <img src="assets/img/logo-white.png" alt="Funden" />
            </a>
          </Link>
        </div>
        <ul className="panel-menu" id="menu">
          <li>
            <a href="#">
              Home
              <span
                className={`dd-trigger ${activeArrow("home")}`}
                onClick={() => setActive("home")}
              >
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="submenu" style={activeLi("home")}>
              {Home}
            </ul>
          </li>
          <li>
            <a href="#">
              Project
              <span
                className={`dd-trigger ${activeArrow("Project")}`}
                onClick={() => setActive("Project")}
              >
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="submenu" style={activeLi("Project")}>
              {Project}
            </ul>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <a href="#">
              News
              <span
                className={`dd-trigger ${activeArrow("News")}`}
                onClick={() => setActive("News")}
              >
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="submenu" style={activeLi("News")}>
              {News}
            </ul>
          </li>
          <li>
            <a href="#">
              Pages
              <span
                className={`dd-trigger ${activeArrow("Pages")}`}
                onClick={() => setActive("Pages")}
              >
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="submenu" style={activeLi("Pages")}>
              {Pages}
            </ul>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="panel-extra">
          <a href="#" className="main-btn btn-white">
            Donate Now <i className="far fa-arrow-right" />
          </a>
        </div>
        <a href="#" className="panel-close" onClick={() => setToggle(false)}>
          <i className="fal fa-times" />
        </a>
      </div>
    </header>
  );
};

export default MobileHeader;
