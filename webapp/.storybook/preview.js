import "../styles/globals.css";
import * as NextImage from "next/image";
import { RouterContext } from "next/dist/shared/lib/router-context";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from '../mui-theme'

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
