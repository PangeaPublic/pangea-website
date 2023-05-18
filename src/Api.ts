import { createClient } from "contentful";

import type { EntryFields, Asset } from "contentful";

const client = createClient({
  space: "xebeoitu79hp",
  accessToken: "czaZTMGIIky2mHN3AiU7YXrQTs8ia4Uf6loaHFf0BTI",
});

export type PressRelease = {
  content: EntryFields.RichText;
  date: EntryFields.Date;
  title: EntryFields.Text;
  vanityUrl: EntryFields.Text;
  image?: EntryFields.Link<Asset>;
};

const fetchPressReleases = () =>
  client.getEntries<PressRelease>({ content_type: "pressRelease", include: 1 });

const fetchPressRelease = (slug: string) =>
  client.getEntries<PressRelease>({
    content_type: "pressRelease",
    include: 1,
    "fields.vanityUrl[match]": slug,
  });

export type Event = {
  description: EntryFields.RichText;
  time: EntryFields.Date;
  title: EntryFields.Text;
  vanityUrl: EntryFields.Text;
  location: EntryFields.Text;
  locationUrl: EntryFields.Text;
  registrationUrl: EntryFields.Text;
  facebookEventLink: EntryFields.Text;
};

const fetchEvents = () => client.getEntries<Event>({ content_type: "event" });

const fetchEvent = (slug: string) =>
  client.getEntries<Event>({
    content_type: "event",
    include: 1,
    "fields.vanityUrl[match]": slug,
  });

export type Resource = {
  content: EntryFields.RichText;
  title: EntryFields.Text;
  vanityUrl: EntryFields.Text;
};

const fetchResources = () =>
  client.getEntries<Resource>({ content_type: "resource" });

const fetchResource = (slug: string) =>
  client.getEntries<PressRelease>({
    content_type: "resource",
    include: 1,
    "fields.vanityUrl[match]": slug,
  });

export type Page = {
  content: EntryFields.RichText;
  title: EntryFields.Text;
  vanityUrl: EntryFields.Text;
};

const fetchPage = (entryId: string) => client.getEntry<Page>(entryId);

export type Splash = {
  title: EntryFields.Text;
  description: EntryFields.Text;
  callToAction: EntryFields.Text;
  url: EntryFields.Text;
  image?: EntryFields.Link<Asset>;
};

const fetchSplash = () =>
  client.getEntries<Splash>({ content_type: "splash", include: 1, limit: 1 });

export {
  fetchPressReleases,
  fetchPressRelease,
  fetchEvents,
  fetchEvent,
  fetchResources,
  fetchResource,
  fetchPage,
  fetchSplash,
};
