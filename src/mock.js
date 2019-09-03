const { importSchema } = require('graphql-import')
const { makeExecutableSchema, addMockFunctionsToSchema} = require('graphql-tools')
const fs = require('fs')

const checkIfFileExist = (path) => {
    if (!fs.existsSync(path)) {
        console.error(`${path} does not exist`)
        process.exit(1)
    }
}

const mockSchema = (file) => {
    checkIfFileExist(file)
    const schemaFile = importSchema(file)
    const schema = makeExecutableSchema({ typeDefs: schemaFile })
    addMockFunctionsToSchema({ schema })

    return schema
}

module.exports = mockSchema