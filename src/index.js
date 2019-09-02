const program = require('commander')
const startMockServer = require('./server')
const mockSchema = require('./mock')

program.version('0.0.1')
program
    .option('-f --file <file>', 'schema file location', 'schema.graphql')
    .option('-p --port <port>', 'apollo server port', '4000')

const options = program.opts()

const schema = mockSchema(options.file)
startMockServer(schema, options.port)