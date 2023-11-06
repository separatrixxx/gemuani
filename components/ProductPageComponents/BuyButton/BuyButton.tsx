import { BuyButtonProps } from './BuyButton.props';
import styles from './BuyButton.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { addToCart, removeFromCart } from 'helpers/cart.helper';
import { CounterDiv } from '../CounterDiv/CounterDiv';
import cn from 'classnames';


export const BuyButton = ({ isAdded, setIsAdded, id, image, title, count, setCount, setAllCount }: BuyButtonProps): JSX.Element => {
	const router = useRouter();
	
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
				<CounterDiv setIsAdded={setIsAdded} id={id} count={count} setCount={setCount} setAllCount={setAllCount} />
			</div>
		);
	}
};
