import { AboutPage } from 'page_components/AboutPage/AboutPage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export default function About() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{'Gemuani - ' + setLocale(router.locale).titles.about_title}</title>
				<meta name='description' content='Gemuani is a Georgian company founded in 2011. We have grown to be the only producer of freeze-dried fruits and vegetables in Georgia, and in 2017 we launched a plant entirely using European equipment. Up to 95% of the products used in production are grown in Georgia, including on our plantation.' />
				<meta property='og:title' content='About Gemuani' />
				<meta property='og:description' content='Gemuani is a Georgian company founded in 2011. We have grown to be the only producer of freeze-dried fruits and vegetables in Georgia, and in 2017 we launched a plant entirely using European equipment. Up to 95% of the products used in production are grown in Georgia, including on our plantation.' />
				<meta name='robots' content='index, nosnippet' />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta property='og:url' content='https://www.gemuani.com/about' />
				<meta property='og:type' content='website' />
				<meta property='og:site_name' content='Gemuani' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<AboutPage />
		</>
	);
}
