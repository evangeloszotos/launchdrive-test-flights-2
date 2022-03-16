import { relationship, select, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { s3File } from "@launchdrive/keystone-s3-input";

export const name = "FileInput";
export const schema = list({
  fields: {
    variant: relationship({ ref: "TestFlightVariant" }),
    inputFieldId: text(),
    // file: s3File({}),
  },
});
