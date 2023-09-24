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
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<KiwiFarmPage />
		</>
	);
}
