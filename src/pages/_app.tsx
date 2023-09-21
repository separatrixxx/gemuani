import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gemuani - Authentic Georgian Freeze-Dried Delights</title>
        <meta name='description' content='Authentic Georgian Freeze-Dried Delights.' />
        <meta property='og:title' content='Gemuani' />
        <meta property='og:description' content='Authentic Georgian Freeze-Dried Delights.' />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" type='image/ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}