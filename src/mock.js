const graphqlImport = require('graphql-import')
const graphqlTools = require('graphql-tools')
const fs = require('fs')

function checkIfFileExist(path) {
    if (!fs.existsSync(path)) {
        console.error(`${path} does not exist`)
        process.exit(1)
    }
}

function mockSchema(file) {
    checkIfFileExist(file)
    const schemaFile = graphqlImport.importSchema(file)
    const schema = graphqlTools.makeExecutableSchema({ typeDefs: schemaFile })
    graphqlTools.addMockFunctionsToSchema({ schema })

    return schema
}

module.exports = mockSchema