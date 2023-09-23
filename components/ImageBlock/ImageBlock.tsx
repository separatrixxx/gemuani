import { ImageBlockProps } from './ImageBlock.props';
import styles from './ImageBlock.module.css';
import { Htag } from 'components/Htag/Htag';


export const ImageBlock = ({ text, image }: ImageBlockProps): JSX.Element => {
	return (
		<div className={styles.imageBlock} style={{ backgroundImage: `url(${image})` }}>
			<Htag tag='xxl' className={styles.text}>{text}</Htag>
		</div>
	);
};