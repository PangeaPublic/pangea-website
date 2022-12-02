import { useState, useCallback } from "react";
import classNames from "classnames";

import DesktopMenu from "./DesktopMenu";

import LogoPrimary from "./pangea-logo-primary-120.png";
import LogoSecondary from "./pangea-logo-secondary-120.png";

import "./App.css";

const App = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const onHandleHamburgerMenuClick = useCallback(() => {
    setIsHamburgerMenuOpen((previousState) => !previousState);
  }, []);

  return (
    <div className="site">
      <header className="site-header">
        <div className="site-header-inner-wrapper">
          <div className="logo-wrapper">
            <img className="logo-primary" src={LogoPrimary} alt="Pangea" />
            <img className="logo-secondary" src={LogoSecondary} alt="Pangea" />
          </div>
          <DesktopMenu />
          <button
            className={classNames("hamburger-menu-button", {
              "is-open": isHamburgerMenuOpen,
            })}
            onClick={onHandleHamburgerMenuClick}
          >
            <div />
            <div />
            <div />
          </button>
          <nav
            className={classNames("mobile-menu", {
              "is-open": isHamburgerMenuOpen,
            })}
          >
            <ul>
              <li>
                <a
                  href="/"
                  className="selected"
                  {...(!isHamburgerMenuOpen && { tabIndex: -1 })}
                >
                  Who we are
                </a>
              </li>
              <li>
                <a href="/" {...(!isHamburgerMenuOpen && { tabIndex: -1 })}>
                  What we do
                </a>
              </li>
              <li>
                <a href="/" {...(!isHamburgerMenuOpen && { tabIndex: -1 })}>
                  Get involved
                </a>
              </li>
              <li>
                <a href="/" {...(!isHamburgerMenuOpen && { tabIndex: -1 })}>
                  Pangea press
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="site-main">Main</main>
      <footer className="site-footer">Footer</footer>
    </div>
  );
};

export default App;
