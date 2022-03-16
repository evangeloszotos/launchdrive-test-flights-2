import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const name = "Comment";
export const schema = list({
  fields: {
    name: text(),
    content: text(),
    product: relationship({
      ref: "Product.comments",
      many: false,
      access: { read: () => true },
    }),
    post: relationship({ ref: "Post.comments", many: false }),
  },
});
