import { BlogBlockProps } from './BlogBlock.props';
import styles from './BlogBlock.module.css';
import Pattern from './pattern.svg';
import { Htag } from 'components/Common/Htag/Htag';
import { LearnMore } from '../LearnMore/LearnMore';


export const BlogBlock = ({ text, link }: BlogBlockProps): JSX.Element => {
	return (
		<div className={styles.blogBlock}>
			<Pattern className={styles.pattern} />
			<div className={styles.blogBody}>
				<Htag tag='xxl' className={styles.blogText}>{text}</Htag>
				<LearnMore link={link} colorWhite={true} />
			</div>
			<Pattern className={styles.pattern} />
		</div>
	);
};