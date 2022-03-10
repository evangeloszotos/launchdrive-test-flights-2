import { relationship, select, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { AllowOwnerAccess } from "../utils/access-control/AllowOwnerAccess";
import { User } from "./user";

export interface Profile {
  id: string;
  name: string;
  notes: string;
  owner: User;
  // projects
  status: "active" | "inactive";
}

export const name = "Profile";
export const schema = list({
  access: {
    filter: {
      query: AllowOwnerAccess,
      update: AllowOwnerAccess,
      delete: AllowOwnerAccess,
    },
  },
  fields: {
    name: text(),
    notes: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    owner: relationship({
      ref: "User.profiles",
      ui: {
        displayMode: "cards",
        cardFields: ["email"],
        linkToItem: true,
        hideCreate: true,
        removeMode: "none",
        createView: {
          fieldMode: "hidden",
        },
      },
      access: {
        read: () => true,
        create: () => false,
        update: () => false,
      },
    }),
    projects: relationship({
      ref: "Project.profile",
      many: true,
      ui: {
        createView: {
          fieldMode: "hidden",
        },
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
    resolveInput: ({ resolvedData, operation, context }) => {
      if (operation === "create")
        resolvedData.owner = { connect: { id: context.session.itemId } };
      return resolvedData;
    },
  },
});
