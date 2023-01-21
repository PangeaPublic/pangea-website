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

export { fetchPressReleases };
