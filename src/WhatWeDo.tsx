import { useState, useEffect } from "react";
import { fetchPage } from "./Api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import type { Entry } from "contentful";
import type { Page } from "./Api";
import type { Document } from "@contentful/rich-text-types";

const entryId = "3zpIAoytGsVEiWNMNyM1yP";

const WhatWeDo = () => {
  const [content, setContent] = useState<Entry<Page>>();

  useEffect(() => {
    fetchPage(entryId).then((response) => {
      setContent(response);
    });
  }, []);

  return (
    <>
      <h1>What we do</h1>
      {content && documentToReactComponents(content.fields.content as Document)}
    </>
  );
};

export default WhatWeDo;
