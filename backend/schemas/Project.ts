import { relationship, select, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { AllowOwnerAccessByCustomPath } from "../utils/access-control/AllowOwnerAccess";
import { createListSchema } from "../utils/schemas/create-list-schema-config";

const access = AllowOwnerAccessByCustomPath((ownerId) => ({
  profile: { owner: { id: { equals: ownerId } } },
}));

export const name = "Project";
export const schema = list({
  access: {
    filter: {
      query: access,
      update: access,
      delete: access,
    },
  },
  fields: {
    profile: relationship({
      ref: "Profile.projects",
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
    name: text(),
    notes: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    variants: relationship({
      ref: "Variant.project",
      many: true,
    }),
  },
  hooks: {
    validateInput: ({ resolvedData, addValidationError }) => {
      if (!resolvedData.profile) {
        addValidationError("Please select a profile");
      }
    },
    resolveInput: ({ resolvedData, operation, context }) => {
      if (operation === "create")
        resolvedData.owner = { connect: { id: context.session.itemId } };
      return resolvedData;
    },
  },
});
