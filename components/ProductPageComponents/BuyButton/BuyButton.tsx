import { BuyButtonProps } from './BuyButton.props';
import styles from './BuyButton.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Htag } from 'components/Htag/Htag';
import { useState } from 'react';
import cn from 'classnames';
import { addToCart } from 'helpers/cart.helper';


export const BuyButton = ({ isAdded, setIsAdded, id, image, title }: BuyButtonProps): JSX.Element => {
	const router = useRouter();

	const [count, setCount] = useState<number>(1);

	const maxCount = 10;
	
	if (!isAdded) {
		return (
			<button className={styles.buyButton} onClick={() => {
				addToCart(id, image, title, count);
				setIsAdded(!isAdded);
			}}>
				{setLocale(router.locale).add_to_cart}
			</button>
		);
	} else {
		return (
			<div className={styles.buyDiv}>
				<button className={cn(styles.buyButton, styles.isAdded)} onClick={() => {
					addToCart(id, image, title, count);
					setCount(1);
					setIsAdded(!isAdded);
				}}>
					{setLocale(router.locale).in_the_cart}
				</button>
				<div className={styles.counterDiv}>
					<button className={styles.minusPlus} onClick={() => {
						if (count > 1) {
							addToCart(id, image, title, count);
							setCount(count - 1);
						} else {
							addToCart(id, image, title, count);
							setCount(1);
							setIsAdded(false);
						}
					}}>
						-
					</button>
					<Htag tag='l' className={styles.count}>{count}</Htag>
					<button className={cn(styles.minusPlus, {
						[styles.disable]: count === maxCount,
					})} onClick={() => {
						if (count < maxCount) {
							addToCart(id, image, title, count);
							setCount(count + 1);
						}
					}}>
						+
					</button>
				</div>
			</div>
		);
	}
};
