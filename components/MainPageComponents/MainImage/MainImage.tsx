import { useResizeW } from 'hooks/useResize';
import styles from './MainImage.module.css';
import Image from 'next/image';


export const MainImage = (): JSX.Element => {
	let image = '/MainImage.jpg';

	const width = useResizeW();

	if (width > 1024) {
		image = '/MainImage.jpg';
	} else {
		image = '/MainImageMobile.jpg';
	}

	return (
		<div className={styles.imageBlock}>
			<Image className={styles.mainImage} draggable='false'
				loader={() => image}
				src={image}
				alt='main image'
				width={1}
				height={1}
				unoptimized={true}
				priority={true}
			/>
		</div>
	);
};