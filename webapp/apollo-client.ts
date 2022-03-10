import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  cache,
  // uri: "https://countries.trevorblades.com",
  uri: "http://localhost:1337/api/graphql",
});

export default apolloClient;
