import { GraphQLServer } from "graphql-yoga";

// Scalar Types - String, Int, Float, Boolean, ID

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
    post: "p1",
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

const posts = [
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

//Type definiitions (schema)
const typeDefs = `
    type Query {
        posts(query: String): [Post!]!
        users(query: String): [User!]! 
        comments(query: String): [Comment!]!
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post  { 
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment { 
      id: ID!
      text: String!
      author: User!
      post: Post!
    }
`;

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: "TUPM-18-2041",
        name: "James Paul Engay",
        email: "jamespaulengay@tup.edu.ph",
      };
    },
    post() {
      return {
        id: "1",
        title: "Learning GraphQL",
        body: "GraphQL is a specification",
        published: "true",
      };
    },
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }

      return users.filter((user) =>
        user.name.toLowerCase().includes(args.query)
      );
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query);
        const isBodyMatch = post.title.toLowerCase().includes(args.query);

        return isTitleMatch || isBodyMatch;
      });
    },
    comments(parent, args, ctx, info) {
      if (!args.query) {
        return comments;
      }
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.post === parent.id);
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => post.author === parent.id);
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.author === parent.id);
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    },
    post(parent, args, ctx, info) {
      return posts.find((post) => post.id === parent.post);
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log("The server is up and running"));

// Tips and Tricks
// If relational data and if one of the fields  is not a scalar type we have to setup a custom resolver function to teach graphQL how to get the correct data.
