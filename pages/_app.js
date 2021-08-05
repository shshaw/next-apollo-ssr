import React from "react";

import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "../data/apollo";

export default function MyApp({ Component, pageProps }) {
  const client = getApolloClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
