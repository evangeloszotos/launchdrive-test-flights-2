import { relationship, select, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";

export const name = "TextInput";
export const schema = list({
  fields: {
    variant: relationship({ ref: "TestFlightVariant" }),
    inputFieldId: text(),
    value: text(),
    //file: s3File({}),
  },
});
