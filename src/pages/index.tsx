import { HomePage } from 'page_components/HomePage/HomePage';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='Gemuani Contacts' />
        <meta property='og:title' content='Authentic Georgian Freeze-Dried Delights' />
        <meta property='og:description' content='Authentic Georgian Freeze-Dried Delights' />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <HomePage />
    </>
  );
}
