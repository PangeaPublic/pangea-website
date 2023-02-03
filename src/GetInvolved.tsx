import { useState, useEffect } from "react";
import { fetchPage } from "./Api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import type { Entry } from "contentful";
import type { Page } from "./Api";
import type { Document } from "@contentful/rich-text-types";

const entryId = "2rjMZncKk5wxWYN16gcSIj";

const GetInvolved = () => {
  const [content, setContent] = useState<Entry<Page>>();

  useEffect(() => {
    fetchPage(entryId).then((response) => {
      setContent(response);
    });
  }, []);

  return (
    <>
      <h1>Get involved</h1>
      {content && documentToReactComponents(content.fields.content as Document)}
    </>
  );
};

export default GetInvolved;
