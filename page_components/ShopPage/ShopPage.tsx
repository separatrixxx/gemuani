import styles from './ShopPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';


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
					<a rel='noreferrer' target='_blank' href='https://tradewithgeorgia.com/products/gemuani-fruit-crisps'><Htag tag='xl' className={styles.shopLink}>Trade With Georgia</Htag></a>
					<a rel='noreferrer' target='_blank' href='https://sasmely.ge/en/product-category/accessories/'><Htag tag='xl' className={styles.shopLink}>SASMELY</Htag></a>
					<a rel='noreferrer' target='_blank' href='https://www.amazon.com/GEMUANI-Freeze-Dried-Kiwi-Crisps/dp/B0C3RNFTM8'><Htag tag='xl' className={styles.shopLink}>Amazon</Htag></a>
					<a rel='noreferrer' target='_blank' href='https://vitaland.ge/en/company-gemuani/'><Htag tag='xl' className={styles.shopLink}>Vitaland</Htag></a>
				</div>
				<Footer />
			</div>
		</>
	);
};