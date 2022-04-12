import { GraphQLServer, PubSub } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Post from "./resolvers/Post";
import User from "./resolvers/User";
import Comment from "./resolvers/Comment";
import Subscription from "./resolvers/Subscription";
import db from "./db";

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Post,
    Comment,
    User,
  },
  context: {
    db,
    pubsub,
  },
});

server.start(() => console.log("The server is up and running"));

// Tips and Tricks
// If relational data and if one of the fields  is not a scalar type we have to setup a custom resolver function to teach graphQL how to get the correct data.
