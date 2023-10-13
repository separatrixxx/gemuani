import styles from './ShopPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import Amazon from './amazon.svg';
import Glovo from './glovo.svg';
import Wolt from './wolt.svg';


export const ShopPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.shopBody}>
					<Htag tag='xxl' className={styles.shopTitle}>{setLocale(router.locale).shop_page.title1}</Htag>
					<a className={styles.link} rel='noreferrer' target='_blank' href='https://www.amazon.com/s?k=GEMUANI&ref=bl_dp_s_web_0'>
						<Htag tag='xl' className={styles.shopLink}>
							<Amazon />
						</Htag>
					</a>
					<a className={styles.link} rel='noreferrer' target='_blank' href='https://ufv9.adj.st/?adjust_deeplink=glovoapp%3A%2F%2Fopen%3Flink_type%3Dstore%26store_id%3D398663&adjust_t=s321jkn'>
						<Htag tag='xl' className={styles.shopLink}>
							<Glovo />
						</Htag>
					</a>
					<a className={styles.link} rel='noreferrer' target='_blank' href='https://wolt.com/geo/tbilisi/venue/wolt-market-marijani?search=%E1%83%92%E1%83%94%E1%83%9B%E1%83%A3%E1%83%90%E1%83%9C%E1%83%98'>
						<Htag tag='xl' className={styles.shopLink}>
							<Wolt />
						</Htag>
					</a>
				</div>
				<Footer />
			</div>
		</>
	);
};