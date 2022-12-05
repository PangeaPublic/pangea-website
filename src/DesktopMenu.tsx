import "./DesktopMenu.css";

const DesktopMenu = () => (
  <nav className="desktop-menu">
    <ul>
      <li>
        <a href="/" className="selected">
          Who we are
        </a>
      </li>
      <li>
        <a href="/">What we do</a>
      </li>
      <li>
        <a href="/">Pangea press</a>
      </li>
      <li>
        <a href="/">Resources</a>
      </li>
      <li>
        <a href="/">Get involved</a>
      </li>
    </ul>
  </nav>
);

export default DesktopMenu;
