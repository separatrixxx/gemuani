import { KiwiFarmPage } from 'page_components/KiwiFarmPage/KiwiFarmPage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export default function KiwiFarm() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{'Gemuani - ' + setLocale(router.locale).titles.kiwi_farm_title}</title>
				<meta name='description' content='Kiwi Farm' />
				<meta property='og:title' content='Kiwi Farm' />
				<meta property='og:description' content='Kiwi Farm' />
				<meta name='robots' content='index, nosnippet' />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta property='og:url' content='https://www.gemuani.com/kiwi_farms' />
				<meta property='og:type' content='website' />
				<meta property='og:site_name' content='Gemuani' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<KiwiFarmPage />
		</>
	);
}
