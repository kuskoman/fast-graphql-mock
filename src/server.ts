import { GraphQLSchema } from "graphql";
import { ApolloServer } from "apollo-server";
import fakeData from "./fakeData";

export const createMockServer = (
  schema: GraphQLSchema,
  additionalFakers: any = {}
): ApolloServer => {
  return new ApolloServer({
    schema,
    mocks: { ...fakeData, ...additionalFakers },
  });
};

export const startMockServer = (
  server: ApolloServer,
  port: string | number
): void => {
  server.listen(port).then(({ url }) => {
    console.log(`Mock server ready at ${url}`);
  });
};
