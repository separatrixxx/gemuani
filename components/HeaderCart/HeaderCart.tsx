import styles from './HeaderCart.module.css';
import { useRouter } from 'next/router';
import Cart from './cart.svg';


export const HeaderCart = (): JSX.Element => {
    const router = useRouter();

    return (
        <span className={styles.cart} onClick={() => router.push('/cart')}>
			<Cart />
		</span>
    );
};