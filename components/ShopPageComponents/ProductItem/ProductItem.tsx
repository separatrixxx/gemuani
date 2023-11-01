import { ProductItemProps } from './ProductItem.props';
import styles from './ProductItem.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';


export const ProductItem = ({ id, image, title }: ProductItemProps): JSX.Element => {
    const router = useRouter();
    
	return (
		<div key={title} className={styles.product} onClick={() => router.push('/shop/' + id)}>
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
			<Htag tag='m' className={styles.title}>{title}</Htag>
		</div>
	);
};
