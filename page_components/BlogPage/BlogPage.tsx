import styles from './BlogPage.module.css';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { BlogList } from 'components/BlogPageComponents/BlogList/BlogList';
import { getBlog } from 'helpers/blog.helper';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { useEffect, useState } from 'react';
import { Blog } from 'interfaces/blog.interface';
import { PadBlock } from 'components/MainPageComponents/PadBlock/PadBlock';


export const BlogPage = (): JSX.Element => {
	const router = useRouter();

	const [blog, setBlog] = useState<Blog[]>([]);	

	useEffect(() => {
		getBlog(setBlog);
	}, []);

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<PadBlock title={setLocale(router.locale).titles.blog_title.toUpperCase()} />
				<div className={styles.blogBody}>
					{
						blog.length > 0 ?
							<BlogList blog={blog.reverse()} />
						:
							<Htag tag='l' className={styles.empty}>
								{setLocale(router.locale).blog_is_empty}
							</Htag>
					}
				</div>
				<Footer />
			</div>
		</>
	);
};