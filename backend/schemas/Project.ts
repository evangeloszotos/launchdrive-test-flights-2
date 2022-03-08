import {relationship, select, text} from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";
import {AllowOwnerAccessByCustomPath} from "../utils/access-control/AllowOwnerAccess";

const access = AllowOwnerAccessByCustomPath((ownerId) => ({profile: {owner: {id: {equals: ownerId}}}}));

export const Project = list({
  access: {
    filter: {
      query: access,
      update: access,
      delete: access,
    }
  },
  fields: {
    profile: relationship({
      ref: "Profile.projects",
      ui: {
        hideCreate: true
      }
    }),
    status: select({
      options: [
        {label: "Active", value: "active"},
        {label: "Inactive", value: "inactive"},
      ],
      defaultValue: "active",
      ui: {
        displayMode: "segmented-control",
      },
      validation: {
        isRequired: true
      }
    }),
    title: text(),
    notes: text({
      ui: {
        displayMode: "textarea"
      }
    }),
    variants: relationship({
      ref: "Variant.project",
      many: true,
    }),
  },
  hooks: {
    validateInput: ({resolvedData, addValidationError}) => {
      if (!resolvedData.profile)
        addValidationError("Please select a profile");
    },
    resolveInput: ({resolvedData, operation, context}) => {
      if (operation === "create")
        resolvedData.owner =  { connect: { id: context.session.itemId } };
      return resolvedData;
    },
  }
});