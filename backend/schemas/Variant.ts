import { relationship, select, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { AllowOwnerAccessByCustomPath } from "../utils/access-control/AllowOwnerAccess";
import { createListSchema } from "../utils/schemas/create-list-schema-config";

const access = AllowOwnerAccessByCustomPath((f) => ({
  project: { profile: { owner: { id: { equals: f } } } },
}));

export const name = "Variant";
export const schema = list({
  access: {
    filter: {
      query: access,
      update: access,
      delete: access,
    },
  },
  fields: {
    name: text(),
    project: relationship({
      ref: "Project.variants",
      ui: {
        hideCreate: true,
      },
    }),
    template: relationship({
      ref: "Template",
      ui: {
        hideCreate: true,
      },
    }),
    status: select({
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
      defaultValue: "active",
      ui: {
        displayMode: "segmented-control",
      },
      validation: {
        isRequired: true,
      },
    }),
  },
  hooks: {
    validateInput: ({ resolvedData, addValidationError }) => {
      if (!resolvedData.template)
        addValidationError("Please select a template");
    },
  },
});
