import {buildSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema, GraphQLTypeResolver} from 'graphql';
import users from "../data";


const NameType = new GraphQLObjectType({
    name: 'Name',
    fields: () => ({
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
    }),
})

const userType = new GraphQLObjectType({
    name: 'User',
    fields : () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        name: { type: NameType }
    })
});


//query and resolvers
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: userType,
            args: {
                id: { type: GraphQLID },
            },
            resolve: (source, { id }) => {
                return users.filter(user => String(user.id)===String(id))[0];
            },
        },
        users: {
            type: new GraphQLList(userType),
            resolve: () => {
                return users
            },
        },
    },
})

const schema = new GraphQLSchema({
    query: queryType,
})
