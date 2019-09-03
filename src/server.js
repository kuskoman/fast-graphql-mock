const { ApolloServer } = require('apollo-server')
const mocks = require('./fakeData')

const createMockServer = (schema) => {
    return new ApolloServer({
        schema,
        mocks
    })
}

const startMockServer = (server, port) => {
    server.listen(port).then(({ url }) => {
        console.log(`Mock server ready at ${url}`);
    })
}

module.exports = {
    createMockServer: createMockServer,
    startMockServer: startMockServer
}