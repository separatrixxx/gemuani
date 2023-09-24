import { CulturePage } from 'page_components/CulturePage/CulturePage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export default function Culture() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{'Gemuani - ' + setLocale(router.locale).titles.culture_history_title}</title>
				<meta name='description' content='Culture & History' />
				<meta property='og:title' content='Culture & History' />
				<meta property='og:description' content='Culture & History' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<CulturePage />
		</>
	);
}
