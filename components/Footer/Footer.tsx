import styles from './Footer.module.css';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Mountain from './mountain.svg';
import { LocaleChange } from 'components/LocaleChange/LocaleChange';


export const Footer = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.footer}>
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