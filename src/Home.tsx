import { useState, useEffect } from "react";
import { fetchSplash } from "./Api";

import Loader from "./Loader";

import type { Entry, Asset } from "contentful";
import type { Splash } from "./Api";

import BannerDesktop from "./banner-desktop.jpg";
import BannerMobile from "./banner-mobile.jpg";
import WhoWeAreImage from "./who-we-are.jpg";
import WhatWeDoImage from "./what-we-do.jpg";
import GetInvolvedImage from "./get-involved.jpg";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [splash, setSplash] = useState<Entry<Splash> | null>(null);
  const [splashImage, setSplashImage] = useState<Asset | null>(null);
  useEffect(() => {
    fetchSplash().then((response) => {
      setSplash(response.items[0]);
      setSplashImage(response.includes?.Asset[0] ?? null);
    });
  }, []);

  return (
    <>
      {splash && splashImage ? (
        <div
          className="splash"
          style={{
            backgroundImage: `url(${splashImage.fields.file.url})`,
          }}
        >
          <h2>
            <span>&nbsp;{splash.fields.title}&nbsp;</span>
          </h2>
          <p>
            <span>&nbsp;{splash.fields.description}&nbsp;</span>
          </p>
          <a
            href={splash.fields.url}
            target={splash.fields.url.startsWith("http") ? "_blank" : "_self"}
            rel={
              splash.fields.url.startsWith("http") ? "noopener noreferrer" : ""
            }
            className="call-to-action"
          >
            {splash.fields.callToAction}
          </a>
        </div>
      ) : (
        <Loader />
      )}
      <div>
        <div className="banner-wrapper">
          <img className="banner-desktop" src={BannerDesktop} alt="" />
          <img className="banner-mobile" src={BannerMobile} alt="" />
        </div>
      </div>
      <nav className="quick-navigation">
        <ul>
          <li>
            <Link to="/who-we-are">
              <img src={WhoWeAreImage} alt="" />
              <span>Who we are</span>
            </Link>
          </li>
          <li>
            <Link to="/what-we-do">
              <img src={WhatWeDoImage} alt="" />
              <span>What we do</span>
            </Link>
          </li>
          <li>
            <Link to="/get-involved">
              <img src={GetInvolvedImage} alt="" />
              <span>Get involved</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
