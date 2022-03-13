import express from 'express';
import v1Router from './api/v1/router';
import graphqlServer from './graphql';

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/v1', v1Router);

graphqlServer.start().then(() => {
    graphqlServer.applyMiddleware({ app, path: "/graphql" });
    app.listen(port, () => {
        console.log(`[App]: Listening on port ${port}`)
    });
})
