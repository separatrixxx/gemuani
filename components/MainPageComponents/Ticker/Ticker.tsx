import { TickerProps } from './Ticker.props';
import styles from './Ticker.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import cn from 'classnames';


export const Ticker = ({ text }: TickerProps): JSX.Element => {
	const direction = 'left';
	const speed = 'fast';

	return (
		<div className={styles.lineWrapper}>
			<span className={cn(styles.line, {
				[styles.left]: direction === 'left',
				[styles.fast]: speed === 'fast',
			})}>
				<Htag tag='l' className={styles.tickerItem}>{text}</Htag>
				<Htag tag='l' className={cn(styles.tickerItem, styles.mediumTickerUtem)}>{text}</Htag>
				<Htag tag='l' className={cn(styles.tickerItem, styles.lastTickerUtem)}>{text}</Htag>
				<Htag tag='l' className={cn(styles.tickerItem, styles.lastTickerUtem)}>{text}</Htag>
			</span>
			<span className={cn(styles.line, {
				[styles.line2Left]: direction === 'left',
				[styles.fast]: speed === 'fast',
			})}>
				<Htag tag='l' className={styles.tickerItem}>{text}</Htag>
				<Htag tag='l' className={cn(styles.tickerItem, styles.mediumTickerUtem)}>{text}</Htag>
				<Htag tag='l' className={cn(styles.tickerItem, styles.lastTickerUtem)}>{text}</Htag>
				<Htag tag='l' className={cn(styles.tickerItem, styles.lastTickerUtem)}>{text}</Htag>
			</span>
			<span className={cn(styles.line, {
				[styles.line3Left]: direction === 'left',
				[styles.fast]: speed === 'fast',
			})}>
				<Htag tag='l' className={styles.tickerItem}>{text}</Htag>
				<Htag tag='l' className={cn(styles.tickerItem, styles.mediumTickerUtem)}>{text}</Htag>
				<Htag tag='l' className={cn(styles.tickerItem, styles.lastTickerUtem)}>{text}</Htag>
				<Htag tag='l' className={cn(styles.tickerItem, styles.lastTickerUtem)}>{text}</Htag>
			</span>
		</div>
	);
};