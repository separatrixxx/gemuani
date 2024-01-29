import styles from './Footer.module.css';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Logo from './logo_icon.svg';
import Facebook from './fb.svg';
import Instagram from './ig.svg';
import Linkedin from './li.svg';
import YouTube from './yt.svg';
import Telegram from './tg.svg';
import TikTok from './tt.svg';
import X from './tw.svg';
import { LocaleChange } from 'components/MainPageComponents/LocaleChange/LocaleChange';
import { FooterLinks } from 'components/FooterLinks/FooterLinks';
import Link from 'next/link';


export const Footer = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.footer}>
            <div className={styles.footerLinks}>
                <FooterLinks title={setLocale(router.locale).footer.title1}>
                    <div className={styles.socialMediaBlock}>
                        <a target='_blank' rel="noreferrer" href='https://www.facebook.com/gemuani' aria-label="Facebook">
                            <Facebook />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/gemuani_ltd' aria-label="Instagram">
                            <Instagram />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/company/gemuani-healthy-food' aria-label="Linkedin">
                            <Linkedin />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://www.youtube.com/@gemuani' aria-label="YouTube">
                            <YouTube />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://t.me/gemuani' aria-label="Telegram">
                            <Telegram />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://www.tiktok.com/@_gemuani_?_t=8h0NaOEWItO' aria-label="TikTok">
                            <TikTok />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://twitter.com/GEMUANI_LTD' aria-label="X">
                            <X />
                        </a>
                    </div>
                </FooterLinks>
                <FooterLinks title={setLocale(router.locale).footer.title2}>
                    <div className={styles.linksDiv}>
                        <Link href='contacts'>
                            <Htag tag='m' className={styles.link}>{setLocale(router.locale).titles.contacts_title}</Htag>
                        </Link>
                        <Link href='sitemap.xml'>
                            <Htag tag='m' className={styles.link}>{setLocale(router.locale).site_map}</Htag>
                        </Link>
                        <Link href='/'>
                            <Htag tag='m' className={styles.link}>{setLocale(router.locale).privacy_policy}</Htag>
                        </Link>
                    </div>
                </FooterLinks>
                <FooterLinks title={setLocale(router.locale).footer.title3}>
                    <div className={styles.linksDiv}>
                        <Link href='about'>
                            <Htag tag='m' className={styles.link}>{setLocale(router.locale).titles.about_title + ' Gemuani'}</Htag>
                        </Link>
                        <Link href='kiwi_farm'>
                            <Htag tag='m' className={styles.link}>{setLocale(router.locale).titles.kiwi_farm_title}</Htag>
                        </Link>
                        <Link href='partners'>
                            <Htag tag='m' className={styles.link}>{setLocale(router.locale).partners}</Htag>
                        </Link>
                    </div>
                </FooterLinks>
                <Logo className={styles.logo} />
            </div>
            <div className={styles.footerBottom}>
                <Htag tag='s' className={styles.footerBottomText}>
                    {'© 2011 - ' + format(new Date(), 'yyyy') + ' GEMUANI Ltd. ' + setLocale(router.locale).all_rights_reserved}
                </Htag>
                <LocaleChange />
            </div>
        </div>
    );
};