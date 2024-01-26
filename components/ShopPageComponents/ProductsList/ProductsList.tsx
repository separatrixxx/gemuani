import { ProductsListProps } from './ProductsList.props';
import styles from './ProductsList.module.css';
import { ProductItem } from '../ProductItem/ProductItem';


export const ProductsList = ({ production, setAllCount, setCart }: ProductsListProps): JSX.Element => {
	return (
		<div className={styles.productionDiv}>
			{production.map(p => (
				<ProductItem key={p.id} id={p.id} image={p.image} imageFruit={p.imageFruit} title={p.title} price={p.price} weight={p.weight}
					setAllCount={setAllCount} setCart={setCart} />
			))}
		</div>
	);
};
