# fast-graphql-mock
*fast-graphql-mock* is a tiny library for mocking GraphQL server using only schema file.
Under the hood it uses ApolloServer and graphql-import library.

## How to use
To mock a schema just run the application with node.
```shell
node .
```

By default it looks for schema file with name of `schema.graphql` in current location.
To change this behavior use `-f` or `--file` flag.
```shell
node . -f othername.graphql
```

Default port is set to 4000. If you want to change it just use `p` or `--port` flag.
```shell
node . -p 3000
```

## Why?
Code inside this library is really short (what can't be said about it's dependencies),
however I wanted to make something what can make my workflow faster by avoiding need to create
mock every time I am working on app using GraphQL.