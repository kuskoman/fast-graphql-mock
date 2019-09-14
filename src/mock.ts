import { importSchema } from 'graphql-import'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { existsSync } from 'fs'
import { GraphQLSchema } from 'graphql'

const checkIfFileExist = (path: string): void => {
    if (!existsSync(path)) {
        console.error(`${path} does not exist`)
        process.exit(1)
    }
}

const mockSchema = (file: string): GraphQLSchema => {
    checkIfFileExist(file)
    const schemaFile = importSchema(file)
    const schema = makeExecutableSchema({ typeDefs: schemaFile })
    addMockFunctionsToSchema({ schema })

    return schema
}

export default mockSchema