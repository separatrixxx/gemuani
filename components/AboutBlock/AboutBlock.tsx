import { AboutBlockProps } from './AboutBlock.props';
import styles from './AboutBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import { LearnMore } from 'components/LearnMore/LearnMore';


export const AboutBlock = ({ text, link }: AboutBlockProps): JSX.Element => {
	return (
		<div className={styles.aboutBlock}>
			<Htag tag='xl' className={styles.text}>
				<span className={styles.span}>GEMUANI</span>
				{' ' + text}
			</Htag>
			<LearnMore link={link} />
		</div>
	);
};