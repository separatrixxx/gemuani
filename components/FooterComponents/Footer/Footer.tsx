import styles from './Footer.module.css';
import { Htag } from 'components/Common/Htag/Htag';
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
import { FooterLinks } from 'components/FooterComponents/FooterLinks/FooterLinks';
import Link from 'next/link';
import { facebookLink, instagramLink, linkedinLink, telegramLink, tiktokLink, twitterLink, youtubeLink } from 'helpers/links.helper';


export const Footer = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.footer}>
            <div className={styles.footerLinks}>
                <FooterLinks title={setLocale(router.locale).footer.title1}>
                    <div className={styles.socialMediaBlock}>
                        <a target='_blank' rel="noreferrer" href={facebookLink} aria-label="Facebook">
                            <Facebook />
                        </a>
                        <a target='_blank' rel="noreferrer" href={instagramLink} aria-label="Instagram">
                            <Instagram />
                        </a>
                        <a target='_blank' rel="noreferrer" href={linkedinLink} aria-label="Linkedin">
                            <Linkedin />
                        </a>
                        <a target='_blank' rel="noreferrer" href={youtubeLink} aria-label="YouTube">
                            <YouTube />
                        </a>
                        <a target='_blank' rel="noreferrer" href={telegramLink} aria-label="Telegram">
                            <Telegram />
                        </a>
                        <a target='_blank' rel="noreferrer" href={tiktokLink} aria-label="TikTok">
                            <TikTok />
                        </a>
                        <a target='_blank' rel="noreferrer" href={twitterLink} aria-label="X">
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
            <div className={styles.byBlock}>
                <a target='_blank' rel="noreferrer" href='http://banana.codes/' aria-label="banana codes">
                    <Htag tag='s' className={styles.byBanana}>
                        by 🍌 codes
                    </Htag>
                </a>
            </div>
        </div>
    );
};