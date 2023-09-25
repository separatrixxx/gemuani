import { ContactsPage } from 'page_components/ContactsPage/ContactsPage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export default function About() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{'Gemuani - ' + setLocale(router.locale).titles.contacts_title}</title>
				<meta name='description' content='Gemuani Contacts' />
				<meta property='og:title' content='Gemuani Contacts' />
				<meta property='og:description' content='Gemuani Contacts' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<ContactsPage />
		</>
	);
}
