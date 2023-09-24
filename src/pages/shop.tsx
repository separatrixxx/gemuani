import { ShopPage } from 'page_components/ShopPage/ShopPage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export default function Shop() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{'Gemuani - ' + setLocale(router.locale).titles.shop_title}</title>
				<meta name='description' content='Gemuani Shop' />
				<meta property='og:title' content='Gemuani Shop' />
				<meta property='og:description' content='Gemuani Shop' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<ShopPage />
		</>
	);
}
