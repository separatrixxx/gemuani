import { ImageBlockProps } from './ImageBlock.props';
import styles from './ImageBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import { Ticker } from 'components/Ticker/Ticker';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';


export const ImageBlock = ({ text, image, ticker }: ImageBlockProps): JSX.Element => {
	const router = useRouter();

	return (
		<div>
			{ticker ? <Ticker text={setLocale(router.locale).our_mission} /> : <></>}
			<div className={styles.imageBlock} style={{ backgroundImage: `url(${image})` }}>
				<Htag tag='xxl' className={styles.text}>{text}</Htag>
			</div>
		</div>
	);
};