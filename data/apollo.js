import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

console.clear();
let CLIENT;

export function getApolloClient(forceNew) {
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: isServer,
      uri: "https://api.graphql.jobs/",
      cache: new InMemoryCache().restore(windowApolloState || {})
      //      /** Default options to disable SSR for all queries. */
      //       defaultOptions: {
      //         /**
      //          * Skip queries when server side rendering
      //          * https://www.apollographql.com/docs/react/data/queries/#ssr
      //          */
      //         watchQuery: {
      //           ssr: false
      //         },
      //         query: {
      //           ssr: false
      //         }
      //         /**
      //          *Selectively enable specific queries like so:
      //          * ```
      //          * const response = useQuery(QUERY, { ssr: true });
      //          * ```
      //          */
      //      }
    });
  }

  return CLIENT;
}

export const QUERY = gql`
  query Jobs {
    jobs {
      id
      title
      postedAt
    }
  }
`;
