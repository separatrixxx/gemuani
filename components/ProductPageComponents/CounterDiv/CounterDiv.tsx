import {CounterDivProps } from './CounterDiv.props';
import styles from './CounterDiv.module.css';
import { Htag } from 'components/Htag/Htag';
import { removeFromCart, plusMinusCart } from 'helpers/cart.helper';
import cn from 'classnames';


export const CounterDiv = ({ setIsAdded, id, count, setCount, setAllCount }: CounterDivProps): JSX.Element => {
	const maxCount = 10;
	
	return (
        <div className={styles.counterDiv}>
                <button className={styles.minusPlus} onClick={() => {
                    if (count > 1) {
                        plusMinusCart(id, setCount, false);
                    } else {
                        removeFromCart(id, setCount, setAllCount);
                        
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
                        plusMinusCart(id, setCount, true);
                    }
                }}>
                    +
                </button>
            </div>
    );
};