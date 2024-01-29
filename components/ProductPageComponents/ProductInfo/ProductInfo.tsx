import { ProductInfoProps } from './ProductInfo.props';
import styles from './ProductInfo.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { BuyButton } from '../BuyButton/BuyButton';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import cn from 'classnames';


export const ProductInfo = ({ id, image, title, description, country, sort, sortNum,
	setAllCount, setCart, setSortNum, isAdded, count, setIsAdded, setCount }: ProductInfoProps): JSX.Element => {
	const router = useRouter();
	
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
					<Htag tag='l' className={styles.titleFull}>{sort[sortNum].titleFull}</Htag>
					<div className={styles.moreInfo}>
						<Htag tag='m' className={styles.text}>{setLocale(router.locale).country_of_origin + ': '}
							<span className={styles.bold}>{country}</span>
						</Htag>
						<Htag tag='m' className={styles.text}>{setLocale(router.locale).weight + ': '}
							<span className={styles.bold}>
								{sort[sortNum].weight + ' ' + setLocale(router.locale).gram + ' | ' 
									+ (sort[sortNum].weight * 0.035274).toFixed(2) + ' ' + setLocale(router.locale).ounces}
							</span>
						</Htag>
					</div>
					<Htag tag='l' className={styles.titleFull}>{sort[sortNum].price + '₾'}</Htag>
					<div className={styles.sortDiv}>
						{sort.map(s => (
							<Htag key={s.id} tag='s' className={cn(styles.sortTitle, {
								[styles.active]: s.id === sortNum,
							})} onClick={() => setSortNum(s.id)}>
								{s.title + ' | ' + s.weight}
							</Htag>
						))}
					</div>
					<BuyButton isAdded={isAdded} setIsAdded={setIsAdded} id={id + '_' + sort[sortNum].id} image={image}
						title={title + ' | ' + sort[sortNum].title + ' | ' + sort[sortNum].weight} count={count} 
						price={sort[sortNum].price} weight={sort[sortNum].weight}
						setCount={setCount} setAllCount={setAllCount} setCart={setCart} />
				</div>
			</div>
			<div className={styles.descriptionDiv}>
				<Htag tag='l' className={styles.titleFull}>{setLocale(router.locale).product_description}</Htag>
				<Htag tag='m' className={styles.text}>{description}</Htag>
			</div>
		</>
	);
};
