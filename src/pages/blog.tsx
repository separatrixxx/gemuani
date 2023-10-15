import { BlogPage } from 'page_components/BlogPage/BlogPage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export default function Blog() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{'Gemuani - ' + setLocale(router.locale).titles.blog_title}</title>
				<meta name='description' content='Gemuani Blog' />
				<meta property='og:title' content='Gemuani Blog' />
				<meta property='og:description' content='Gemuani Blog' />
				<meta name='robots' content='index, nosnippet' />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta property='og:url' content='https://www.gemuani.com/blog' />
				<meta property='og:type' content='website' />
				<meta property='og:site_name' content='Gemuani' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<BlogPage />
		</>
	);
}
