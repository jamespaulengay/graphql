// Comments demo data
const comments = [
  {
    id: "c1",
    text: "This is great",
    author: "TUPM-18-2041",
    post: "p1",
  },
  {
    id: "c2",
    text: "Nice!",
    author: "TUPM-18-2041",
    post: "p1",
  },
  {
    id: "c3",
    text: "I hope I can learn it to",
    author: "TUPM-18-1511",
    post: "p2",
  },
  {
    id: "c4",
    text: "Thank you for this amazing content",
    author: "TUPM-18-1511",
    post: "p2",
  },
];

// Users demo data.
const users = [
  {
    id: "TUPM-18-2041",
    name: "James Paul Engay",
    email: "jamespaulengay@gmail.com",
  },
  {
    id: "TUPM-18-1511",
    name: "Marcial Zipagan Jr.",
    email: "marcialzipagan@tup.edu.ph",
  },
  {
    id: "TUPM-18-2421",
    name: "Ray John Cantonjos",
    email: "rayjohn.cantonjos@tup.edu.ph",
  },
];

// Demo post data

let posts = [
  {
    id: "p1",
    title: "How to gain strength using weights",
    body: "Gaining strength is a little bit challenging...",
    published: true,
    author: "TUPM-18-2041",
    comments: "c1",
  },
  {
    id: "p2",
    title: "How to counter Plant axies using Beast and Mech axies?",
    body: "Beast and Mech are great against plant axies...",
    published: true,
    author: "TUPM-18-2041",
    comments: "c1",
  },
  {
    id: "p3",
    title: "For my being",
    body: "",
    published: false,
    author: "TUPM-18-1511",
    comments: "c1",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
