import styles from './CulturePage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';
import { AboutImageBlock } from 'components/AboutPageComponents/AboutImageBlock/AboutImageBlock';


export const CulturePage = (): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.cultureBody}>
				<Htag tag='xxl' className={styles.cultureTitle}>{setLocale(router.locale).culture_page.title1}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text1}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text2}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text3}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text4}</Htag>
				<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text5}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text6}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text7}</Htag>
				<Htag tag='xxl' className={styles.cultureTitle2}>{setLocale(router.locale).culture_page.title2}</Htag>
				<Htag tag='xl' className={styles.title}>{setLocale(router.locale).culture_page.title3}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text8}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text9}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text10}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text11}</Htag>
				<AboutImageBlock image='/CultureImg1.png' alt='culture image 1' />
				<Htag tag='xl' className={styles.title}>{setLocale(router.locale).culture_page.title4}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text12}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text13}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text14}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text15}</Htag>
				<Htag tag='l'>{setLocale(router.locale).culture_page.text16}</Htag>
				<AboutImageBlock image='/CultureImg2.png' alt='culture image 2' />
				<AboutImageBlock image='/CultureImg3.png' alt='culture image 3' />
				<Htag tag='l'>{setLocale(router.locale).culture_page.text17}</Htag>
			</div>
			<Footer />
		</div>
	);
};