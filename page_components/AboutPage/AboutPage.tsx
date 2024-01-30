import styles from './AboutPage.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { AboutImageBlock } from 'components/AboutPageComponents/AboutImageBlock/AboutImageBlock';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { PadBlock } from 'components/MainPageComponents/PadBlock/PadBlock';
import { DuoBlock } from 'components/AboutPageComponents/DuoBlock/DuoBlock';


export const AboutPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<PadBlock title={setLocale(router.locale).about_title.toUpperCase()} />
				<div className={styles.aboutBody}>
					<DuoBlock text={setLocale(router.locale).about_page.text1} side='left'>
						<AboutImageBlock image='/AboutImg1.webp' alt='about image 1' />
					</DuoBlock>
					<Htag tag='l'>{setLocale(router.locale).about_page.text2}</Htag>
					<Htag tag='xl' className={styles.title}>{setLocale(router.locale).about_page.title1}</Htag>					
					<DuoBlock text={setLocale(router.locale).about_page.text3} side='right'>
						<AboutImageBlock image='/AboutImg2.webp' alt='about image 2' />
					</DuoBlock>
					<Htag tag='xl' className={styles.title}>{setLocale(router.locale).about_page.title2}</Htag>
					<Htag tag='l'>{setLocale(router.locale).about_page.text4}</Htag>
					<Htag tag='xl' className={styles.title}>{setLocale(router.locale).about_page.title3}</Htag>
					<Htag tag='l'>{setLocale(router.locale).about_page.text5}</Htag>
					<DuoBlock text={setLocale(router.locale).about_page.text6 + '\n\n' +
						setLocale(router.locale).about_page.text7} side='left'>
						<AboutImageBlock image='/AboutImg3.webp' alt='about image 3' />
					</DuoBlock>
					<Htag tag='l'>{setLocale(router.locale).about_page.text8}</Htag>
					<Htag tag='l'>{setLocale(router.locale).about_page.text9}</Htag>
					<Htag tag='l'>{setLocale(router.locale).about_page.text10}</Htag>
				</div>
				<Footer />
			</div>
		</>
	);
};