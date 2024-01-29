import { CartItemProps } from './CartItem.props';
import styles from './CartItem.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { CounterDiv } from 'components/ProductPageComponents/CounterDiv/CounterDiv';
import { useEffect, useState } from 'react';
import { getCart } from 'helpers/cart.helper';


export const CartItem = ({ id, image, title, price, setAllCount, totalPrice, setTotalPrice, setCart }: CartItemProps): JSX.Element => {
    const router = useRouter();
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setCount(getCart(id).count);
	}, [id]);
    
	if (count > 0) {
		return (
			<div key={title} className={styles.cart}>
				<div className={styles.imageBlock} onClick={() => router.push('/shop/' + id.slice(0, id.length - 2))}>
					<Image className={styles.img} draggable='false'
						loader={() => image}
						src={image}
						alt={title}
						width={1}
						height={1}
						unoptimized={true}
					/>
				</div>
				<div className={styles.infoDiv}>
					<Htag tag='l' className={styles.title}>{title}</Htag>
					<Htag tag='s' className={styles.title}>{price + '₾'}</Htag>
					<CounterDiv id={id} count={count} setCount={setCount} setAllCount={setAllCount}
						price={price} totalPrice={totalPrice} setTotalPrice={setTotalPrice} setCart={setCart} />
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};
