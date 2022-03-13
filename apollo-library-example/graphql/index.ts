import { ApolloServer } from 'apollo-server-express';
import schema from './schema'; // We imported this

const apolloServer = new ApolloServer({
    schema
});

export default apolloServer;
