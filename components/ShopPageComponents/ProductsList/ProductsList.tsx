import { ProductsListProps } from './ProductsList.props';
import styles from './ProductsList.module.css';
import { ProductItem } from '../ProductItem/ProductItem';


export const ProductsList = ({ production }: ProductsListProps): JSX.Element => {
	return (
		<div className={styles.productionDiv}>
			{production.map(p => (
				<ProductItem key={p.id} id={p.id} image={p.image} title={p.title} price={p.price} />
			))}
		</div>
	);
};
