import { SlideProps } from './Slide.props';
import styles from './Slide.module.css';
import { Htag } from 'components/Htag/Htag';
import Image from 'next/image';
import { useResizeW } from 'hooks/useResize';


export const Slide = ({ title, text, image, imageMobile }: SlideProps): JSX.Element => {
	const width = useResizeW();

	return (
		<div>
			<div className={styles.slideBlock}>
				<div className={styles.imageDiv}>
					<Image className={styles.image} draggable='false'
						loader={() => width > 1024 ? image : imageMobile}
						src={width > 1024 ? image : imageMobile}
						alt='slide image'
						width={1}
						height={1}
						unoptimized={true}
					/>
				</div>
				<div className={styles.textDiv}>
					<Htag tag='xxl' className={styles.title}>{title}</Htag>
					<Htag tag='l' className={styles.text}>{text}</Htag>
				</div>
			</div>
		</div>
	);
};