import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPressRelease } from "./Api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Loader from "./Loader";

import type { Entry, Asset } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import type { PressRelease } from "./Api";

import "./Article.css";

const Article = () => {
  let { slug } = useParams();

  const [pressRelease, setPressRelease] = useState<Entry<PressRelease> | null>(
    null
  );
  const [pressReleaseAsset, setPressReleaseAsset] = useState<Asset | null>(
    null
  );

  useEffect(() => {
    fetchPressRelease(slug ?? "").then((response) => {
      setPressRelease(response.items[0]);
      setPressReleaseAsset(response.includes?.Asset[0] ?? null);
    });
  }, [slug]);

  if (pressRelease === null) {
    return <Loader />;
  }

  return (
    <article className="article">
      {pressReleaseAsset && (
        <img className="image" src={pressReleaseAsset.fields.file.url} alt="" />
      )}
      <h1>{pressRelease.fields.title}</h1>
      <div className="formatted-content">
        {documentToReactComponents(pressRelease.fields.content as Document)}
      </div>
    </article>
  );
};

export default Article;
