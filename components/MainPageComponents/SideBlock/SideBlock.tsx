import { SideBlockProps } from './SideBlock.props';
import styles from './SideBlock.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { LearnMore } from '../LearnMore/LearnMore';
import cn from 'classnames';


export const SideBlock = ({ side, text, link, image, title, children }: SideBlockProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Htag tag='xxl' className={styles.titleText}>{title}</Htag>
			<div className={styles.sideBlock}>
				<div className={cn(styles.imageBlock, {
					[styles.rightImageBlock]: side === 'right',
				})}>
					<Image className={styles.sideImage} draggable='false'
						loader={() => image}
						src={image}
						alt='side image'
						width={1}
						height={1}
						unoptimized={true}
						priority={true}
					/>
				</div>
				<div className={styles.textDiv}>
					<Htag tag='xl' className={cn({
						[styles.textLeft]: side === 'left',
						[styles.textRight]: side === 'right',
					})}>{text}</Htag>
					{children ? children : <></>}
					{link ? <LearnMore link={link} /> : <></>}
				</div>
			</div>
		</div>
	);
};