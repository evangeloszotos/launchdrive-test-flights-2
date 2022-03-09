import { ApolloClient, InMemoryCache } from "@apollo/client";

const inMemoryCache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: inMemoryCache,
  connectToDevTools: true,
});

export default apolloClient;
