import { CartListProps } from './CartList.props';
import styles from './CartList.module.css';
import { CartItem } from '../CartItem/CartItem';


export const CartList = ({ cart, setAllCount }: CartListProps): JSX.Element => {
	return (
		<div className={styles.cartDiv}>
			{cart.map(c => (
				<CartItem key={c.id} id={c.id} image={c.image} title={c.title} setAllCount={setAllCount} />
			))}
		</div>
	);
};
