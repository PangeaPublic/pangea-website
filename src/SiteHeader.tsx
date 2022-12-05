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
        <img className="logo-desktop" src={LogoDesktop} alt="Pangea" />
        <img className="logo-tablet" src={LogoTablet} alt="Pangea" />
        <img className="logo-mobile" src={LogoMobile} alt="Pangea" />
      </div>
      <DesktopMenu />
      <MobileMenu />
    </div>
  </header>
);

export default SiteHeader;
