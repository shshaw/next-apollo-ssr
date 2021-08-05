import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY } from "../data/apollo";

import List from "../components/List";

export default function IndexPage() {
  const { data, loading, error } = useQuery(QUERY);

  console.log({ loading, data, error });

  // On page load, the `networkStatus` should be NetworkStatus.ready ( `7` ) if the data is in the cache, and the page should not need to re-render.
  const [cached, setCached] = useState(true);
  useEffect(() => {
    if (loading) setCached(false);
  }, [loading]);

  if (loading) return "Loading...";

  return (
    <div>
      <p>
        This page's data was fetched on the{" "}
        <strong>{cached ? "Next.js server" : "client"}</strong>.
      </p>

      <List data={data?.jobs} />
    </div>
  );
}
