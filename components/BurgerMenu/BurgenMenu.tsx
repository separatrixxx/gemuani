import { BurgerMenuProps } from './BurgerMenu.props';
import styles from './BurgerMenu.module.css';
import { motion } from 'framer-motion';


export const BurgerMenu = ({ open, setOpen, setHidden }: BurgerMenuProps): JSX.Element => {
    const variants1 = {
        open: {
            transform: 'rotate(45deg)',
            marginTop: 0,
        },
        close: {
            transform: 'rotate(0deg)',
            marginTop: 7,
        }
    };

    const variants2 = {
        open: {
            transform: 'rotate(-45deg)',
            marginBottom: 0,
        },
        close: {
            transform: 'rotate(0deg)',
            marginBottom: 7,
        }
    };

    return (
        <div className={styles.burgerMenu} onClick={() => {
            setOpen(!open);

            if (open) {
                setTimeout(() => setHidden(true), 300);
            } else {
                setHidden(false);
            }
        }}>
            <motion.span variants={variants1}
                initial={open ? 'open' : 'close'}
                transition={{ duration: 0.3 }}
                animate={open ? 'open' : 'close'}></motion.span>
            <motion.span variants={variants2}
                initial={open ? 'open' : 'close'}
                transition={{ duration: 0.3 }}
                animate={open ? 'open' : 'close'}></motion.span>
        </div>
    );
};