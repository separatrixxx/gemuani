import { ErrorPage } from 'page_components/ErrorPage/ErrorPage';
import Head from 'next/head';


export default function PageNotFound() {
	return (
		<>
			<Head>
				<title>Gemuani - 404</title>
				<meta name='description' content=' Gemuani Not Found' />
				<meta property='og:title' content='Gemuani Not Found' />
				<meta property='og:description' content='Gemuani Not Found' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<ErrorPage error={404} />
		</>
	);
}