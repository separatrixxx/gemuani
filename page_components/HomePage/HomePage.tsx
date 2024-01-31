import styles from './HomePage.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { BlogBlock } from 'components/MainPageComponents/BlogBlock/BlogBlock';
import { MainImage } from 'components/MainPageComponents/MainImage/MainImage';
import { TextBlock } from 'components/MainPageComponents/TextBlock/TextBlock';
import { Header } from 'components/Header/Header';
import { SideBlock } from 'components/MainPageComponents/SideBlock/SideBlock';
import { ImageBlock } from 'components/MainPageComponents/ImageBlock/ImageBlock';
import { EnergyCounter } from 'components/MainPageComponents/EnergyCounter/EnergyCounter';
import { Footer } from 'components/Footer/Footer';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { TopElem } from 'components/TopElem/TopElem';
import { MapBlock } from 'components/MainPageComponents/MapBlock/MapBlock';
import { useEffect, useState } from 'react';


export const HomePage = (): JSX.Element => {
    const router = useRouter();

    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        const imageBlock = document.getElementById('mainImage');
      
        if (imageBlock) {
            setHeight(imageBlock.clientHeight);
            window.addEventListener('resize', function(){
                setHeight(imageBlock.clientHeight);
            });
        }
      }, []);

    return (
        <>
            <Header />
            <TopElem />
            <TopButton />
            <div className={styles.wrapper}>
                <MainImage />
                <div className={styles.unfixedWrapper} style={{ marginTop: height + 'px' }}>
                    <TextBlock text={setLocale(router.locale).about_text} link='about'
                        title={setLocale(router.locale).about_title} span='GEMUANI' />
                    <SideBlock side='left' text={setLocale(router.locale).kiwi_text} link='kiwi_farm' image='/KiwiImage.gif'
                        title={setLocale(router.locale).kiwi_title} />
                    {/* <ImageBlock text={setLocale(router.locale).mountains_text} image='/MountainsImage.webp' imageMobile='/MountainsImageMobile.webp'
                        ticker={false} /> */}
                    <SideBlock side='right' text={setLocale(router.locale).energy_text} image='/EnergyImage.webp'
                        title={setLocale(router.locale).energy_title}>
                        <EnergyCounter energyNumber={413} />
                    </SideBlock>
                    {/* <ShopBlock text={setLocale(router.locale).shop_text} link='shop' image='/ShopImage.webp'
                        title={setLocale(router.locale).shop_title} /> */}
                    <ImageBlock text={setLocale(router.locale).production_text} image='/ProductionImage.webp' imageMobile='/ProductionImageMobile.webp'
                        ticker={false} />
                    <MapBlock text={setLocale(router.locale).map_text}
                        title={setLocale(router.locale).map_title} span='GEMUANI' />
                    {/* <Slider /> */}
                    <TextBlock text={setLocale(router.locale).history_text} link='culture'
                        title={setLocale(router.locale).history_title} />
                    <SideBlock side='left' text={setLocale(router.locale).climate_text} image='/ClimateImage.gif'
                        title={setLocale(router.locale).climate_title} />
                    {/* <WorldBlock text={setLocale(router.locale).world_text} title={setLocale(router.locale).world_title} /> */}
                    <BlogBlock text={setLocale(router.locale).blog_text} link='blog' />
                    <Footer />
                </div>
            </div>
        </>
    );
};