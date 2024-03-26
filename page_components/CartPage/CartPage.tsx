import styles from './CartPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Common/Htag/Htag';
import { Header } from 'components/HeaderComponents/Header/Header';
import { Footer } from 'components/FooterComponents/Footer/Footer';
import { TopElem } from 'components/Common/TopElem/TopElem';
import { setLocale } from 'helpers/locale.helper';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { useEffect, useState } from 'react';
import { getCartAll, getCartCount, getTotalPrice } from 'helpers/cart.helper';
import { Cart } from 'interfaces/cart.interface';
import { CartList } from 'components/CartPageComponents/CartList/CartList';
import { BuyForm } from 'components/CartPageComponents/BuyForm/BuyForm';
import { Toaster } from 'react-hot-toast';
import { PadBlock } from 'components/MainPageComponents/PadBlock/PadBlock';


export const CartPage = (): JSX.Element => {
	const router = useRouter();

	const [count, setCount] = useState<number>(0);
	const [cart, setCart] = useState<Cart[]>([]);

	useEffect(() => {
		setCount(getCartCount());
		setCart(getCartAll(router.locale));
	}, []);

	return (
		<>
			<Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header count={cart.length} />
				<PadBlock title={setLocale(router.locale).cart.toUpperCase()} />
				<div className={styles.cartBody}>
					<Htag tag='m'>{setLocale(router.locale).cart_info}</Htag>
					<div className={styles.cartList}>
						{
							cart.length > 0 ? 
								<CartList cart={cart.reverse()} setCart={setCart} setAllCount={setCount} />
							:
								<Htag tag='l'>{setLocale(router.locale).cart_is_empty}</Htag>
						}
						<BuyForm cart={cart} setCart={setCart} />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};