import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPressReleases } from "./Api";

import type { Entry, Asset } from "contentful";
import type { PressRelease } from "./Api";

import "./Press.css";
import Loader from "./Loader";

interface PressLinkProps {
  pressRelease: Entry<PressRelease>;
  assets: Array<Asset>;
}

const PressLink = ({ pressRelease, assets }: PressLinkProps) => {
  const imageUrl = pressRelease.fields.image
    ? assets.find((asset) => asset.sys.id === pressRelease.fields.image?.sys.id)
        ?.fields.file.url ?? null
    : null;

  return (
    <Link
      to={`/press/${pressRelease.fields.vanityUrl}`}
      className="press-release-link"
    >
      <article>
        {imageUrl !== null && <img src={imageUrl} alt="" />}
        <div className="title-and-date">
          <h2>{pressRelease.fields.title}</h2>
          <time dateTime={pressRelease.fields.date}>
            {new Date(pressRelease.fields.date).toLocaleDateString()}
          </time>
        </div>
      </article>
    </Link>
  );
};

const Press = () => {
  const [pressReleases, setPressReleases] = useState<Entry<PressRelease>[]>([]);
  const [pressReleaseAssets, setPressReleaseAssets] = useState<Array<Asset>>(
    []
  );

  useEffect(() => {
    fetchPressReleases().then((response) => {
      setPressReleases(response.items);
      setPressReleaseAssets(response.includes.Asset);
    });
  }, []);

  return (
    <>
      <h1>Pangea Press</h1>
      {pressReleases.length === 0 ? (
        <Loader />
      ) : (
        <>
          {pressReleases.map((pressRelease) => (
            <PressLink
              key={pressRelease.sys.id}
              assets={pressReleaseAssets}
              pressRelease={pressRelease}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Press;
