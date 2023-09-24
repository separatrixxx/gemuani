import styles from './KiwiFarmPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';


export const KiwiFarmPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.kiwiFarmBody}>
				<Htag tag='xxl' className={styles.kiwiFarmTitle}>{setLocale(router.locale).kiwi_farm_page.title1}</Htag>
				<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text1}</Htag>
				<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text2}</Htag>
				<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text3}</Htag>
				<Htag tag='xl' className={styles.title}>{setLocale(router.locale).kiwi_farm_page.title2}</Htag>
				<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text4}</Htag>
				<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text5}</Htag>
				<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text6}</Htag>
			</div>
			<Footer />
		</div>
	);
};