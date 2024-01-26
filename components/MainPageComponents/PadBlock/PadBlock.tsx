import { PadBlockProps } from './PadBlock.props';
import styles from './PadBlock.module.css';
import { Htag } from 'components/Htag/Htag';

export const PadBlock = ({ title }: PadBlockProps): JSX.Element => {
	return (
		<div className={styles.padBlock}>
			<span className={styles.glow} />
			<Htag tag='xxl' className={styles.title}>{title}</Htag>
		</div>
	);
};