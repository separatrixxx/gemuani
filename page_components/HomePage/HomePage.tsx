import styles from './HomePage.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Header } from 'components/Header/Header';
import { MainImage } from 'components/MainImage/MainImage';
import { SideBlock } from 'components/SideBlock/SideBlock';
import { ImageBlock } from 'components/ImageBlock/ImageBlock';
import { TextBlock } from 'components/TextBlock/TextBlock';
import { ShopBlock } from 'components/ShopBlock/ShopBlock';
import { EnergyCounter } from 'components/EnergyCounter/EnergyCounter';
import { Footer } from 'components/Footer/Footer';
import { WorldBlock } from 'components/WorldBlock/WorldBlock';
import { BlogBlock } from 'components/BlogBlock/BlogBlock';


export const HomePage = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            <Header />
            <MainImage />
            <TextBlock text={setLocale(router.locale).about_text} link='about'
                title={setLocale(router.locale).about_title} />
            <SideBlock side='left' text={setLocale(router.locale).kiwi_text} link='kiwi_farm' image='/KiwiImage.png'
                title={setLocale(router.locale).kiwi_title} />
            <ImageBlock text={setLocale(router.locale).mountains_text} image='/MountainsImage.png' ticker={true} />
            <ShopBlock text={setLocale(router.locale).shop_text} link='shop' image='/ShopImage.png'
                title={setLocale(router.locale).shop_title} />
            <ImageBlock text={setLocale(router.locale).production_text} image='/ProductionImage.png' ticker={false} />
            <SideBlock side='right' text={setLocale(router.locale).energy_text} image='/EnergyImage.png'
                title={setLocale(router.locale).energy_title}>
                <EnergyCounter energyNumber={413} />
            </SideBlock>
            <TextBlock text={setLocale(router.locale).history_text} link='culture'
                title={setLocale(router.locale).history_title} />
            <SideBlock side='left' text={setLocale(router.locale).climate_text} image='/ClimateImage.png'
                title={setLocale(router.locale).climate_title} />
            <WorldBlock text={setLocale(router.locale).world_text} title={setLocale(router.locale).world_title} />
            <BlogBlock text={setLocale(router.locale).blog_text} link='blog' />
            <Footer />
        </div>
    );
};