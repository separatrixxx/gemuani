import styles from './PartnersPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import Partner1 from './partner1.svg';
import Partner2 from './partner2.svg';
import Partner3 from './partner3.svg';
import Partner4 from './partner4.svg';
import cn from 'classnames';


export const PartnersPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.partnersBody}>
					<Htag tag='xxl' className={styles.partnersTitle}>{setLocale(router.locale).partners}</Htag>
					<span className={styles.partnerLogo}><Partner1 /></span>
					<span className={styles.partnerLogo}><Partner2 /></span>
					<span className={cn(styles.partnerLogo, styles.partner3)}><Partner3 /></span>
					<span className={styles.partnerLogo}><Partner4 /></span>
				</div>
				<Footer />
			</div>
		</>
	);
};