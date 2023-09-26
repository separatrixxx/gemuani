import styles from './HomePage.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { BlogBlock } from 'components/MainPageComponents/BlogBlock/BlogBlock';
import { MainImage } from 'components/MainPageComponents/MainImage/MainImage';
import { TextBlock } from 'components/MainPageComponents/TextBlock/TextBlock';
import { Header } from 'components/Header/Header';
import { SideBlock } from 'components/MainPageComponents/SideBlock/SideBlock';
import { ImageBlock } from 'components/MainPageComponents/ImageBlock/ImageBlock';
import { ShopBlock } from 'components/MainPageComponents/ShopBlock/ShopBlock';
import { EnergyCounter } from 'components/MainPageComponents/EnergyCounter/EnergyCounter';
import { WorldBlock } from 'components/MainPageComponents/WorldBlock/WorldBlock';
import { Footer } from 'components/Footer/Footer';
import { Slider } from 'components/MainPageComponents/Slider/Slider';


export const HomePage = (): JSX.Element => {
    const router = useRouter();

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <MainImage />
                <TextBlock text={setLocale(router.locale).about_text} link='about'
                    title={setLocale(router.locale).about_title} />
                <SideBlock side='left' text={setLocale(router.locale).kiwi_text} link='kiwi_farm' image='/KiwiImage.png'
                    title={setLocale(router.locale).kiwi_title} />
                <ImageBlock text={setLocale(router.locale).mountains_text} image='/MountainsImage.png' imageMobile='/MountainsImageMobile.png'
                    ticker={true} />
                <ShopBlock text={setLocale(router.locale).shop_text} link='shop' image='/ShopImage.png'
                    title={setLocale(router.locale).shop_title} />
                <ImageBlock text={setLocale(router.locale).production_text} image='/ProductionImage.png' imageMobile='/ProductionImageMobile.png'
                    ticker={false} />
                <SideBlock side='right' text={setLocale(router.locale).energy_text} image='/EnergyImage.png'
                    title={setLocale(router.locale).energy_title}>
                    <EnergyCounter energyNumber={413} />
                </SideBlock>
                <Slider />
                <TextBlock text={setLocale(router.locale).history_text} link='culture'
                    title={setLocale(router.locale).history_title} />
                <SideBlock side='left' text={setLocale(router.locale).climate_text} image='/ClimateImage.png'
                    title={setLocale(router.locale).climate_title} />
                <WorldBlock text={setLocale(router.locale).world_text} title={setLocale(router.locale).world_title} />
                <BlogBlock text={setLocale(router.locale).blog_text} link='blog' />
                <Footer />
            </div>
        </>
    );
};