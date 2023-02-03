import { createClient } from "contentful";

import type { EntryFields } from "contentful";

const client = createClient({
  space: "xebeoitu79hp",
  accessToken: "czaZTMGIIky2mHN3AiU7YXrQTs8ia4Uf6loaHFf0BTI",
});

export type PressRelease = {
  content: EntryFields.RichText;
  date: EntryFields.Date;
  title: EntryFields.Text;
  vanityUrl: EntryFields.Text;
};

const fetchPressReleases = () =>
  client.getEntries<PressRelease>({ content_type: "pressRelease" });

export type Event = {
  description: EntryFields.RichText;
  time: EntryFields.Date;
  title: EntryFields.Text;
  vanityUrl: EntryFields.Text;
  location: EntryFields.Text;
  registrationUrl: EntryFields.Text;
  facebookEventLink: EntryFields.Text;
};

const fetchEvents = () => client.getEntries<Event>({ content_type: "event" });

export type Resource = {
  content: EntryFields.RichText;
  title: EntryFields.Text;
  vanityUrl: EntryFields.Text;
};

const fetchResources = () =>
  client.getEntries<Resource>({ content_type: "resource" });

export type Page = {
  content: EntryFields.RichText;
  title: EntryFields.Text;
  vanityUrl: EntryFields.Text;
};

const fetchPage = (entryId: string) => client.getEntry<Page>(entryId);

export { fetchPressReleases, fetchEvents, fetchResources, fetchPage };
