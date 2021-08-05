import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "#eee", padding: "1em" }}>
      <h1 style={{ margin: "0 0 1rem" }}>
        Next.js Server-Side Rendering with Apollo GraphQL
      </h1>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          Examples:
          <Link href="/">Simple</Link> <Link href="/refetch">Refetch</Link>{" "}
        </span>
        <span>
          <em>
            Data provided by{" "}
            <a
              href="https://api.graphql.jobs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://api.graphql.jobs/
            </a>
          </em>
        </span>
      </nav>
      <p>
        <strong>
          A simple approach to server-side rendering in Next.js with Apollo
          GraphQL, featuring no duplicate queries or complicated client/server
          logic, cache hydration and live queries for the client.
        </strong>
      </p>
    </header>
  );
}
