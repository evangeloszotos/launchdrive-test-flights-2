import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";

export const name = "FakeDoorTest";
export const schema = list({
  fields: {
    name: text(),
  },
});
