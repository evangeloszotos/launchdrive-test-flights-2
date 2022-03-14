import { list } from "@keystone-6/core";
import { integer, relationship, text } from "@keystone-6/core/fields";

export const name = "Post";
export const schema = list({
  fields: {
    name: text(),
    content: text(),
    viewsCount: integer({ defaultValue: 0 }),
    comments: relationship({ ref: "Comment.post", many: true }),
  },
});
