import { GraphQLServer } from "graphql-yoga";
import { v4 as uuidv4 } from "uuid";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Post from "./resolvers/Post";
import User from "./resolvers/User";
import Comment from "./resolvers/Comment";
import db from "./db";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Post,
    Comment,
    User,
  },
  context: {
    db,
  },
});

server.start(() => console.log("The server is up and running"));

// Tips and Tricks
// If relational data and if one of the fields  is not a scalar type we have to setup a custom resolver function to teach graphQL how to get the correct data.
