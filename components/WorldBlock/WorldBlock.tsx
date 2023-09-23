import { WorldBlockProps } from './WorldBlock.props';
import styles from './WorldBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import { ImageBlock } from 'components/ImageBlock/ImageBlock';


export const WorldBlock = ({ text, title }: WorldBlockProps): JSX.Element => {
	return (
		<>
			<div className={styles.worldBlock}>
				<Htag tag='xxl' className={styles.worldBlockTitle}>{title}</Htag>
				<Htag tag='xl' className={styles.text}>{text}</Htag>
			</div>
			<ImageBlock image='/WorldImage.png' ticker={false} />
		</>
	);
};