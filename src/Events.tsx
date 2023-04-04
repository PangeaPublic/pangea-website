import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEvents } from "./Api";

import type { Entry } from "contentful";
import type { Event } from "./Api";

import "./Events.css";
import Loader from "./Loader";

interface EventLinkProps {
  event: Entry<Event>;
}

const EventLink = ({ event }: EventLinkProps) => (
  <Link to={`/events/${event.fields.vanityUrl}`} className="event-link">
    <article>
      <div className="title-and-date">
        <h2>{event.fields.title}</h2>
        <time dateTime={event.fields.time}>
          {new Date(event.fields.time).toLocaleDateString()}{" "}
          {new Date(event.fields.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </time>
      </div>
    </article>
  </Link>
);

const Events = () => {
  const [events, setEvents] = useState<Entry<Event>[]>([]);

  useEffect(() => {
    fetchEvents().then((response) => {
      setEvents(response.items);
    });
  }, []);

  return (
    <>
      <h1>Events</h1>
      {events.length === 0 ? (
        <Loader />
      ) : (
        <>
          {events.map((event) => (
            <EventLink key={event.sys.id} event={event} />
          ))}
        </>
      )}
    </>
  );
};

export default Events;
