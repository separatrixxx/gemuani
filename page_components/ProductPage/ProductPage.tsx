import { ProductPageProps } from './ProductPage.props';
import styles from './ProductPage.module.css';
import { useRouter } from 'next/router';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { ProductInfo } from 'components/ProductPageComponents/ProductInfo/ProductInfo';
import { Htag } from 'components/Htag/Htag';


export const ProductPage = ({ image, title, titleFull, description }: ProductPageProps): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.productBody}>
                    <Htag tag='xl' className={styles.title}>{title}</Htag>
					<ProductInfo image={image} title={title} titleFull={titleFull} description={description} />
				</div>
				<Footer />
			</div>
		</>
	);
};