import { useState, useCallback } from "react";
import classNames from "classnames";

import "./MobileMenu.css";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onHandleMobileMenuClick = useCallback(() => {
    setIsMobileMenuOpen((previousState) => !previousState);
  }, []);

  return (
    <>
      <button
        className={classNames("mobile-menu-button", {
          "is-open": isMobileMenuOpen,
        })}
        onClick={onHandleMobileMenuClick}
      >
        <div />
        <div />
        <div />
      </button>
      <nav
        className={classNames("mobile-menu", {
          "is-open": isMobileMenuOpen,
        })}
      >
        <ul>
          <li>
            <a
              href="/"
              className="selected"
              {...(!isMobileMenuOpen && { tabIndex: -1 })}
            >
              Who we are
            </a>
          </li>
          <li>
            <a href="/" {...(!isMobileMenuOpen && { tabIndex: -1 })}>
              What we do
            </a>
          </li>
          <li>
            <a href="/" {...(!isMobileMenuOpen && { tabIndex: -1 })}>
              Pangea press
            </a>
          </li>
          <li>
            <a href="/" {...(!isMobileMenuOpen && { tabIndex: -1 })}>
              Resources
            </a>
          </li>
          <li>
            <a href="/" {...(!isMobileMenuOpen && { tabIndex: -1 })}>
              Get involved
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
