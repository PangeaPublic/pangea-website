import { useState, useEffect } from "react";
import { fetchPage } from "./Api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Loader from "./Loader";
import { renderOptions } from "./utility";

import type { Entry } from "contentful";
import type { Page } from "./Api";
import type { Document } from "@contentful/rich-text-types";

const entryId = "2UW7FKlcjNNyP2k3jSxxa8";

const WhoWeAre = () => {
  const [content, setContent] = useState<Entry<Page>>();

  useEffect(() => {
    fetchPage(entryId).then((response) => {
      setContent(response);
    });
  }, []);

  return (
    <>
      <h1>Who we are</h1>
      {content ? (
        <div className="formatted-content">
          {documentToReactComponents(
            content.fields.content as Document,
            renderOptions
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default WhoWeAre;
