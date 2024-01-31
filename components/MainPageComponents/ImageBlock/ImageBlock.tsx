import { ImageBlockProps } from './ImageBlock.props';
import styles from './ImageBlock.module.css';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { Ticker } from '../Ticker/Ticker';
import { Htag } from 'components/Htag/Htag';
import Image from 'next/image';
import { useResizeH, useResizeW } from 'hooks/useResize';


export const ImageBlock = ({ text, image, imageMobile, ticker }: ImageBlockProps): JSX.Element => {
	const router = useRouter();

	const width = useResizeW();

	if (ticker) {
		return (
			<div>
				<Ticker text={setLocale(router.locale).our_mission} />
				<div className={styles.imageBlock}>
					<div className={styles.imageDiv}>
						<Image className={styles.image} draggable='false'
							loader={() => image}
							src={width > 1024 ? image : imageMobile}
							alt='image'
							width={1}
							height={1}
							unoptimized={true}
							loading="lazy"
						/>
					</div>
					<Htag tag='xxl' className={styles.text}>{text}</Htag>
				</div>
			</div>
		);
	} else {
		return (
			<div id='imageBlock' className={styles.imageBlock}>
				<Image className={styles.image} draggable='false'
					loader={() => width > 1024 ? image : imageMobile}
					src={width > 1024 ? image : imageMobile}
					alt='image'
					width={1}
					height={1}
					unoptimized={true}
					priority={true}
				/>
				<Htag tag='xxl' className={styles.text}>{text}</Htag>
			</div>
		);
	}
};