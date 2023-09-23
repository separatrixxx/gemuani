import { ShopBlockProps } from './ShopBlock.props';
import styles from './ShopBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import Image from 'next/image';


export const ShopBlock = ({ text, link, image, title }: ShopBlockProps): JSX.Element => {
    return (
        <div className={styles.shopBlock}>
            <div className={styles.shopTextBlock}>
                <Htag tag='xxl' className={styles.shopTitle}>{title}</Htag>
                <Htag tag='l'>{text}</Htag>
            </div>
            <Image className={styles.shopImage} draggable='false'
                loader={() => image}
                src={image}
                alt='shop image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
        </div>
    );
};