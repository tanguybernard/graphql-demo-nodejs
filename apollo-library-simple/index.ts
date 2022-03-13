import express from 'express';
import v1Router from './api/v1/router';
import { ApolloServer, gql } from 'apollo-server-express'

const app = express();
const port = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs: gql`
      type Query {
          hello: String
      }
  `,
    resolvers: {
        Query: {
            hello: () => 'Hello world!',
        },
    }
})


app.use('/api/v1', v1Router);

server.start().then(() => {
    server.applyMiddleware({ app, path: "/graphql" });
    app.listen(port, () => {
        console.log(`[App]: Listening on port ${port}`)
    });
})


