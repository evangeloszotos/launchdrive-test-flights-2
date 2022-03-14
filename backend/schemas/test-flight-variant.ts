import { relationship, select, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";

export const name = "TestFlightVariant";
export const schema = list({
  fields: {
    name: text(),
    testFlight: relationship({
      ref: "TestFlight.variants",
    }),
  },
});
