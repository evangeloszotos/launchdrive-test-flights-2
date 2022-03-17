import { list } from "@keystone-6/core";
import { integer, relationship, text } from "@keystone-6/core/fields";

export const name = "Tag";
export const schema = list({
  fields: {
    name: text(),
  },
});
