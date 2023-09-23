import { BlogBlockProps } from './BlogBlock.props';
import styles from './BlogBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import Pattern from './pattern.svg';
import { LearnMore } from 'components/LearnMore/LearnMore';


export const BlogBlock = ({ text, link }: BlogBlockProps): JSX.Element => {
	return (
		<div className={styles.blogBlock}>
			<Pattern className={styles.pattern} />
			<div className={styles.blogBody}>
				<Htag tag='xxl' className={styles.blogText}>{text}</Htag>
				<LearnMore link={link} />
			</div>
			<Pattern className={styles.pattern} />
		</div>
	);
};