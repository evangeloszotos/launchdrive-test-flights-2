import { createListSchemaConfig } from "../utils/schemas/create-list-schema-config";

export const lists = createListSchemaConfig([
  // Auth
  // require("./user-role"),
  // User
  require("./user"),
  // require("./profile"),
  // require("./address"),

  // LaunchDrive
  require("./test-flight"),
  require("./test-flight-variant"),
  require("./text-input"),

  // GraphQL Testing
  //require("./product"),
  //require("./post"),
  //require("./comment"),
]);
