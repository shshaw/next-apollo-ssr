import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";

// const QUERY = gql`
//   query Countries {
//     country(code: "BR") {
//       name
//       native
//       capital
//       emoji
//       currency
//       languages {
//         code
//         name
//       }
//     }
//   }
// `;

const QUERY = gql`
  query Jobs {
    jobs {
      id
      title
      locationNames
    }
  }
`;

export default function IndexPage() {
  const { data, loading, error } = useQuery(QUERY);
  const list = data?.jobs || [];
  console.log({ loading, data, error });

  const [cached, setCached] = useState(true);
  useEffect(() => {
    if (loading) setCached(false);
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Apollo GraphQL Server-Side Rendering</h1>
      <p>
        {cached ? "Data was cached from SSR" : "Data was not cached from SSR"}
      </p>

      <div
        style={{
          display: "grid",
          grid: "auto / repeat(auto-fit, minmax(15em,1fr))"
        }}
      >
        {list.map((item) => {
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
