import { ProductInfoProps } from './ProductInfo.props';
import styles from './ProductInfo.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { BuyButton } from '../BuyButton/BuyButton';
import { useEffect, useState } from 'react';
import { getCart } from 'helpers/cart.helper';


export const ProductInfo = ({ id, image, title, titleFull, description, price, setAllCount }: ProductInfoProps): JSX.Element => {
	const [isAdded, setIsAdded] = useState<boolean>(false);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setIsAdded(getCart(id).count > 0);
		setCount(getCart(id).count);
	}, [id]);
	
	return (
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
                <Htag tag='m' className={styles.description}>{description}</Htag>
				<Htag tag='l' className={styles.titleFull}>{price + '₾'}</Htag>
				<BuyButton isAdded={isAdded} setIsAdded={setIsAdded} id={id} image={image} title={title}
					count={count} price={price} setCount={setCount} setAllCount={setAllCount} />
            </div>
		</div>
	);
};
