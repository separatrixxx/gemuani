import { CartListProps } from './CartList.props';
import styles from './CartList.module.css';
import { CartItem } from '../CartItem/CartItem';
import { Htag } from 'components/Common/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useState } from 'react';
import { getTotalPrice } from 'helpers/cart.helper';
import cn from 'classnames';


export const CartList = ({ cart, setCart, setAllCount }: CartListProps): JSX.Element => {
	const router = useRouter();

	const [totalPrice, setTotalPrice] = useState<number>(getTotalPrice(cart));
	
	return (
		<div className={cn(styles.cartDiv, {
			[styles.margin1]: cart.length === 1,
			[styles.margin2]: cart.length === 2,
		})}>
			<Htag tag='l' className={styles.title}>
				{setLocale(router.locale).total_cart_cost + ' '}
				<span className={styles.strike}>{totalPrice.toFixed(2)  + '₾'}</span> {Math.round(totalPrice) + '₾'}
			</Htag>
			{cart.map(c => (
				<CartItem key={c.id} id={c.id} image={c.image} title={c.title} price={c.price} setAllCount={setAllCount}
					totalPrice={totalPrice} setTotalPrice={setTotalPrice} setCart={setCart} />
			))}
		</div>
	);
};
