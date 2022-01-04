import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import Header from '../src/components/commons/layout/header/Header.container';
import theme from "../src/commons/styles/variables";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const firebaseConfig = {
    apiKey: "AIzaSyDgy7AmFAGZ5FPmsm3MhmgJvoNvyZApn7Y",
    authDomain: "pairingmate-dev.firebaseapp.com",
    projectId: "pairingmate-dev",
    storageBucket: "pairingmate-dev.appspot.com",
    messagingSenderId: "234476987446",
    appId: "1:234476987446:web:147698d507b39acb30a497",
    measurementId: "G-77ZN8XW422"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const MyApp=({ Component, pageProps }: AppProps)=> {
    // ApolloClient 셋팅
    const uploadLink = createUploadLink({
        uri: 'https://backend04-team.codebootcamp.co.kr/team02',
    });
    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink as ApolloLink]),
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Header />
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
    );
}

export default MyApp;
