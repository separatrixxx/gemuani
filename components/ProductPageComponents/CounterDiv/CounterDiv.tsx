import {CounterDivProps } from './CounterDiv.props';
import styles from './CounterDiv.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { removeFromCart, plusMinusCart } from 'helpers/cart.helper';
import Delete from './delete.svg';
import cn from 'classnames';


export const CounterDiv = ({ setIsAdded, id, count, setCount, setAllCount, price, totalPrice,
    setTotalPrice, setCart }: CounterDivProps): JSX.Element => {
	const maxCount = 10;
	
	return (
        <div className={styles.counterDiv}>
                <button className={cn(styles.minusPlus, styles.delete)} onClick={() => {
                    removeFromCart(id, setCount, setAllCount, setCart);

                    if (price && totalPrice && setTotalPrice) {
                        setTotalPrice(totalPrice - price * count);
                    }
                        
                    if (setIsAdded) {
                        setIsAdded(false);
                    }
                }}>
                    <Delete />
                </button>
                <button className={styles.minusPlus} onClick={() => {
                    if (count > 1) {
                        plusMinusCart(id, setCount, setCart, false);
                        
                        if (price && totalPrice && setTotalPrice) {
                            setTotalPrice(totalPrice - price);
                        }
                    } else {
                        removeFromCart(id, setCount, setAllCount, setCart);

                        if (price && totalPrice && setTotalPrice) {
                            setTotalPrice(totalPrice - price * count);
                        }
                        
                        if (setIsAdded) {
                            setIsAdded(false);
                        }
                    }
                }}>
                    -
                </button>
                <Htag tag='l' className={styles.count}>{count}</Htag>
                <button className={cn(styles.minusPlus, {
                    [styles.disable]: count === maxCount,
                })} onClick={() => {
                    if (count < maxCount) {
                        plusMinusCart(id, setCount, setCart, true);
                        
                        if (price && totalPrice && setTotalPrice) {
                            setTotalPrice(totalPrice + price);
                        }
                    }
                }}>
                    +
                </button>
            </div>
    );
};
