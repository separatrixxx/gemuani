import { BuyButtonProps } from './BuyButton.props';
import styles from './BuyButton.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import cn from 'classnames';


export const BuyButton = ({ isAdded, setIsAdded }: BuyButtonProps): JSX.Element => {
	const router = useRouter();
	
	if (!isAdded) {
		return (
			<button className={styles.buyButton} onClick={() => setIsAdded(!isAdded)}>
				{setLocale(router.locale).add_to_cart}
			</button>
		);
	} else {
		return (
			<button className={cn(styles.buyButton, styles.isAdded)} onClick={() => setIsAdded(!isAdded)}>
				{setLocale(router.locale).in_the_cart}
			</button>
		);
	}
};
