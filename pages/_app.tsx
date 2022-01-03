import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Header from "../src/components/commons/layout/header/Header.container";
import theme from "../src/commons/styles/variables";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
