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
				<meta name='robots' content='index, nosnippet' />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta property='og:url' content='https://www.gemuani.com/shop' />
				<meta property='og:type' content='website' />
				<meta property='og:site_name' content='Gemuani' />
				<meta name='keywords' content='Freeze dried Feijoia, Freeze dried strawberry, Freeze dried kiwi, Freeze dried raspberry, Freeze dried lemon, Freeze dried tarhun' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<ShopPage />
		</>
	);
}
