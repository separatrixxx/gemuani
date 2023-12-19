import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import { PostPage } from 'page_components/PostPage/PostPage';
import { Blog } from 'interfaces/blog.interface';


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
	// const { data: blog }: AxiosResponse<Blog[]> = await axios.get('https://telegram.gemuani.com/app/blog/getall');

	const blog1: Blog = {
        id: '0',
        image: '/BlogImg2.webp',
        title: 'GOOLFOOD 2024',
        text: "Gemuani, the leader in Georgian freeze-dried fruits and vegetables 🍇🍎, are pleased to join GULFOOD 2024 in Dubai 🌍 from 19 to 23 February 2024, a major global food and beverage exhibition 🥘🌐.\nGemuani will present its high-quality freeze-dried Georgian products 🍒🥦 at GULFOOD 2024, presenting Georgia's culinary heritage and innovation in the country pavilion👩‍🍳.\nOur presence at GULFOOD 2024 reflects our commitment to promoting Georgian products around the world 🌏 and our desire to explore new opportunities and share our culinary passion ❤️🍴.\nJoin us at GULFOOD 2024, where tradition meets innovation, and experience the taste of Georgia with Gemuani 🤝🍽.",
        date: '2024-02-19',
    };

    const blog2: Blog = {
        id: '1',
        image: '/BlogImg3.webp',
        title: 'Grüne Woche 2024',
        text: "Our company Gemuani is participating in the prestigious Grüne Woche 2024! 🌱🚜 A hub for innovation in food, agriculture and horticulture, this international exhibition is perfectly aligned with our values ​​​​and goals. Join us from 19 to 28 January in Berlin as we showcase our products and network with global industry leaders. 🌍",
        date: '2024-01-19',
    };

    const blog3: Blog = {
        id: '2',
        image: '/BlogImg4.webp',
        title: 'Partnership with Pigo',
        text: "Mr. Goran, CEO of Pigo company, very often visits our factory to show what high-level product can be done, visit was with new possible buyer of Pigo. 🏭🤝 Wish to our partner success. 🌟 We are happy to choose Pigo, Italy company as our partner.",
        date: '2023-12-07',
    };

    const blog4: Blog = {
        id: '3',
        image: '/BlogImg1.webp',
        title: 'OPERA CROWN awards',
        text: 'The winners of the III Tbilisi International Opera Crown Voice Competition, held on November 25, 2023, were announced as follows: \n\n1st Prize - Elmina Hasan (Georgia-Azerbaijan), awarded by Tamar Tsulukidze, Head of the Department for the Promotion of the Creative Process at the Ministry of Culture.\n2nd Prize - Ana Palavandishvili (Georgia), awarded by Abdulaziz Hassan Zakri, founder and CEO of Al-Mutafarrda.\n3rd Prize - Dinmukhamed Koshkinbayev (Kazakhstan), awarded by Archil Jaliashvili, founder of Gemuani.\nTbilisi State Opera and Ballet Theater Prize: Alikhan Zeinolla (Kazakhstan), presented by Badri Maisuradze, the artistic director of the theater.\n\nCongratulations to all the participants for their outstanding performances and dedication to the art of opera. Your talent and hard work are truly inspiring, and we look forward to seeing your future contributions to the world of music. Keep up the great work!',
        date: '2023-11-25',
    };
		
    const locales = ['en', 'ka', 'ru'];

    const paths: any[] = [];

    [blog1, blog2, blog3, blog4].map(blog => {
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
		// const { data: blog }: AxiosResponse<Blog> = await axios.get('https://telegram.gemuani.com/app/blog/getone?id=' + params.blog);

		const blog1: Blog = {
			id: '0',
			image: '/BlogImg2.webp',
			title: 'GOOLFOOD 2024',
			text: "Gemuani, the leader in Georgian freeze-dried fruits and vegetables 🍇🍎, are pleased to join GULFOOD 2024 in Dubai 🌍 from 19 to 23 February 2024, a major global food and beverage exhibition 🥘🌐.\nGemuani will present its high-quality freeze-dried Georgian products 🍒🥦 at GULFOOD 2024, presenting Georgia's culinary heritage and innovation in the country pavilion👩‍🍳.\nOur presence at GULFOOD 2024 reflects our commitment to promoting Georgian products around the world 🌏 and our desire to explore new opportunities and share our culinary passion ❤️🍴.\nJoin us at GULFOOD 2024, where tradition meets innovation, and experience the taste of Georgia with Gemuani 🤝🍽.",
			date: '2024-02-19',
		};
	
		const blog2: Blog = {
			id: '1',
			image: '/BlogImg3.webp',
			title: 'Grüne Woche 2024',
			text: "Our company Gemuani is participating in the prestigious Grüne Woche 2024! 🌱🚜 A hub for innovation in food, agriculture and horticulture, this international exhibition is perfectly aligned with our values ​​​​and goals. Join us from 19 to 28 January in Berlin as we showcase our products and network with global industry leaders. 🌍",
			date: '2024-01-19',
		};
	
		const blog3: Blog = {
			id: '2',
			image: '/BlogImg4.webp',
			title: 'Partnership with Pigo',
			text: "Mr. Goran, CEO of Pigo company, very often visits our factory to show what high-level product can be done, visit was with new possible buyer of Pigo. 🏭🤝 Wish to our partner success. 🌟 We are happy to choose Pigo, Italy company as our partner.",
			date: '2023-12-07',
		};
	
		const blog4: Blog = {
			id: '3',
			image: '/BlogImg1.webp',
			title: 'OPERA CROWN awards',
			text: 'The winners of the III Tbilisi International Opera Crown Voice Competition, held on November 25, 2023, were announced as follows: \n\n1st Prize - Elmina Hasan (Georgia-Azerbaijan), awarded by Tamar Tsulukidze, Head of the Department for the Promotion of the Creative Process at the Ministry of Culture.\n2nd Prize - Ana Palavandishvili (Georgia), awarded by Abdulaziz Hassan Zakri, founder and CEO of Al-Mutafarrda.\n3rd Prize - Dinmukhamed Koshkinbayev (Kazakhstan), awarded by Archil Jaliashvili, founder of Gemuani.\nTbilisi State Opera and Ballet Theater Prize: Alikhan Zeinolla (Kazakhstan), presented by Badri Maisuradze, the artistic director of the theater.\n\nCongratulations to all the participants for their outstanding performances and dedication to the art of opera. Your talent and hard work are truly inspiring, and we look forward to seeing your future contributions to the world of music. Keep up the great work!',
			date: '2023-11-25',
		};

		const blogList: Blog[] = [blog1, blog2, blog3, blog4];

		const blog = blogList[params.blog ? +params.blog : 0];

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