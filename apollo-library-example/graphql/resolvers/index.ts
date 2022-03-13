import { authorQueries, authorMutations } from './author';


const resolvers = {
    Query: {
        ...authorQueries,
        //...bookQueries
    },
    Mutation: {
        ...authorMutations,
    },
};

export default resolvers;
