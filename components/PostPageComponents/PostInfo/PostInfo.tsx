import { PostInfoProps } from './PostInfo.props';
import styles from './PostInfo.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { formatDate } from 'helpers/format.helper';


export const PostInfo = ({ image, title, text, date }: PostInfoProps): JSX.Element => {
	const router = useRouter();
	
	return (
		<div className={styles.postInfoDiv}>
				<div className={styles.imageBlock}>
					<Image className={styles.img} draggable='false'
						loader={() => image}
						src={image}
						alt={title}
						width={1}
						height={1}
						unoptimized={true}
						priority={true}
					/>
				</div>
				<div className={styles.textDiv}>
					<Htag tag='l' className={styles.text}>{text}</Htag>
					<Htag tag='m' className={styles.date}>{formatDate(date, router)}</Htag>
				</div>
			</div>
	);
};
