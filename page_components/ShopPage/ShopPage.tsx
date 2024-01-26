import styles from './ShopPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import Amazon from './amazon.svg';
import Wolt from './wolt.svg';
import { ProductsList } from 'components/ShopPageComponents/ProductsList/ProductsList';
import { setProduction } from 'helpers/production.helper';
import { useEffect, useState } from 'react';
import { getCartAll, getCartCount } from 'helpers/cart.helper';
import { Cart } from 'interfaces/cart.interface';
import { useScrollY } from 'hooks/useScrollY';
import { useResizeH } from 'hooks/useResize';
import { motion } from 'framer-motion';
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

	const [flag, setFlag] = useState<boolean>(false);
	const scrollPosition = useScrollY();
    const height = useResizeH();

	if (scrollPosition > height && !flag) {
		setFlag(true);
	} else if (scrollPosition <= height && flag) {
		setFlag(false);
	}

	const variants = {
		visible: {
			transform: 'translate(0%, -60%)',
		},
		hidden: {
			transform: 'translate(0%, 0%)',
		}
	};

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header count={count} />
				<PadBlock title={setLocale(router.locale).shop.toUpperCase()} />
				<motion.div className={styles.amazonAndWolt}
					variants={variants}
					initial={flag ? 'visible' : 'hidden'}
					transition={{ duration: 0.3 }}
					animate={flag ? 'visible' : 'hidden'}>
					<a rel='noreferrer' target='_blank' href='https://www.amazon.com/s?k=GEMUANI&ref=bl_dp_s_web_0'>
						<Htag tag='xl' className={styles.shopLink}>
							<Amazon />
						</Htag>
					</a>
					<a rel='noreferrer' target='_blank' href='https://wolt.com/ka/geo/tbilisi/venue/wolt-market-marijani/gemuani-chiri-martsqvis-krispi-10gr-itemid-647f279fbe1e2eace68ee7e0'>
						<Htag tag='xl' className={styles.shopLink}>
							<Wolt />
						</Htag>
					</a>
				</motion.div>
				<div className={styles.shopBody}>
					<ProductsList production={setProduction(router.locale)} setAllCount={setCount} setCart={setCart} />
				</div>
				<Footer />
			</div>
		</>
	);
};