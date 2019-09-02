# fast-graphql-mock
**fast-graphql-mock** is a tiny library for mocking GraphQL server using only schema file.
Under the hood it uses ApolloServer and graphql-import library.

## Installation
Using yarn:

`yarn add fast-graphql-mock`


or npm:

`npm install fast-graphql-mock`


You can also install this package globally:


yarn:

`yarn global add fast-graphql-mock`

npm:

`npm install -g fast-graphql-mock`

## Usage
To mock a schema just run the application with node.
```shell
fast-graphql-mock
```

By default it looks for schema file with name of `schema.graphql` in current location.
To change this behavior use `-f` or `--file` flag.
```shell
fast-graphql-mock -f othername.graphql
```

Default port is set to 4000. If you want to change it just use `p` or `--port` flag.
```shell
fast-graphql-mock -p 3000
```

## Why?
Code inside this library is really short (what can't be said about it's dependencies),
however I wanted to make something what can make my workflow faster by avoiding need to create
mock every time I am working on app using GraphQL.