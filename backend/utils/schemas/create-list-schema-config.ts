import fs from "fs";
import path from "path";

import { ListSchemaConfig } from "@keystone-6/core";
import { list } from "@keystone-6/core";

type ListSchema = ReturnType<typeof list>;

export interface NamedSchema {
  name: string;
  schema: ListSchema;
}

export function createListSchema(
  name: string,
  schema: ListSchema,
): NamedSchema {
  return {
    name,
    schema,
  };
}

export function createListSchemaConfig(
  namedSchemas: Array<NamedSchema>,
): ListSchemaConfig {
  const config: ListSchemaConfig = {};

  for (const namedSchema of namedSchemas) {
    config[namedSchema.name] = namedSchema.schema;
  }

  return config;
}

/**
 * NEEDS to be implemeted
 * @param dir
 * @returns
 */
export function createListSchemaConfigFromDirectory(dir: string) {
  const schemaFiles = fs
    .readdirSync(dir)
    .filter((file) => fs.lstatSync(path.join(dir, file)).isFile());

  const listSchemas = schemaFiles
    .filter((file) => !file.startsWith("index."))
    .map((schemaFile) => {
      const schemaModuleName = schemaFile.slice(
        0,
        schemaFile.length - path.extname(schemaFile).length,
      );

      // const schemaModulePath = `${path.relative(schemaFile, dir)}${
      //   path.sep
      // }${schemaModuleName}`.replace(/\\/g, "/");

      const schemaModulePath = `${path.join(dir, schemaModuleName)}`.replace(
        /\\/g,
        "/",
      );

      console.log("PATH:", schemaModulePath);

      return require("./" + schemaModulePath);
      //return require("../../schemas/" + schemaModuleName);
    });

  return createListSchemaConfig(listSchemas);
}
