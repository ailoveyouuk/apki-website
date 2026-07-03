// Curated LinkedIn posts featured on the Company page.
//
// LinkedIn doesn't offer an API for personal-profile posts, so this list is
// filled in by hand rather than pulled automatically. To feature a new post:
//
//   1. Open the post on LinkedIn, click the "..." menu, choose
//      "Embed this post", and copy the iframe `src` URL it gives you
//      (looks like https://www.linkedin.com/embed/feed/update/urn:li:share:XXXXXXXXXXXXXXXXXX).
//   2. Add an entry below with that URL as `embedSrc`.
//   3. Deploy — it'll show up on the Company page automatically.
//
// Remove old entries whenever you want to retire a post from the page.

export type LinkedInPost = {
  id: string;
  author: "Alan Greig" | "Lucy Watts" | "APK Industries";
  embedSrc: string;
  /** Optional override — LinkedIn's default embed height is ~570px. */
  height?: number;
};

export const linkedinPosts: LinkedInPost[] = [
  // Example entry (kept commented out until a real embed URL replaces it):
  // {
  //   id: "example",
  //   author: "Alan Greig",
  //   embedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890123456789",
  // },
];
