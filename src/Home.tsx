import { useState, useEffect } from "react";
import { fetchSplash } from "./Api";

import Loader from "./Loader";

import type { Entry, Asset } from "contentful";
import type { Splash } from "./Api";

import BannerDesktop from "./banner-desktop.jpg";
import BannerMobile from "./banner-mobile.jpg";

import "./Home.css";

const Home = () => {
  const [splash, setSplash] = useState<Entry<Splash> | null>(null);
  const [splashImage, setSplashImage] = useState<Asset | null>(null);
  useEffect(() => {
    fetchSplash().then((response) => {
      setSplash(response.items[0]);
      setSplashImage(response.includes?.Asset[0] ?? null);
    });
  }, []);

  console.log(splash, splashImage?.fields.file.url);

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
        </div>{" "}
      </div>
    </>
  );
};

export default Home;
