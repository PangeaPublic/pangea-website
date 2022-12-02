import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import LogoPrimary from "./pangea-logo-primary-120.png";
import LogoSecondary from "./pangea-logo-secondary-120.png";

import "./SiteHeader.css";

const SiteHeader = () => (
  <header className="site-header">
    <div className="site-header-inner-wrapper">
      <div className="logo-wrapper">
        <img className="logo-primary" src={LogoPrimary} alt="Pangea" />
        <img className="logo-secondary" src={LogoSecondary} alt="Pangea" />
      </div>
      <DesktopMenu />
      <MobileMenu />
    </div>
  </header>
);

export default SiteHeader;
