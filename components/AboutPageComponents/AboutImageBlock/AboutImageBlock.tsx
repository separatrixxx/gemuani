import { AboutImageBlockProps } from './AboutImageBlock.props';
import styles from './AboutImageBlock.module.css';
import Image from 'next/image';


export const AboutImageBlock = ({ image, alt }: AboutImageBlockProps): JSX.Element => {
	return (
		<div className={styles.imageBlock}>
			<Image draggable='false'
				loader={() => image}
				src={image}
				alt={alt}
				width={1}
				height={1}
				sizes="100vw"
				style={{
					width: '100%',
					height: '100%',
				}}
				unoptimized={true}
			/>
		</div>
	);
};