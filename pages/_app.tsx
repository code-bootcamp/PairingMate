import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global } from '@emotion/react';
import {globalStyles} from '../src/commons/styles/globalStyles';
import Header from '../src/components/commons/layout/header/Header.container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
