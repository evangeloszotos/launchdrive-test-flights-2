import {password, relationship, text} from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";
import crypto from "crypto";
import {IProfile} from "./Profile";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: string;
    s3Secret: string;
    profiles: Array<IProfile>;
}

export const User = list({
  fields: {
    name: text({validation: {isRequired: true}}),
    email: text({
      validation: {isRequired: true},
      isIndexed: "unique",
      isFilterable: true,
    }),
    password: password({
      validation: {
        isRequired: true,
        match: {
          regex: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{12,64}/,
          explanation: "Your password is insecure"
        }
      }
    }),
    roles: relationship({ref: "UserRole", many: true}),
    s3Secret: text({
      isIndexed: true,
      access: {
        read: () => false,
        create: () => false,
        update: () => false,
      },
    }),
    //
    profiles: relationship({ref: "Profile.owner", many: true}),
  },
  ui: {
    listView: {
      initialColumns: ["name"],
    },
  },
  hooks: {
    validateInput: ({resolvedData, addValidationError}) => {
      const {email, password} = resolvedData;
      if (email && !email.endsWith("@launchdrive.io")) {
        addValidationError("Please use a @launchdrive.io email");
      }
    },
    resolveInput: ({resolvedData, operation}) => {
      if (operation === "create")
        resolvedData.s3Secret = crypto.randomBytes(64).toString("hex");
      return resolvedData;
    },
    afterOperation: async ({operation, item}) => {
      const concreteItem = item as {id: string, s3Secret: string};
      if (operation === "create") {
        await fetch("http://localhost:5000/", {
          method: "PUT",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            accessKey: "M0NC0qWMLQgtHJdDyC5KNV5iE3MYr1xo2ie4wloZ+/",
            username: concreteItem.id,
            secret: concreteItem.s3Secret
          })
        });
      }
    },
  }
});