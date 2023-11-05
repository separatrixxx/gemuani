import { ProductInfoProps } from './ProductInfo.props';
import styles from './ProductInfo.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { BuyButton } from '../BuyButton/BuyButton';
import { useState } from 'react';


export const ProductInfo = ({ id, image, title, titleFull, description }: ProductInfoProps): JSX.Element => {
	const [isAdded, setIsAdded] = useState<boolean>(false);
	
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
				/>
			</div>
            <div className={styles.textDiv}>
                <Htag tag='l' className={styles.titleFull}>{titleFull}</Htag>
                <Htag tag='m' className={styles.description}>{description}</Htag>
				<BuyButton isAdded={isAdded} setIsAdded={setIsAdded} id={id}
					image={image} title={title} />
            </div>
		</div>
	);
};
