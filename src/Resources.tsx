import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchResources } from "./Api";

import type { Entry } from "contentful";
import type { Resource } from "./Api";

import Loader from "./Loader";

import "./Resources.css";

interface ResourceLinkProps {
  resource: Entry<Resource>;
}

const ResourceLink = ({ resource }: ResourceLinkProps) => {
  return (
    <Link
      to={`/resources/${resource.fields.vanityUrl}`}
      className="resource-link"
    >
      <article>
        <div className="title">
          <h2>{resource.fields.title}</h2>
        </div>
      </article>
    </Link>
  );
};

const Resources = () => {
  const [resources, setResources] = useState<Entry<Resource>[]>([]);

  useEffect(() => {
    fetchResources().then((response) => {
      setResources(response.items);
    });
  }, []);

  return (
    <>
      <h1>Resources</h1>
      {resources.length === 0 ? (
        <Loader />
      ) : (
        <>
          {resources.map((resource) => (
            <ResourceLink key={resource.sys.id} resource={resource} />
          ))}
        </>
      )}
    </>
  );
};

export default Resources;
