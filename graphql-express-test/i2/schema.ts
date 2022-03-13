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

function getMyUser(args){
    return users.filter(user => String(user.id)===String(args.id))[0];
}

function getUserByEmail(args){
    return users.filter(user => String(user.email)===String(args.email))[0];
}

// Resolver
const root = {
    myuser: getMyUser,
    userByEmail: getUserByEmail
};


const queryTest = new GraphQLObjectType({
    name: 'Query',
    fields: {
        myuser: {
            type: userType,
            args: {
                id: {type: GraphQLID},
            }
        },
        userByEmail: {
            type: userType,
            args: {
                email: {type: GraphQLString},
            }
        }
    },
})

const schema = new GraphQLSchema({
    query: queryTest,
})

export {schema, root};
