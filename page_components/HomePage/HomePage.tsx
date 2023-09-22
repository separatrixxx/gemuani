import styles from './HomePage.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Header } from 'components/Header/Header';
import { MainImage } from 'components/MainImage/MainImage';
import { AboutBlock } from 'components/AboutBlock/AboutBlock';
import { SideBlock } from 'components/SideBlock/SideBlock';
import { ImageBlock } from 'components/ImageBlock/ImageBlock';


export const HomePage = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            <Header />
            <MainImage />
            <AboutBlock text={setLocale(router.locale).about_text} link='about' />
            <SideBlock side='left' text={setLocale(router.locale).kiwi_text} link='kiwi_farm' image='/KiwiImage.png' title={setLocale(router.locale).kiwi_farms} />
            <ImageBlock text={setLocale(router.locale).mountains_text} image='/MountainsImage.png' />
            <ImageBlock text={setLocale(router.locale).production_text} image='/ProductionImage.png' />
            <SideBlock side='right' text={setLocale(router.locale).kiwi_text} image='/KiwiImage.png' title={setLocale(router.locale).kiwi_farms} />
        </div>
    );
};