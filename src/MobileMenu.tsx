import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import "./MobileMenu.css";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onHandleMobileMenuClick = useCallback(() => {
    setIsMobileMenuOpen((previousState) => !previousState);
  }, []);

  const location = useLocation();

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
            <Link
              to="/who-we-are"
              className={classNames({
                selected: location.pathname === "/who-we-are",
              })}
              {...(!isMobileMenuOpen && { tabIndex: -1 })}
            >
              Who we are
            </Link>
          </li>
          <li>
            <Link
              to="/what-we-do"
              className={classNames({
                selected: location.pathname === "/what-we-do",
              })}
              {...(!isMobileMenuOpen && { tabIndex: -1 })}
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              to="/press"
              className={classNames({
                selected: location.pathname.startsWith("/press"),
              })}
              {...(!isMobileMenuOpen && { tabIndex: -1 })}
            >
              Pangea press
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className={classNames({
                selected: location.pathname.startsWith("/resources"),
              })}
              {...(!isMobileMenuOpen && { tabIndex: -1 })}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={classNames({
                selected: location.pathname.startsWith("/events"),
              })}
              {...(!isMobileMenuOpen && { tabIndex: -1 })}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/get-involved"
              className={classNames({
                selected: location.pathname === "/get-involved",
              })}
              {...(!isMobileMenuOpen && { tabIndex: -1 })}
            >
              Get involved
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
