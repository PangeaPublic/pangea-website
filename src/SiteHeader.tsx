import { Link } from "react-router-dom";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import LogoDesktop from "./pangea-logo-desktop-120.png";
import LogoTablet from "./pangea-logo-tablet-120.png";
import LogoMobile from "./pangea-logo-mobile-120.png";

import "./SiteHeader.css";

const SiteHeader = () => (
  <header className="site-header">
    <div className="site-header-inner-wrapper">
      <div className="logo-wrapper">
        <Link to="/">
          <img className="logo-desktop" src={LogoDesktop} alt="Home" />
          <img className="logo-tablet" src={LogoTablet} alt="Home" />
          <img className="logo-mobile" src={LogoMobile} alt="Home" />
        </Link>
      </div>
      <DesktopMenu />
      <MobileMenu />
    </div>
  </header>
);

export default SiteHeader;
