import React, { useEffect, useState } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import { QUERY } from "../data/apollo";

import List from "../components/List";

export default function RefetchPage() {
  const { data, loading, networkStatus, error, refetch } = useQuery(QUERY, {
    notifyOnNetworkStatusChange: true
  });

  console.log({ loading, error });

  // On page load, the `networkStatus` should be NetworkStatus.ready ( `7` ) if the data is in the cache, and the page should not need to re-render.
  const [cached, setCached] = useState(true);
  useEffect(() => {
    if (networkStatus !== NetworkStatus.ready) setCached(false);
  }, [networkStatus]);

  if (loading) return "Loading...";

  return (
    <div>
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

      <List data={data?.jobs} />
    </div>
  );
}
