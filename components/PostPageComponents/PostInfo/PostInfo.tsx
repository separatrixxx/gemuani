import { PostInfoProps } from './PostInfo.props';
import styles from './PostInfo.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { formatDate } from 'helpers/format.helper';
import { setLocale } from 'helpers/locale.helper';
import Facebook from './fb.svg';
import Instagram from './ig.svg';
import YouTube from './yt.svg';
import X from './tw.svg';


export const PostInfo = ({ image, title, text, date, links }: PostInfoProps): JSX.Element => {
	const router = useRouter();
	
	return (
		<>
			<div className={styles.postInfoDiv}>
				<div className={styles.imageBlock}>
					<Image className={styles.img} draggable='false'
						loader={() => image[0]}
						src={image[0]}
						alt={title}
						width={1}
						height={1}
						unoptimized={true}
						priority={true}
					/>
				</div>
				<div className={styles.textDiv}>
					<Htag tag='l' className={styles.text}>{text}</Htag>
					<Htag tag='m' className={styles.date}>{formatDate(date, router)}</Htag>
				</div>
			</div>
			<div className={styles.imagesDiv}>
				{
					image.slice(1, image.length).map(img => (
						<div key={img} className={styles.imageBlock}>
							<Image className={styles.img} draggable='false'
								loader={() => img}
								src={img}
								alt={title}
								width={1}
								height={1}
								unoptimized={true}
								priority={true}
							/>
						</div>
					))
				}
			</div>
			{
				links ? 
					<div className={styles.linksBlock}>
						<Htag tag='l' className={styles.date}>
							{setLocale(router.locale).see_more_here + ':'}
						</Htag>
						<div className={styles.linksDiv}>
						{
								links.fb?.map(l => (
									<a key={l} target='_blank' rel="noreferrer" href={l} aria-label="Facebook">
										<Facebook />
									</a>
								))
							}
							{
								links.ig?.map(l => (
									<a key={l} target='_blank' rel="noreferrer" href={l} aria-label="Facebook">
										<Instagram />
									</a>
								))
							}
							{
								links.yt?.map(l => (
									<a key={l} target='_blank' rel="noreferrer" href={l} aria-label="Facebook">
										<YouTube />
									</a>
								))
							}
							{
								links.tw?.map(l => (
									<a key={l} target='_blank' rel="noreferrer" href={l} aria-label="Facebook">
										<X />
									</a>
								))
							}
						</div>
					</div>
				:
					<></>
			}
		</>
	);
};
