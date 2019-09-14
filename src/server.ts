import { GraphQLSchema } from "graphql"
import { ApolloServer } from 'apollo-server'
import fakeData from './fakeData'

export const createMockServer = (schema: GraphQLSchema) => {
    return new ApolloServer({
        schema,
        mocks: fakeData
    })
}

export const startMockServer = (server: ApolloServer, port: string | number) => {
    server.listen(port).then(({ url }) => {
        console.log(`Mock server ready at ${url}`);
    })
}