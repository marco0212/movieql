import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graghql/resolvers"

const server = new GraphQLServer({
  typeDefs: "./graghql/schema.graphql",
  resolvers
});

server.start(() => console.log("Graphql Server Running"));
