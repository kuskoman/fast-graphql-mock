const { createMockServer, startMockServer } = require('./server')
const mockSchema = require('./mock')

module.exports = {
    mockSchema,
    createMockServer,
    startMockServer
}