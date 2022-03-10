import { createListSchemaConfig } from "../utils/schemas/create-list-schema-config";

export const lists = createListSchemaConfig([
  // Auth
  // require("./user-role"),
  // User
  require("./user"),
  // require("./profile"),
  // require("./address"),

  // LaunchDrive
  require("./fake-door-test"),
  // require("./project"),
  // require("./template"),
  // require("./variant"),
]);
