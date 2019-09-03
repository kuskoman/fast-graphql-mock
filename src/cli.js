#! /usr/bin/env node

const program = require('commander')
const { createMockServer, startMockServer } = require('./server')
const mockSchema = require('./mock')

program
    .option('-f --file <file>', 'schema file location', 'schema.graphql')
    .option('-p --port <port>', 'apollo server port', '4000')

program.parse(process.argv)

const options = program.opts()

const schema = mockSchema(options.file)
const server = createMockServer(schema)
startMockServer(server, options.port)
