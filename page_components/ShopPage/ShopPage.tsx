import styles from './ShopPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import Amazon from './amazon.svg';
import Wolt from './wolt.svg';
import { ProductsList } from 'components/ShopPageComponents/ProductsList/ProductsList';
import { setProduction } from 'helpers/production.helper';
import cn from 'classnames';


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
					<a rel='noreferrer' target='_blank' href='https://www.amazon.com/s?k=GEMUANI&ref=bl_dp_s_web_0'>
						<Htag tag='xl' className={styles.shopLink}>
							<Amazon />
						</Htag>
					</a>
					<a rel='noreferrer' target='_blank' href='https://wolt.com/geo/tbilisi/venue/wolt-market-marijani?search=%E1%83%92%E1%83%94%E1%83%9B%E1%83%A3%E1%83%90%E1%83%9C%E1%83%98'>
						<Htag tag='xl' className={styles.shopLink}>
							<Wolt />
						</Htag>
					</a>
					<Htag tag='xxl' className={cn(styles.shopTitle, styles.marginTop)}>{setLocale(router.locale).shop_page.title2}</Htag>
					<ProductsList production={setProduction(router.locale)} />
				</div>
				<Footer />
			</div>
		</>
	);
};