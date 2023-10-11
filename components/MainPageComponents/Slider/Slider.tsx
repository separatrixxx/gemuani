import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useResizeW } from 'hooks/useResize';
import { Slide } from '../Slide/Slide';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';


export const Slider = (): JSX.Element => {
    const router = useRouter();
    const width = useResizeW();

    return (
        <Swiper className={styles.slider} style={{ width: width - 50 }}
            modules={[Pagination, A11y, Autoplay]}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <Slide title={setLocale(router.locale).slider.title1} text={setLocale(router.locale).slider.text1}
                    image='/SlideImage1.webp' imageMobile='/SlideImage1 Mobile.webp' />
            </SwiperSlide>
            <SwiperSlide>
                <Slide title={setLocale(router.locale).slider.title2} text={setLocale(router.locale).slider.text2}
                    image='/SlideImage2.webp' imageMobile='/SlideImage2 Mobile.webp' />
            </SwiperSlide>
            <SwiperSlide>
                <Slide title={setLocale(router.locale).slider.title3} text={setLocale(router.locale).slider.text3}
                    image='/SlideImage3.webp' imageMobile='/SlideImage3 Mobile.webp' />
            </SwiperSlide>
            <SwiperSlide>
                <Slide title={setLocale(router.locale).slider.title4} text={setLocale(router.locale).slider.text4}
                    image='/SlideImage4.webp' imageMobile='/SlideImage4 Mobile.webp' />
            </SwiperSlide>
            <SwiperSlide>
                <Slide title={setLocale(router.locale).slider.title5} text={setLocale(router.locale).slider.text5}
                    image='/SlideImage5.webp' imageMobile='/SlideImage5 Mobile.webp' />
            </SwiperSlide>
        </Swiper>
    );
};