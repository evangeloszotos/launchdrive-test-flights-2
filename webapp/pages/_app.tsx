import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../apollo-client";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
