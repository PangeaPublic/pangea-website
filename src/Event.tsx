import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEvent } from "./Api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Loader from "./Loader";

import type { Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import type { Event } from "./Api";

import "./Event.css";

const EventPage = () => {
  let { slug } = useParams();

  const [event, setPressRelease] = useState<Entry<Event> | null>(null);

  useEffect(() => {
    fetchEvent(slug ?? "").then((response) => {
      setPressRelease(response.items[0]);
    });
  }, [slug]);

  if (event === null) {
    return <Loader />;
  }

  return (
    <article className="article">
      <h1>{event.fields.title}</h1>
      {documentToReactComponents(event.fields.description as Document)}
      <section>
        <h3>When</h3>
        <time dateTime={event.fields.time}>
          {new Date(event.fields.time).toLocaleDateString()}{" "}
          {new Date(event.fields.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </time>
      </section>
      <section>
        <h3>Where</h3>
        <a href={event.fields.locationUrl}>{event.fields.location}</a>
      </section>
      <div>
        <a href={event.fields.registrationUrl}>Register</a>
        <a href={event.fields.facebookEventLink}>Facebook event</a>
      </div>
    </article>
  );
};

export default EventPage;
