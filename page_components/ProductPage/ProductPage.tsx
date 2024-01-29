import { ProductPageProps } from './ProductPage.props';
import styles from './ProductPage.module.css';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { ProductInfo } from 'components/ProductPageComponents/ProductInfo/ProductInfo';
import { Htag } from 'components/Htag/Htag';
import { useEffect, useState } from 'react';
import { getCart, getCartAll, getCartCount } from 'helpers/cart.helper';
import { Cart } from 'interfaces/cart.interface';
import Arrow from './arrow.svg';
import { useRouter } from 'next/router';


export const ProductPage = ({ id, image, title, description, country, sort }: ProductPageProps): JSX.Element => {
	const router = useRouter();
	
	const [cart, setCart] = useState<Cart[]>([]);
	const [allCount, setAllCount] = useState<number>(0);

	const [sortNum, setSortNum] = useState<number>(0);

	const [isAdded, setIsAdded] = useState<boolean>(false);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setIsAdded(getCart(id + '_' + sort[sortNum].id).count > 0);
		setCount(getCart(id + '_' + sort[sortNum].id).count);
		setAllCount(getCartCount());
		setCart(getCartAll(router.locale));
	}, [id + '_' + sort[sortNum].id]);

	
	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header count={allCount} />
				<div className={styles.productBody}>
                    <div className={styles.backDiv}>
						<span className={styles.arrow} onClick={() => router.push('/shop')}>
							<Arrow />
						</span>
						<Htag tag='xl' className={styles.title}>{title + ' ' + sort[sortNum].title}</Htag>
					</div>
					<ProductInfo id={id} image={image} title={title} description={description} country={country}
						sort={sort} sortNum={sortNum} setAllCount={setAllCount} setCart={setCart} setSortNum={setSortNum}
						isAdded={isAdded} count={count} setIsAdded={setIsAdded} setCount={setCount} />
				</div>
				<Footer />
			</div>
		</>
	);
};