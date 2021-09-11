import {
    ApolloProvider as Provider,
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { PropsWithChildren } from "react";

import { fireAuth } from "../../utils/Firebase/config";


const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_END_POINT_ORIGIN,
});
// GraphQLのリクエストりくえすとお送信する際に付与するRequest Headersなどをここで指定する
// 本来であれば認証情報などをここで取得し、トークンをHeadersに付与する。
const authLink = setContext(async () => {
    const token = await fireAuth.currentUser?.getIdToken(true);

    // Bearerトークンでトークンを送信する
    // headersのプロパティは`Authorization`
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return { headers };
});

// Apollo Clientのインスタンスをここで作成している。
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),

  // Apollo Clientには強力なキャッシュ機能が搭載されています。
  // Apollo Clientを使う理由にこのキャッシュ機能のために使うと言っても過言ではありません。
  cache: new InMemoryCache(),
});

  export const ApolloProvider = ({ children }: PropsWithChildren<{}>) => {
    return <Provider client={apolloClient}>{children}</Provider>;
  };