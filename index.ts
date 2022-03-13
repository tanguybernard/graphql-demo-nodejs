import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {schema, root} from './infrastructure/i2/schema';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World !")
})

app.get('/test', (req, res) => {
    res.send("Teest !")
})

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql:true
}))

app.listen(5000, () => {
    console.log('Listeing port 5000 !')
})
