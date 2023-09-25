import styles from './Footer.module.css';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Mountain from './mountain.svg';
import { LocaleChange } from 'components/MainPageComponents/LocaleChange/LocaleChange';


export const Footer = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.footer}>
            <div className={styles.footerLinks}>
                <div className={styles.linksBlock}>
                    <Htag tag='l' className={styles.title}>{setLocale(router.locale).footer.title1}</Htag>
                </div>
                <div className={styles.linksBlock}>
                    <Htag tag='l' className={styles.title}>{setLocale(router.locale).footer.title2}</Htag>
                    <div>
                        <Htag tag='m' className={styles.link}>Contact us</Htag>
                        <Htag tag='m' className={styles.link}>Returns</Htag>
                        <Htag tag='m' className={styles.link}>Site Map</Htag>
                        <Htag tag='m' className={styles.link}>Brands</Htag>
                        <Htag tag='m' className={styles.link}>Special Offers</Htag>
                    </div>
                </div>
                <div className={styles.linksBlock}>
                    <Htag tag='l' className={styles.title}>{setLocale(router.locale).footer.title3}</Htag>
                    <div>
                        <Htag tag='m' className={styles.link}>Partners</Htag>
                        <Htag tag='m' className={styles.link}>Delivery Information</Htag>
                        <Htag tag='m' className={styles.link}>Georgia's Bounty</Htag>
                        <Htag tag='m' className={styles.link}>Privacy Policy</Htag>
                        <Htag tag='m' className={styles.link}>Terms & Conditions</Htag>
                    </div>
                </div>
            </div>
            <Mountain className={styles.mountain} />
            <div className={styles.footerBottom}>
                <Htag tag='s' className={styles.footerBottomText}>
                    {'© 2011 - ' + format(new Date(), 'yyyy') + ' GEMUANI Ltd. ' + setLocale(router.locale).all_rights_reserved}
                </Htag>
                <LocaleChange />
            </div>
        </div>
    );
};