import { ApolloClient, InMemoryCache } from "@apollo/client";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

console.clear();
console.log({ windowApolloState });

let CLIENT;

export function getApolloClient() {
  if (!CLIENT) {
    CLIENT = new ApolloClient({
      ssrMode: true,
      uri: "https://api.graphql.jobs/",
      cache: new InMemoryCache().restore(windowApolloState || {})
    });
  }

  return CLIENT;
}
