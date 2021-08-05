export default function List({ data }) {
  return (
    <div
      style={{
        display: "grid",
        grid: "auto / repeat(auto-fit, minmax(15em,1fr))",
        gap: "1rem"
      }}
    >
      {[...data].map((item) => {
        return (
          <ul
            key={item.id}
            style={{
              margin: 0,
              padding: "1rem",
              listStyle: "none",
              background: "#eee",
              borderRadius: ".5rem"
            }}
          >
            {Object.entries(item).map(([key, value]) => {
              if (typeof value !== typeof "" || key === "__typename")
                return null;

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
  );
}
