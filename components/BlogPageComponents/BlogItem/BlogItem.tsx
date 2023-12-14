import { BlogItemProps } from './BlogItem.props';
import styles from './BlogItem.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { formatDate } from 'helpers/format.helper';


export const BlogItem = ({ id, image, title, text, date }: BlogItemProps): JSX.Element => {
    const router = useRouter();
    
	return (
		<div key={title} className={styles.blog} onClick={() => router.push('/blog/' + id)}>
			<div className={styles.imageBlock}>
				<Image className={styles.img} draggable='false'
					loader={() => image}
					src={image}
					alt={title}
					width={1}
					height={1}
					unoptimized={true}
				/>
			</div>
			<div className={styles.blogInfo}>
				<Htag tag='l' className={styles.title}>{title}</Htag>
				<Htag tag='m' className={styles.text}>{text}</Htag>
                <Htag tag='s' className={styles.date}>{formatDate(date, router)}</Htag>
			</div>
		</div>
	);
};
