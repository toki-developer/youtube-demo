module.exports = {
    schema: {
        [process.env.REACT_APP_GRAPHQL_END_POINT_ORIGIN]: {
            headers: {
              "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET_KEY,
            },
          },
    },
    documents: [
        "src/utils/graphql/query/*.graphql",
        "src/utils/graphql/mutation/*.graphql",
      ],
    generates: {
        "src/utils/graphql/generated.ts": {
            plugins: ["typescript", "typescript-operations","typescript-react-apollo"],
            config: {
                withHooks: true,
              },
          },
    },
  };