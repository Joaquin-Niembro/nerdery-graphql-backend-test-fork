import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema";
import {getUserById, getUsers} from "./resolver"

const resolvers = {
    Query: {
        getUsers: () => getUsers(),
        getUserById: (parent, { id, source }) => getUserById(id, source)
    },
};

async function main() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

main()
