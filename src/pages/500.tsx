import { ErrorPage } from 'page_components/ErrorPage/ErrorPage';
import Head from 'next/head';


export default function PageServerFailure() {
	return (
		<>
			<Head>
				<title>Gemuani - 500</title>
				<meta name='description' content=' Gemuani Server Failure' />
				<meta property='og:title' content='Gemuani Server Failure' />
				<meta property='og:description' content='Gemuani Server Failure' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<ErrorPage error={500} />
		</>
	);
}