import "../styles/globals.css";
import "../styles/fonts/NotoSansKR/NotoSansKR.css";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import theme from "../src/commons/styles/variables";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import Layout from "../src/components/commons/layout";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { getAccessToken } from "../src/commons/libraries/token/getAccessToken";
import { onError } from "@apollo/client/link/error";
import Topbutton from "../src/components/commons/buttons/topbutton/TopButton";

const firebaseConfig = {
  apiKey: "AIzaSyDgy7AmFAGZ5FPmsm3MhmgJvoNvyZApn7Y",
  authDomain: "pairingmate-dev.firebaseapp.com",
  projectId: "pairingmate-dev",
  storageBucket: "pairingmate-dev.appspot.com",
  messagingSenderId: "234476987446",
  appId: "1:234476987446:web:147698d507b39acb30a497",
  measurementId: "G-77ZN8XW422",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
  setUserInfo?: Dispatch<SetStateAction<{}>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const Value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러를 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 3. 기존에 실패한 요청 다시 재요청하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`, // 2. refreshToken으로 accessToken 재발급 받기 => restoreAccessToken
            },
          });
          return forward(operation);
        }
      }
    }
  });

  // ApolloClient 셋팅
  const uploadLink = createUploadLink({
    uri: "https://backend04-team.codebootcamp.co.kr/team02",
    headers: { 
      authorization: `Bearer ${accessToken}`
    },
    credentials: "include",
  });
  

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={Value}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Topbutton />
        </ThemeProvider>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};

export default MyApp;
