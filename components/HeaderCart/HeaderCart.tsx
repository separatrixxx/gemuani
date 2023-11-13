import { HeaderCartProps } from './HeaderCart.props';
import styles from './HeaderCart.module.css';
import { useRouter } from 'next/router';
import Cart from './cart.svg';
import { motion } from 'framer-motion';


export const HeaderCart = ({ count }: HeaderCartProps): JSX.Element => {
    const router = useRouter();

    const variants = {
		visible: {
			transform: 'scale(1)',
		},
		hidden: {
			transform: 'scale(0)',
		}
	};

    return (
        <div className={styles.wrapper} onClick={() => router.push('/cart')}>
            <span className={styles.cart}>
                <Cart />
            </span>
            <motion.span className={styles.counter}
                variants={variants}
				initial={count ? 'visible' : 'hidden'}
				transition={{ duration: 0.2 }}
				animate={count ? 'visible' : 'hidden'}>
                {count}
            </motion.span>
        </div>
    );
};