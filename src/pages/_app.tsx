import { setLocale } from 'helpers/locale.helper';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{'Gemuani - ' + setLocale(router.locale).titles.main_title}</title>
        <meta name='description' content='Authentic Georgian Freeze-Dried Delights.' />
        <meta property='og:title' content='Authentic Georgian Freeze-Dried Delights' />
        <meta property='og:description' content='Authentic Georgian Freeze-Dried Delights.' />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}