import { HomePage } from 'page_components/HomePage/HomePage';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <meta property='og:description' content='Authentic Georgian Freeze-Dried Delights. We have grown to be the only producer of freeze-dried fruits and vegetables in Georgia, and in 2017 we launched a plant entirely using European equipment. Up to 95% of the products used in production are grown in Georgia, including on our plantation.' />
        <meta property='og:title' content='Authentic Georgian Freeze-Dried Delights' />
        <meta property='og:description' content='Authentic Georgian Freeze-Dried Delights. We have grown to be the only producer of freeze-dried fruits and vegetables in Georgia, and in 2017 we launched a plant entirely using European equipment. Up to 95% of the products used in production are grown in Georgia, including on our plantation.' />
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
