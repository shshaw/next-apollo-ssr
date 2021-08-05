import { useQuery, gql, NetworkStatus } from "@apollo/client";
import React, { useEffect, useState } from "react";

const QUERY = gql`
  query Jobs {
    jobs {
      id
      title
    }
  }
`;

export default function IndexPage() {
  const { data, loading, networkStatus, error, refetch } = useQuery(QUERY, {
    notifyOnNetworkStatusChange: true
  });

  console.log({ loading, data, error, refetch });

  // On page load, the `networkStatus` should be NetworkStatus.ready ( `7` ) if the data is in the cache, and the page should not need to re-render.
  const [cached, setCached] = useState(true);
  useEffect(() => {
    if (networkStatus !== NetworkStatus.ready) setCached(false);
  }, [networkStatus]);

  if (loading) return "Loading...";

  return (
    <div>
      <h1>Next.js Server-Side Rendering with Apollo GraphQL</h1>
      <p>
        <strong>
          A simple approach to server-side rendering in Next.js with Apollo
          GraphQL, featuring no duplicate queries or complicated client/server
          logic, cache hydration and live queries for the client.
        </strong>
      </p>

      <p>
        Data provided by{" "}
        <a
          href="https://api.graphql.jobs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://api.graphql.jobs/
        </a>
        .
      </p>

      <p>
        This page's data was fetched on the{" "}
        <strong>{cached ? "Next.js server" : "client"}</strong>.<br />
        Network Status: <strong>{networkStatus}</strong>{" "}
        <button
          onClick={() =>
            refetch({
              fetchPolicy: "network-only"
            })
          }
        >
          Refetch
        </button>
      </p>

      <div
        style={{
          display: "grid",
          grid: "auto / repeat(auto-fit, minmax(15em,1fr))"
        }}
      >
        {[...data?.jobs].map((item) => {
          return (
            <ul key={item.id}>
              {Object.entries(item).map(([key, value]) => {
                if (typeof value !== typeof "") return null;

                return (
                  <li key={key}>
                    <strong>{key}</strong>: {value}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
