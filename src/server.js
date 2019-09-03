const { ApolloServer } = require('apollo-server')
const fakeData = require('./fakeData')

const createMockServer = (schema) => {
    return new ApolloServer({
        schema,
        mocks: fakeData
    })
}

const startMockServer = (server, port) => {
    server.listen(port).then(({ url }) => {
        console.log(`Mock server ready at ${url}`);
    })
}

module.exports = {
    createMockServer,
    startMockServer
}