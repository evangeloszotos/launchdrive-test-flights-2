import { list } from "@keystone-6/core";
import { integer, relationship, text } from "@keystone-6/core/fields";

export const name = "Address";
export const schema = list({
  fields: {
    street: text(),
    city: text(),
    zip: integer(),
    // owner: relationship({
    //   ref: "User.address",
    //   ui: {
    //     displayMode: "cards",
    //     cardFields: ["name", "email"],
    //     linkToItem: true,
    //   },
    // }),
  },
});
