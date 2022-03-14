import "dotenv/config";
import { config, graphQLSchemaExtension } from "@keystone-6/core";
import { withAuth, session } from "./auth";
import { lists } from "./schemas";
//const lists = createListSchemaConfigFromDirectory("./schemas");

export default withAuth(
  config({
    server: {
      port: 1337,
      cors: {
        origin: "*",
      },
    },

    db: {
      provider: "postgresql",
      url: "postgres://postgres:mysecretpassword@localhost:5432/keystone",
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
    images: {
      upload: "local",
      local: {
        storagePath: "public/images",
        baseUrl: "/images",
      },
    },
  }),
);
