const graphqlImport = require('graphql-import')
const graphqlTools = require('graphql-tools')
const apollo = require('apollo-server')
const program = require('commander')


program.version('0.0.1')
program
    .option('-f --file <file>', 'schema file location', 'schema.graphql')
    .option('-p --port <port>', 'apollo server port', '4000')

const options = program.opts()

const schemaFile = graphqlImport.importSchema(options.file)
const schema = graphqlTools.makeExecutableSchema({ typeDefs: schemaFile })
graphqlTools.addMockFunctionsToSchema({ schema })

const server = new apollo.ApolloServer({
    schema: schema
})

server.listen(program.port).then(({ url }) => {
    console.log(`Mock server ready at ${url}`);
});