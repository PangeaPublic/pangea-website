import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { fetchPressReleases } from "./Api";

import type { Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";

import type { PressRelease } from "./Api";

const Press = () => {
  const [pressReleases, setPressReleases] = useState<Entry<PressRelease>[]>([]);

  useEffect(() => {
    fetchPressReleases().then((response) => {
      setPressReleases(response.items);
    });
  }, []);

  console.log(pressReleases);

  return (
    <>
      <h1>Pangea Press</h1>
      {pressReleases.map((pressRelease) => (
        <article key={pressRelease.sys.id}>
          <h2>{pressRelease.fields.title}</h2>
          <time dateTime={pressRelease.fields.date}>
            {new Date(pressRelease.fields.date).toLocaleDateString()}
          </time>
          {documentToReactComponents(pressRelease.fields.content as Document)}
        </article>
      ))}
    </>
  );
};

export default Press;
