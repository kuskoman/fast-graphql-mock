const graphqlImport = require('graphql-import')
const graphqlTools = require('graphql-tools')
const apollo = require('apollo-server')

const schemaFile = graphqlImport.importSchema('./schema.graphql')
const schema = graphqlTools.makeExecutableSchema({ typeDefs: schemaFile })
graphqlTools.addMockFunctionsToSchema({ schema })

const server = new apollo.ApolloServer({
    schema: schema
})

server.listen().then(({ url }) => {
    console.log(`Mock server ready at ${url}`);
});