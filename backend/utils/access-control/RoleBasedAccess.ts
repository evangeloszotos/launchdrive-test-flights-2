import { KeystoneContext } from "@keystone-6/core/types";

export const RoleBasedAccess =
  (...alllowedRoles: Array<string>) =>
  ({ context }: { context: KeystoneContext }) => {
    return context.session.data.roles
      .map((v: { name: string }) => v.name)
      .some((r: string) => alllowedRoles.indexOf(r) !== -1);
  };

type AccessFunction = ({ context }: { context: KeystoneContext }) => boolean;

export const AdminAccess: AccessFunction = ({
  context,
}: {
  context: KeystoneContext;
}) => {
  return RoleBasedAccess(`${process.env.ADMIN_ROLE}`)({ context });
};

export const AuthenticatedAccess: AccessFunction = ({
  context,
}: {
  context: KeystoneContext;
}) => {
  return RoleBasedAccess("Authenticated")({ context });
};

export const MultiroleAccess =
  (...data: Array<AccessFunction>) =>
  ({ context }: { context: KeystoneContext }) => {
    return data.some((item) => item({ context }));
  };
