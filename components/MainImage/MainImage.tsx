import styles from './MainImage.module.css';
import Image from 'next/image';


export const MainImage = (): JSX.Element => {
	const image = '/MainImage.jpg';

	return (
		<Image className={styles.mainImage} draggable='false'
			loader={() => image}
			src={image}
			alt='main image'
			width={1}
			height={1}
			unoptimized={true}
			priority={true}
		/>
	);
}