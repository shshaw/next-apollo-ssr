import React from "react";

import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "../data/apollo";

import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
  const client = getApolloClient();

  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
