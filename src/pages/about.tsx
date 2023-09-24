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
				<meta name='description' content='About Gemuani' />
				<meta property='og:title' content='About Gemuani' />
				<meta property='og:description' content='About Gemuani' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<AboutPage />
		</>
	);
}
