import { ShopBlockProps } from './ShopBlock.props';
import styles from './ShopBlock.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Arrow from './arrow.svg';
import { setLocale } from 'helpers/locale.helper';
import Link from 'next/link';
import { Htag } from 'components/Htag/Htag';


export const ShopBlock = ({ text, link, image, title }: ShopBlockProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.shopBlock}>
            <div className={styles.shopTextBlock}>
                <Htag tag='xxl' className={styles.shopTitle}>{title}</Htag>
                <Htag tag='l'>{text + ' '}
                    <Link href={link} className={styles.shop}>{setLocale(router.locale).shop}
                        <span className={styles.arrow}><Arrow /></span>
                    </Link>
                </Htag>
            </div>
            <div className={styles.imageBlock}>
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
        </div>
    );
};