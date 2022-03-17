import { list } from "@keystone-6/core";
import { text, relationship } from "@keystone-6/core/fields";

export const name = "TestFlight";
export const schema = list({
  fields: {
    name: text(),
    variants: relationship({ ref: "TestFlightVariant.testFlight", many: true }),
  },
});
