import { ProductPageProps } from './ProductPage.props';
import styles from './ProductPage.module.css';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { ProductInfo } from 'components/ProductPageComponents/ProductInfo/ProductInfo';
import { Htag } from 'components/Htag/Htag';
import { useEffect, useState } from 'react';
import { getCartCount } from 'helpers/cart.helper';


export const ProductPage = ({ id, image, title, titleFull, description }: ProductPageProps): JSX.Element => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setCount(getCartCount());
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
						setAllCount={setCount} />
				</div>
				<Footer />
			</div>
		</>
	);
};