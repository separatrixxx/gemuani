import { PostPageProps } from './PostPage.props';
import styles from './PostPage.module.css';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { Htag } from 'components/Htag/Htag';
import Arrow from './arrow.svg';
import { useRouter } from 'next/router';
import { PostInfo } from 'components/PostPageComponents/PostInfo/PostInfo';


export const PostPage = ({ id, image, title, text, date, links }: PostPageProps): JSX.Element => {
	const router = useRouter();
	
	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.postBody}>
                    <div className={styles.backDiv}>
						<span className={styles.arrow} onClick={() => router.push('/blog')}>
							<Arrow />
						</span>
						<Htag tag='xl' className={styles.title}>{title}</Htag>
					</div>
					<PostInfo image={image} title={title} text={text} date={date} links={links} />
				</div>
				<Footer />
			</div>
		</>
	);
};