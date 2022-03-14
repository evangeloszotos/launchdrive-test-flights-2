import { list } from "@keystone-6/core";
import { integer, relationship, text } from "@keystone-6/core/fields";

export const name = "TagTemplateEdge";
export const schema = list({
  fields: {
    template: relationship({ ref: "Template" }),
    tag: relationship({ ref: "Tag" }),
  },
});
