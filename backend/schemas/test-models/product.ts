import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const name = "Product";
export const schema = list({
  fields: {
    name: text(),
    comments: relationship({ ref: "Comment.product", many: true }),
  },
});
