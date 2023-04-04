import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import "./DesktopMenu.css";

const DesktopMenu = () => {
  const location = useLocation();

  return (
    <nav className="desktop-menu">
      <ul>
        <li>
          <Link
            to="/"
            className={classNames({ selected: location.pathname === "/" })}
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
          >
            Get involved
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
