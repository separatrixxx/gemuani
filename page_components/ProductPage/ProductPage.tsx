import { ProductPageProps } from './ProductPage.props';
import styles from './ProductPage.module.css';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { ProductInfo } from 'components/ProductPageComponents/ProductInfo/ProductInfo';
import { Htag } from 'components/Htag/Htag';
import { useEffect, useState } from 'react';
import { getCartAll, getCartCount } from 'helpers/cart.helper';
import { Cart } from 'interfaces/cart.interface';


export const ProductPage = ({ id, image, title, titleFull, description, price }: ProductPageProps): JSX.Element => {
	const [cart, setCart] = useState<Cart[]>([]);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setCount(getCartCount());
		setCart(getCartAll());
	}, []);
	
	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header count={count} />
				<div className={styles.productBody}>
                    <Htag tag='xl' className={styles.title}>{title}</Htag>
					<ProductInfo id={id} image={image} title={title} titleFull={titleFull} description={description}
						price={price} setAllCount={setCount} setCart={setCart} />
				</div>
				<Footer />
			</div>
		</>
	);
};