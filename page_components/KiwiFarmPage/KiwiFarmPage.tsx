import styles from './KiwiFarmPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Common/Htag/Htag';
import { Header } from 'components/HeaderComponents/Header/Header';
import { Footer } from 'components/FooterComponents/Footer/Footer';
import { TopElem } from 'components/Common/TopElem/TopElem';
import { setLocale } from 'helpers/locale.helper';
import { TopButton } from 'components/Common/TopButton/TopButton';
import { AboutImageBlock } from 'components/AboutPageComponents/AboutImageBlock/AboutImageBlock';
import { PadBlock } from 'components/MainPageComponents/PadBlock/PadBlock';


export const KiwiFarmPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<PadBlock title={setLocale(router.locale).kiwi_title.toUpperCase()} />
				<div className={styles.kiwiFarmBody}>
					<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text1}</Htag>
					<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text2}</Htag>
					<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text3}</Htag>
					<AboutImageBlock image='/KiwiImage1.webp' alt='kiwi farm image 1' />
					<Htag tag='xl' className={styles.title}>{setLocale(router.locale).kiwi_farm_page.title2}</Htag>
					<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text4}</Htag>
					<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text5}</Htag>
					<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text6}</Htag>
				</div>
				<Footer />
			</div>
		</>
	);
};