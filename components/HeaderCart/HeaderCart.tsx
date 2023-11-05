import { HeaderCartProps } from './HeaderCart.props';
import styles from './HeaderCart.module.css';
import { useRouter } from 'next/router';
import Cart from './cart.svg';


export const HeaderCart = ({ count }: HeaderCartProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.wrapper} onClick={() => router.push('/cart')}>
            <span className={styles.cart}>
                <Cart />
            </span>
            {
                count ?
                    <span className={styles.counter}>
                        {count}
                    </span>
                :
                <></>
            }
        </div>
    );
};