import { BuyButtonProps } from './BuyButton.props';
import styles from './BuyButton.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { addToCart } from 'helpers/cart.helper';
import { CounterDiv } from '../CounterDiv/CounterDiv';
import cn from 'classnames';


export const BuyButton = ({ isAdded, setIsAdded, id, image, title, count, price, setCount, setAllCount,
	setCart }: BuyButtonProps): JSX.Element => {
	const router = useRouter();
	
	if (!isAdded) {
		return (
			<button className={styles.buyButton} onClick={() => {
				addToCart(id, image, title, price, setCount, setAllCount);
				setIsAdded(!isAdded);
			}}>
				{setLocale(router.locale).add_to_cart}
			</button>
		);
	} else {
		return (
			<div className={styles.buyDiv}>
				<button className={cn(styles.buyButton, styles.isAdded)} onClick={() => router.push('/cart')}>
					{setLocale(router.locale).go_to_cart}
				</button>
				<CounterDiv setIsAdded={setIsAdded} id={id} count={count} setCount={setCount} setAllCount={setAllCount}
					setCart={setCart} />
			</div>
		);
	}
};
