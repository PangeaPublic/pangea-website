import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchResource } from "./Api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Loader from "./Loader";

import type { Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import type { PressRelease } from "./Api";

const Resource = () => {
  let { slug } = useParams();

  const [pressRelease, setPressRelease] = useState<Entry<PressRelease> | null>(
    null
  );

  useEffect(() => {
    fetchResource(slug ?? "").then((response) => {
      setPressRelease(response.items[0]);
    });
  }, [slug]);

  if (pressRelease === null) {
    return <Loader />;
  }

  return (
    <article className="resource">
      <h1>{pressRelease.fields.title}</h1>
      {documentToReactComponents(pressRelease.fields.content as Document)}
    </article>
  );
};

export default Resource;
