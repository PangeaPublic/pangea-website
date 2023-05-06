import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEvent } from "./Api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  FaRegClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaCalendarPlus,
  FaFacebookSquare,
} from "react-icons/fa";

import Loader from "./Loader";
import { renderOptions } from "./utility";

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
    <article className="event">
      <h1>{event.fields.title}</h1>
      <div className="formatted-content">
        {documentToReactComponents(
          event.fields.description as Document,
          renderOptions
        )}
      </div>
      <section className="where-when">
        <div>
          <h3>When</h3>
          <p>
            <span className="icon">
              <FaCalendarAlt />
            </span>
            <time dateTime={event.fields.time}>
              <span>{new Date(event.fields.time).toLocaleDateString()}</span>
            </time>
          </p>
          <p>
            <span className="icon">
              <FaRegClock />
            </span>
            <time dateTime={event.fields.time}>
              <span>
                {new Date(event.fields.time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </time>
          </p>
        </div>
        {event.fields.location && (
          <div>
            <h3>Where</h3>
            <p>
              <span className="icon">
                <FaMapMarkerAlt />
              </span>
              {event.fields.locationUrl ? (
                <a
                  href={event.fields.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.fields.location}
                  <span className="external-link-icon">
                    <FaExternalLinkAlt />
                  </span>
                </a>
              ) : (
                <span>{event.fields.location}</span>
              )}
            </p>
          </div>
        )}
        <div className="links">
          {event.fields.registrationUrl && (
            <a
              href={event.fields.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaCalendarPlus />
              </span>
              Register
            </a>
          )}
          {event.fields.facebookEventLink && (
            <a
              href={event.fields.facebookEventLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaFacebookSquare />
              </span>
              Check out on Facebook
            </a>
          )}
        </div>
      </section>
    </article>
  );
};

export default EventPage;
