const apollo = require('apollo-server')

function createMockServer(schema, port) {
    const server = new apollo.ApolloServer({
        schema: schema
    })

    server.listen(port).then(({ url }) => {
        console.log(`Mock server ready at ${url}`);
    })
}

module.exports = createMockServer