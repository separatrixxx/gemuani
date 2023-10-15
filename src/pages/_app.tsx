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
        <meta name='robots' content='index, nosnippet' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta property='og:url' content='https://www.gemuani.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Gemuani' />
        <meta name='keywords' content='freeze dry fruits, Freeze dried fruits, freeze dry vegetables, Freeze dried vegetables, Freeze dry berries, Freeze dried berries, Healthy food, Healthy snacks, Low sugar, Vegan, No sugar snaks, Natural Food' />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}