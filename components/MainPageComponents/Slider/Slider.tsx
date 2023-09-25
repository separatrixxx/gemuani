import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Htag } from 'components/Htag/Htag';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Slider = (): JSX.Element => {
	return (
        <Swiper className={styles.slider}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <Htag tag='xl' className={styles.text}>Slide 1</Htag>
            </SwiperSlide>
            <SwiperSlide>
                <Htag tag='xl' className={styles.text}>Slide 2</Htag>
            </SwiperSlide>
            <SwiperSlide>
                <Htag tag='xl' className={styles.text}>Slide 3</Htag>
            </SwiperSlide>
            <SwiperSlide>
                <Htag tag='xl' className={styles.text}>Slide 4</Htag>
            </SwiperSlide>
        </Swiper>
      );
};