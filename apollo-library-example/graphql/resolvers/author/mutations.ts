import authors from "../../../data";

const authorMutations = {
    createAuthor: async (_, newAuthor) => {
        const id = Date.now().toString(36);
        console.log("newAuthor",newAuthor);
        authors.push(
            {
                id,
                name: newAuthor.author.name
            }
        )
        return authors.filter(author => String(author.id) ===String(id))[0];
    },
    updateAuthor: async (_, args) => {
    },
};

export default authorMutations;
