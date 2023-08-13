import {
  FaFacebook,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

const publishedYear = 2022;
const currentYear = new Date().getFullYear();
const copyrightYear =
  currentYear > publishedYear
    ? `${publishedYear}-${currentYear}`
    : `${publishedYear}`;

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-inner-wrapper">
      <div>
        <div>
          <p className="copyright">
            © {copyrightYear} Pangea. All rights reserved.
          </p>
          <address>
            Prague LGBT Center,
            <br />
            Železná 492/18,
            <br />
            110 00 Staré Město, Czechia
          </address>
        </div>
      </div>
      <div className="contact">
        <div>
          <p className="social-heading">Contact us</p>
          <a
            className="email-address"
            href="mailto:pangea.public@gmail.com"
          >
            <span className="social-icons">
              <FaEnvelope />
            </span>
            <span className="email-address-text">
              pangea.public@gmail.com
            </span>
          </a>
        </div>
        <div>
          <p className="social-heading">Follow us</p>
          <nav className="social-icons">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/pangea.resistance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pangea_prague/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@pangea_prague"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCkqMpSO9SzY9WTiZwvQC8yw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
