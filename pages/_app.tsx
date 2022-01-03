import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import Header from '../src/components/commons/layout/header/Header.container';
import { initializeApp } from 'firebase/app';

// firebase
// 송민성 : firebase appKey설정
const firebaseConfig = {
    apiKey: 'AIzaSyBKq5dWLNYR5vLlm67HnDb_j2fAQY5Fo14',
    authDomain: 'pairingmate-6126c.firebaseapp.com',
    projectId: 'pairingmate-6126c',
    storageBucket: 'pairingmate-6126c.appspot.com',
    messagingSenderId: '1084875720748',
    appId: '1:1084875720748:web:d09dab9be5a037e5982989',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
