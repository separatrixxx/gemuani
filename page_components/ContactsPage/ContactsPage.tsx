import styles from './ContactsPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Common/Htag/Htag';
import { Header } from 'components/HeaderComponents/Header/Header';
import { Footer } from 'components/FooterComponents/Footer/Footer';
import { TopElem } from 'components/Common/TopElem/TopElem';
import { setLocale } from 'helpers/locale.helper';
import { ContactsForm } from 'components/ContactsPageComponents/ContactsForm/ContactsForm';
import Arrow from './arrow.svg';
import { TopButton } from 'components/Common/TopButton/TopButton';
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
							<a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/Gemuani/@42.5843148,41.9265745,321m/data=!3m1!1e3!4m12!1m5!3m4!2zNDLCsDM1JzAzLjYiTiA0McKwNTUnMzguOCJF!8m2!3d42.584343!4d41.927447!3m5!1s0x405c220bcfb9215f:0xae61153095aed128!8m2!3d42.584323!4d41.9282474!16s%2Fg%2F11fy2z37f1?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D">
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
							<span className={styles.wa}>WhatsApp:</span> +995 511 251 520
						</Htag>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};