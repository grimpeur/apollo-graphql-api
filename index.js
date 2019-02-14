import express from 'express';

import {
  ApolloServer
} from 'apollo-server-express';

// The GraphQL schema in string form
import typeDefs from './schema';

// The resolvers
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Initialize the app
const app = express();

server.applyMiddleware({
  app
});


// Start the server
app.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
});