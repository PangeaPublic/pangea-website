import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchResource } from "./Api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Loader from "./Loader";

import type { Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import type { Resource } from "./Api";

const ResourcePage = () => {
  let { slug } = useParams();

  const [resource, setResource] = useState<Entry<Resource> | null>(null);

  useEffect(() => {
    fetchResource(slug ?? "").then((response) => {
      setResource(response.items[0]);
    });
  }, [slug]);

  if (resource === null) {
    return <Loader />;
  }

  return (
    <article className="resource">
      <h1>{resource.fields.title}</h1>
      <div className="formatted-content">
        {documentToReactComponents(resource.fields.content as Document)}
      </div>
    </article>
  );
};

export default ResourcePage;
