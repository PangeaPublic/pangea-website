import { FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";

import SiteHeader from "./SiteHeader";

import "./App.css";

const publishedYear = 2022;
const currentYear = new Date().getFullYear();
const copyrightYear =
  currentYear > publishedYear
    ? `${publishedYear}-${currentYear}`
    : `${publishedYear}`;

const App = () => (
  <div className="site">
    <SiteHeader />
    <main className="site-main">
      <div className="site-main-inner-wrapper">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolores laboriosam, esse dignissimos fugit architecto officiis in,
          porro ipsam, blanditiis labore ex aspernatur hic voluptatem nam
          reprehenderit commodi laudantium repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, expedita
          consequatur odit hic suscipit aut! Provident quisquam, cupiditate
          consequatur neque vero adipisci delectus cum cumque dolor laborum,
          nostrum fugiat sint!
        </p>
      </div>
    </main>
    <footer className="site-footer">
      <div className="site-footer-inner-wrapper">
        <div>
          <div>
            <p className="copyright">
              © {copyrightYear} Pangea. All rights reserved.
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="social-heading">Contact Pangea</p>
            <nav className="social-icons">
              <ul>
                <li>
                  <a href="/">
                    <FaEnvelope />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default App;
