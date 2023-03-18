import Link from "next/dist/client/link";
import { useEffect } from "react";
import { stickyNav } from "../utils";
import { Home, News, Pages, Project } from "./menus";

const Header = ({
  transparentTop,
  transparentHeader,
  topSecondaryBg,
  isConnected,
  account,
  signer,
  connectToMetamask,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });
  return (
    <header
      className={`site-header sticky-header d-none d-lg-block ${
        transparentTop ? "topbar-transparent" : ""
      } ${transparentHeader ? "transparent-header" : ""}`}
      id="header-sticky"
    >
      <div
        className={`header-topbar d-none d-sm-block ${
          topSecondaryBg ? "topbar-secondary-bg" : ""
        }`}
      ></div>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link href="moralis.io">
                <a>
                  <img src="assets/img/moralis-logo.png" alt="Moralis" />
                </a>
              </Link>
            </div>
            <div className="nav-menu" id="menu">
              <ul>
                <li>
                  <a href="#">
                    Home
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{Home}</ul>
                </li>
                <li>
                  <a href="#">
                    Project
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{Project}</ul>
                </li>
                <li>
                  <Link href="/events">
                    <a>Events</a>
                  </Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              {!isConnected ? (
                <button
                  onClick={connectToMetamask}
                  className="main-btn nav-btn d-none d-sm-inline-block"
                >
                  Connect Wallet
                </button>
              ) : (
                <button disabled className="nav-btn d-sm-inline-block">
                  Connected
                </button>
              )}

              <a href="#" className="nav-toggler">
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
