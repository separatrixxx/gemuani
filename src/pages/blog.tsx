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
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<BlogPage />
		</>
	);
}
