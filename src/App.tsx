import LogoPrimary from "./pangea-logo-primary-120.png";

import "./App.css";

const App = () => (
  <div className="site">
    <header className="site-header">
      <div className="site-header-inner-wrapper">
        <div className="logo-wrapper">
          <img src={LogoPrimary} alt="Pangea" />
        </div>
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
              <a href="/">Get involved</a>
            </li>
            <li>
              <a href="/">Pangea press</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main className="site-main">Main</main>
    <footer className="site-footer">Footer</footer>
  </div>
);

export default App;
