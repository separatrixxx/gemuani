import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { Production } from 'interfaces/production.interface';
import { setProduction } from 'helpers/production.helper';
import { ParsedUrlQuery } from 'node:querystring';
import { ProductPage } from 'page_components/ProductPage/ProductPage';


export default function Product({ product }: ProductProps) {
	return (
		<>
			<Head>
				<title>{'Gemuani - ' + product.title}</title>
				<meta name='description' content={product.titleFull} />
				<meta property='og:title' content={product.title} />
				<meta property='og:description' content={product.titleFull} />
				<meta name='robots' content='index, nosnippet' />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta property='og:url' content={'https://www.gemuani.com/shop/' + product.id} />
				<meta property='og:type' content='website' />
				<meta property='og:site_name' content='Gemuani' />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<ProductPage id={product.id} image={product.image} title={product.title} titleFull={product.titleFull}
				description={product.description} price={product.price} />
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
    const locales = ['en', 'ka', 'ru'];

    const paths: any[] = [];

    setProduction('en').map(product => {
        return locales.map((locale) => {
            return paths.push({
                params: { product: product.id },
                locale,
            });
        });
    });

	return {
		paths: paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<ProductProps> = ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	try {
		let product = setProduction('en')[0];

		if (params.product) {
			product = setProduction('en')[+params.product];
		}

		return {
			props: {
				product
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

interface ProductProps extends Record<string, unknown> {
	product: Production;
}