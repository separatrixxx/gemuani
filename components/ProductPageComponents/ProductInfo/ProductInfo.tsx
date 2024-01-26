import { ProductInfoProps } from './ProductInfo.props';
import styles from './ProductInfo.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { BuyButton } from '../BuyButton/BuyButton';
import { useEffect, useState } from 'react';
import { getCart } from 'helpers/cart.helper';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';


export const ProductInfo = ({ id, image, title, titleFull, description, price, country, weight,
	setAllCount, setCart }: ProductInfoProps): JSX.Element => {
	const router = useRouter();

	const [isAdded, setIsAdded] = useState<boolean>(false);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setIsAdded(getCart(id).count > 0);
		setCount(getCart(id).count);
	}, [id]);
	
	return (
		<>
			<div className={styles.productInfoDiv}>
				<div className={styles.imageBlock}>
					<Image className={styles.img} draggable='false'
						loader={() => image}
						src={image}
						alt={title}
						width={1}
						height={1}
						unoptimized={true}
						priority={true}
					/>
				</div>
				<div className={styles.textDiv}>
					<Htag tag='l' className={styles.titleFull}>{titleFull}</Htag>
					<div className={styles.moreInfo}>
						<Htag tag='m' className={styles.text}>{setLocale(router.locale).country_of_origin + ': '}
							<span className={styles.bold}>{country}</span>
						</Htag>
						<Htag tag='m' className={styles.text}>{setLocale(router.locale).weight + ': '}
							<span className={styles.bold}>
								{weight + ' ' + setLocale(router.locale).gram + ' | ' 
									+ (weight * 0.035274).toFixed(2) + ' ' + setLocale(router.locale).ounces}
							</span>
						</Htag>
					</div>
					<Htag tag='l' className={styles.titleFull}>{price + '₾'}</Htag>
					<br />
					<BuyButton isAdded={isAdded} setIsAdded={setIsAdded} id={id} image={image} title={title}
						count={count} price={price} weight={weight} setCount={setCount} setAllCount={setAllCount} setCart={setCart} />
				</div>
			</div>
			<div className={styles.descriptionDiv}>
				<Htag tag='l' className={styles.titleFull}>{setLocale(router.locale).product_description}</Htag>
				<Htag tag='m' className={styles.text}>{description}</Htag>
			</div>
		</>
	);
};
