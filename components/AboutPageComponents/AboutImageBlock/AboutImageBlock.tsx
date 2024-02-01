import { AboutImageBlockProps } from './AboutImageBlock.props';
import styles from './AboutImageBlock.module.css';
import Image from 'next/image';


export const AboutImageBlock = ({ image, alt }: AboutImageBlockProps): JSX.Element => {
	return (
		<div className={styles.imageBlock}>
			<Image className={styles.image} draggable='false'
				loader={() => image}
				src={image}
				alt={alt}
				width={1}
				height={1}
				unoptimized={true}
				priority={true}
			/>
		</div>
	);
};