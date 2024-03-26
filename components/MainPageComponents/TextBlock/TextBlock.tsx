import { TextBlockProps } from './TextBlock.props';
import styles from './TextBlock.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { LearnMore } from '../LearnMore/LearnMore';


export const TextBlock = ({ text, link, title, span }: TextBlockProps): JSX.Element => {
	return (
		<div className={styles.textBlock}>
			<Htag tag='xxl' className={styles.textBlockTitle}>
				{title}
			</Htag>
			<Htag tag='xl' className={styles.text}>
				{span ? <span className={styles.span}>{span + ' '}</span> : <></>}
				{text}
			</Htag>
			<LearnMore link={link} />
			<span className={styles.divider} />
		</div>
	);
};