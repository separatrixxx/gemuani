import { PartnersPage } from 'page_components/PartnersPage/PartnersPage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export default function Partners() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{'Gemuani - ' + setLocale(router.locale).partners}</title>
				<meta name='description' content='Our Partners' />
				<meta property='og:title' content='Our Partners' />
				<meta property='og:description' content='Our Partners' />
				<meta name='robots' content='index, nosnippet' />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta property='og:url' content='https://www.gemuani.com/partners' />
				<meta property='og:type' content='website' />
				<meta property='og:site_name' content='Gemuani' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<PartnersPage />
		</>
	);
}
