import { ImageBlockProps } from './ImageBlock.props';
import styles from './ImageBlock.module.css';
import { Htag } from 'components/Htag/Htag';


export const ImageBlock = ({ text, image }: ImageBlockProps): JSX.Element => {
	return (
		<div className={styles.imageBlock} style={{ backgroundImage: `url(${image})` }}>
			{/* <Image className={styles.image} draggable='false'
				loader={() => image}
				src={image}
				alt='main image'
				width={1}
				height={1}
				unoptimized={true}
				priority={true}
			/> */}
			<Htag tag='xxl' className={styles.text}>{text}</Htag>
		</div>
	);
};