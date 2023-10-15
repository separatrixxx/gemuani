import { HomePage } from 'page_components/HomePage/HomePage';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='Gemuani Contacts' />
        <meta property='og:title' content='Authentic Georgian Freeze-Dried Delights' />
        <meta property='og:description' content='Authentic Georgian Freeze-Dried Delights' />
        <meta name='robots' content='index, nosnippet' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta property='og:url' content='https://www.gemuani.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Gemuani' />
        <meta name='keywords' content='freeze dry fruits, Freeze dried fruits, freeze dry vegetables, Freeze dried vegetables, Freeze dry berries, Freeze dried berries, Healthy food, Healthy snacks, Low sugar, Vegan, No sugar snaks, Natural Food' />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <HomePage />
    </>
  );
}
