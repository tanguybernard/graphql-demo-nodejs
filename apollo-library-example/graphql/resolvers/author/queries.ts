import authors from "../../../data";

const authorQueries = {
    authors: async (_) => {
        return authors;
    },
    author: async (_, {id}) => {
        return authors.filter(author => String(author.id) ===String(id))[0];
    },
};

export default authorQueries;
