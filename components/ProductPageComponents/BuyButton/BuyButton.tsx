import { BuyButtonProps } from './BuyButton.props';
import styles from './BuyButton.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Htag } from 'components/Htag/Htag';
import { addToCart, removeFromCart, plusMinusCart } from 'helpers/cart.helper';
import cn from 'classnames';


export const BuyButton = ({ isAdded, setIsAdded, id, image, title, count, setCount, setAllCount }: BuyButtonProps): JSX.Element => {
	const router = useRouter();

	const maxCount = 10;
	
	if (!isAdded) {
		return (
			<button className={styles.buyButton} onClick={() => {
				addToCart(id, image, title, setCount, setAllCount);
				setIsAdded(!isAdded);
			}}>
				{setLocale(router.locale).add_to_cart}
			</button>
		);
	} else {
		return (
			<div className={styles.buyDiv}>
				<button className={cn(styles.buyButton, styles.isAdded)} onClick={() => {
					removeFromCart(id, setCount, setAllCount);
					setIsAdded(!isAdded);
				}}>
					{setLocale(router.locale).in_the_cart}
				</button>
				<div className={styles.counterDiv}>
					<button className={styles.minusPlus} onClick={() => {
						if (count > 1) {
							plusMinusCart(id, setCount, false);
						} else {
							removeFromCart(id, setCount, setAllCount);
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
							plusMinusCart(id, setCount, true);
						}
					}}>
						+
					</button>
				</div>
			</div>
		);
	}
};
