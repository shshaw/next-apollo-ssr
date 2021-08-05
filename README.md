# Next.js & Apollo GraphQL Server-Side Rendering

The [recommended Apollo method for Server-Side Rendering in Next.js](https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/) involves duplicating queries, separate code for server and client, and a bunch of added complications.

This approach uses built-in approaches from Next.js and Apollo to server-side render GraphQL queries and fill the Apollo Cache so the client doesn't have to refetch the data.

See comments in \_document.js and \_apollo.js for the most important bits.

## Demo:

- Live preview: https://xubfl.sse.codesandbox.io/
- Server & Code: https://codesandbox.io/s/github/shshaw/next-apollo-ssr/tree/main/

## References:

- https://nextjs.org/docs/advanced-features/custom-document
- https://www.apollographql.com/docs/react/performance/server-side-rendering/
- https://gist.github.com/Tylerian/16d48e5850b407ba9e3654e17d334c1e
- https://github.com/vercel/next.js/discussions/15736

To run this example:

- `npm install` or `yarn`
- `npm run dev` or `yarn dev`
