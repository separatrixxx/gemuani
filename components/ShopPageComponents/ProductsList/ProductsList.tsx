import { ProductsListProps } from './ProductsList.props';
import styles from './ProductsList.module.css';
import { ProductItem } from '../ProductItem/ProductItem';
import { useState } from 'react';
import cn from 'classnames';


export const ProductsList = ({ production }: ProductsListProps): JSX.Element => {
	return (
		<div className={styles.productionDiv}>
			{production.map(p => (
				<ProductItem id={p.id} image={p.image} title={p.title} titleShort={p.titleShort} />
			))}
		</div>
	);
};
