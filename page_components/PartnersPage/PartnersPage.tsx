import styles from './PartnersPage.module.css';
import { useRouter } from 'next/router';
import { Header } from 'components/HeaderComponents/Header/Header';
import { Footer } from 'components/FooterComponents/Footer/Footer';
import { TopElem } from 'components/Common/TopElem/TopElem';
import { setLocale } from 'helpers/locale.helper';
import { TopButton } from 'components/Common/TopButton/TopButton';
import Partner1 from './partner1.svg';
import Partner2 from './partner2.svg';
import Partner3 from './partner3.svg';
import Partner4 from './partner4.svg';
import Partner5 from './partner5.svg';
import Partner6 from './partner6.svg';
import { PadBlock } from 'components/MainPageComponents/PadBlock/PadBlock';
import cn from 'classnames';


export const PartnersPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<PadBlock title={setLocale(router.locale).partners.toUpperCase()} />
				<div className={styles.partnersBody}>
					<div className={styles.partnersDiv}>
						<span className={styles.partnerLogo} style={{ cursor: 'pointer' }} 
							onClick={() => router.push('https://tradewithgeorgia.com/companies/gemuani-ltd-1')}>
							<Partner1 />
						</span>
						<span className={styles.partnerLogo} style={{ cursor: 'pointer' }} 
							onClick={() => router.push('https://rda.gov.ge/')}>
							<Partner2 />
						</span>
						<span className={cn(styles.partnerLogo, styles.partner3)} style={{ cursor: 'pointer' }}
							onClick={() => router.push('https://www.gov.ge/home')}>
							<Partner3 />
						</span>
						<span className={styles.partnerLogo} style={{ cursor: 'pointer' }} 
							onClick={() => router.push('https://mrdi.gov.ge/en')}>
							<Partner4 />
						</span>
						<span className={styles.partnerLogo}>
							<Partner5 />
						</span>
						<span className={styles.partnerLogo}>
							<Partner6 />
						</span>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};