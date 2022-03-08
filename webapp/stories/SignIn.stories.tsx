import { action } from "@storybook/addon-actions";
import SignIn from "../containers/SignIn";

export default {
  title: "Forms/SignIn",
  component: SignIn,
};

export const Default = () => <SignIn onSignIn={action("SignIn")} />;
export const InitialValues = () => (
  <SignIn
    initialEmail="jane@doe.io"
    initialPassword="Qwert123456"
    onSignIn={action("SignIn")}
  />
);

export const Loading = () => (
  <SignIn
    loading={true}
    onSignIn={action("SignIn")}
    initialEmail="jane@doe.io"
    initialPassword="Qwert123456"
  />
);
export const Error = () => <SignIn error={true} />;
