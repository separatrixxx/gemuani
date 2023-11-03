import { ProductPageProps } from './ProductPage.props';
import styles from './ProductPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';
import { ContactsForm } from 'components/ContactsPageComponents/ContactsForm/ContactsForm';
import Arrow from './arrow.svg';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { ProductInfo } from 'components/ProductPageComponents/ProductInfo/ProductInfo';


export const ProductPage = ({ image, title, titleFull, description }: ProductPageProps): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.productBody}>
                    <h1>{title}</h1>
					<ProductInfo image={image} title={title} titleFull={titleFull} description={description} />
				</div>
				<Footer />
			</div>
		</>
	);
};