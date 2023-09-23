import { TextBlockProps } from './TextBlock.props';
import styles from './TextBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import { LearnMore } from 'components/LearnMore/LearnMore';


export const TextBlock = ({ text, link, title }: TextBlockProps): JSX.Element => {
	return (
		<div className={styles.textBlock}>
			<Htag tag='xxl' className={styles.textBlockTitle}>{title}</Htag>
			<Htag tag='xl' className={styles.text}>{text}</Htag>
			<LearnMore link={link} />
			<span className={styles.divider} />
		</div>
	);
};