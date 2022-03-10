import { KeystoneContext } from "@keystone-6/core/types";

export const AllowOwnerAccessByCustomPath =
  (buildPath: (ownerId: string) => Record<string, any>) =>
  ({ context }: { context: KeystoneContext }) => {
    return (
      context.session.data.roles
        .map((v: { name: string }) => v.name)
        .indexOf(`${process.env.ADMIN_ROLE}`) !== -1 ||
      buildPath(context.session.itemId)
    );
  };

export const AllowOwnerAccess = ({ context }: { context: KeystoneContext }) => {
  return (
    context.session.data.roles
      .map((v: { name: string }) => v.name)
      .indexOf(`${process.env.ADMIN_ROLE}`) !== -1 || {
      owner: { id: { equals: context.session.itemId } },
    }
  );
};
