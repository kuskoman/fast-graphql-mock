import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addMocksToSchema } from "@graphql-tools/mock";
import { existsSync } from "fs";
import { GraphQLSchema } from "graphql";

const checkIfFileExist = (path: string): void => {
  if (!existsSync(path)) {
    console.error(`${path} does not exist`);
    process.exit(1);
  }
};

const mockSchema = (file: string): GraphQLSchema => {
  checkIfFileExist(file);
  const schema = loadSchemaSync(file, {
    loaders: [new GraphQLFileLoader()],
  });

  return addMocksToSchema({ schema });
};

export default mockSchema;
