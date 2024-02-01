import styles from './ShopPage.module.css';
import { useRouter } from 'next/router';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { ProductsList } from 'components/ShopPageComponents/ProductsList/ProductsList';
import { setProduction } from 'helpers/production.helper';
import { useEffect, useState } from 'react';
import { getCartAll, getCartCount } from 'helpers/cart.helper';
import { Cart } from 'interfaces/cart.interface';
import { PadBlock } from 'components/MainPageComponents/PadBlock/PadBlock';
import { setLocale } from 'helpers/locale.helper';


export const ShopPage = (): JSX.Element => {
	const router = useRouter();

	const [cart, setCart] = useState<Cart[]>([]);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setCount(getCartCount());
		setCart(getCartAll(router.locale));
	}, []);

	

	return (
		<>
			<TopElem />
			<TopButton isShop={true} />
			<div className={styles.wrapper}>
				<Header count={count} />
				<PadBlock title={setLocale(router.locale).shop.toUpperCase()} />
				<div className={styles.shopBody}>
					<ProductsList production={setProduction(router.locale)} setAllCount={setCount} setCart={setCart} />
				</div>
				<Footer />
			</div>
		</>
	);
};