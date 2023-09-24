import styles from './ShopPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';


export const ShopPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.shopBody}>
				<Htag tag='xxl' className={styles.shopTitle}>{setLocale(router.locale).shop_page.title1}</Htag>
			</div>
			<Footer />
		</div>
	);
};