import { SideBlockProps } from './SideBlock.props';
import styles from './SideBlock.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { LearnMore } from '../LearnMore/LearnMore';
import { useResizeW } from 'hooks/useResize';
import cn from 'classnames';


export const SideBlock = ({ side, text, link, image, video, title, children }: SideBlockProps): JSX.Element => {
	const width = useResizeW();

	
	return (
		<div className={styles.wrapper}>
			<Htag tag='xxl' className={styles.titleText}>{title}</Htag>
			<div className={styles.sideBlock}>
				{
					image ? 
						<div className={cn(styles.imageBlock, {
							[styles.rightImageBlock]: side === 'right',
						})}>
							<Image className={styles.sideImage} draggable='false'
								loader={() => image}
								src={image}
								alt='side image'
								width={width > 1250 ? width * 0.4 : width > 1024 ? width * 0.425 : width > 845 ? 
									width * 0.45 : width > 400 ? width * 0.9 : width * 0.95}
								height={1}
								unoptimized={true}
								loading="lazy"
							/>
						</div>
					: video ?
						<video autoPlay={true} loop muted className={cn(styles.imageBlock, {
							[styles.rightImageBlock]: side === 'right',
						})}>
							<source src={video} type="video/mp4" />
						</video>
					:
						<></>

				}
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