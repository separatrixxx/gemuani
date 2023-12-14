import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import { PostPage } from 'page_components/PostPage/PostPage';
import { Blog } from 'interfaces/blog.interface';
import axios, { AxiosResponse } from 'axios';


export default function Post({ blog }: PostProps) {
	return (
		<>
			<Head>
				<title>{'Gemuani - ' + blog.title}</title>
				<meta name='description' content={blog.title} />
				<meta property='og:title' content={blog.title} />
				<meta property='og:description' content={blog.title} />
				<meta name='robots' content='index, nosnippet' />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta property='og:url' content={'https://www.gemuani.com/shop/' + blog.id} />
				<meta property='og:type' content='website' />
				<meta property='og:site_name' content='Gemuani' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<PostPage id={blog.id} image={blog.image} title={blog.title} text={blog.text} date={blog.date}  />
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: blog }: AxiosResponse<Blog[]> = await axios.get('https://telegram.gemuani.com/app/blog/getall');
	
    const locales = ['en', 'ka', 'ru'];

    const paths: any[] = [];

    blog.map(blog => {
        return locales.map((locale) => {
            return paths.push({
                params: { blog: '' + blog.id },
                locale,
            });
        });
    });

	return {
		paths: paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	try {
		const { data: blog }: AxiosResponse<Blog> = await axios.get('https://telegram.gemuani.com/app/blog/getone?id=' + params.blog);

		return {
			props: {
				blog
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

interface PostProps extends Record<string, unknown> {
	blog: Blog;
}