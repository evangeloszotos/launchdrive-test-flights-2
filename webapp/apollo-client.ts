import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  // typePolicies: {
  //   Query: {
  //     fields: {
  //       fakeDoorTests: {
  //         read(managers, options) {
  //           console.log("Read: fakeDoorTests");
  //           return [{ id: 1, name: "MyManager" }];
  //         },
  //         merge(existing = [], incoming: any[]) {
  //           console.log("Merge:", existing, incoming);
  //           return [...existing, ...incoming];
  //         },
  //       },
  //     },
  //   },
  // },
});
export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  cache,
  // uri: "https://countries.trevorblades.com",
  uri: 'http://localhost:1337/api/graphql',
});

export default apolloClient;
