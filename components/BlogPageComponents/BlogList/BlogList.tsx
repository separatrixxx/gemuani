import { BlogListProps } from './BlogList.props';
import styles from './BlogList.module.css';
import { BlogItem } from '../BlogItem/BlogItem';


export const BlogList = ({ blog }: BlogListProps): JSX.Element => {
	return (
		<div className={styles.blogDiv}>
			{blog.map(b => (
				<BlogItem key={b.id} id={b.id} image={b.image} title={b.title} text={b.text} date={b.date} />
			))}
		</div>
	);
};
