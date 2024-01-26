import styles from './ContactsPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';
import { ContactsForm } from 'components/ContactsPageComponents/ContactsForm/ContactsForm';
import Arrow from './arrow.svg';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { Toaster } from 'react-hot-toast';
import { PadBlock } from 'components/MainPageComponents/PadBlock/PadBlock';


export const ContactsPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<PadBlock title={setLocale(router.locale).contacts_page.title1.toUpperCase()} />
				<div className={styles.contactsBody}>
					<ContactsForm />
					<div className={styles.infoBody}>
						<Htag tag='xxl' className={styles.contactsTitle}>{setLocale(router.locale).contacts_page.title2}</Htag>
						<div className={styles.infoBlock}>
							<Htag tag='l'>{setLocale(router.locale).contacts_page.address}</Htag>
							<a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/+89+Irakli+Abashidze+Street,+T'bilisi,+%D0%93%D1%80%D1%83%D0%B7%D0%B8%D1%8F/@41.709055,44.7531785,19z/data=!3m1!4b1!4m5!3m4!1s0x40447337db44d409:0x3c789f7363075fc7!8m2!3d41.709054!4d44.7538222?entry=ttu">
								<Htag tag='l' className={styles.view}>
									{setLocale(router.locale).contacts_page.view_on_map}
									<span className={styles.arrow}><Arrow /></span>
								</Htag>
							</a>
						</div>
						<Htag tag='xxl' className={styles.contactsTitle}>
							{setLocale(router.locale).contacts_page.title3}
						</Htag>
						<Htag tag='l'>
							<span className={styles.wa}>WhatsApp:</span> +995 511 251 521
						</Htag>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};