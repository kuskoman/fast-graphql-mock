const { ApolloServer } = require('apollo-server')
const mocks = require('./fakeData')

const createMockServer = (schema, port) => {
    const server = new ApolloServer({
        schema,
        mocks
    })

    server.listen(port).then(({ url }) => {
        console.log(`Mock server ready at ${url}`);
    })
}

module.exports = createMockServer