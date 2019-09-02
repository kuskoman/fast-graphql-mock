const graphqlImport = require('graphql-import')
const graphqlTools = require('graphql-tools')

function mockSchema(file) {
    const schemaFile = graphqlImport.importSchema(file)
    const schema = graphqlTools.makeExecutableSchema({ typeDefs: schemaFile })
    graphqlTools.addMockFunctionsToSchema({ schema })

    return schema
}

module.exports = mockSchema