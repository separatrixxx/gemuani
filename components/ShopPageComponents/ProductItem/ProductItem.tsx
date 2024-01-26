import { ProductItemProps } from './ProductItem.props';
import styles from './ProductItem.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import Add from './add.svg';
import { addToCart, getCart, removeFromCart } from 'helpers/cart.helper';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


export const ProductItem = ({ id, image, imageFruit, title, price, weight, setAllCount, setCart }: ProductItemProps): JSX.Element => {
    const router = useRouter();

	const [count, setCount] = useState<number>(0);
	const [isAdded, setIsAdded] = useState<boolean>(false);

	useEffect(() => {
		setIsAdded(getCart(id).count > 0);
		setCount(getCart(id).count);
	}, [id]);

	const variants = {
		added: {
			transform: 'rotate(45deg)',
		},
		notAdded: {
			transform: 'rotate(0deg)',
		}
	};
    
	return (
		<div key={title} className={styles.product} onClick={() => router.push('/shop/' + id)}>
			<motion.span className={styles.add}
				variants={variants}
				initial={isAdded ? 'added' : 'notAdded'}
				transition={{ duration: 0.3 }}
				animate={isAdded ? 'added' : 'notAdded'}
				onClick={(event: any) => {
					event.stopPropagation();
					
					if (!isAdded) {
						addToCart(id, image, title, price, weight, setCount, setAllCount);
					} else {
						removeFromCart(id, setCount, setAllCount, setCart);
					}

					setIsAdded(!isAdded);
				}}
			>
				<Add />
			</motion.span>
			<div className={styles.imageBlock}>
				<Image className={styles.img} draggable='false'
					loader={() => image}
					src={image}
					alt={title}
					width={1}
					height={1}
					unoptimized={true}
				/>
				<div className={styles.imageFruitBlock}>
					<Image className={styles.img} draggable='false'
						loader={() => imageFruit}
						src={imageFruit}
						alt={title}
						width={1}
						height={1}
						unoptimized={true}
					/>
				</div>
			</div>
			<div className={styles.productInfo}>
				<Htag tag='m' className={styles.title}>{title}</Htag>
				<Htag tag='s' className={styles.price}>{price + '₾'}</Htag>
			</div>
		</div>
	);
};
