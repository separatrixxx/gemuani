import { MapBlockProps } from './MapBlock.props';
import styles from './MapBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import Map from './map.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dot } from '../Dot/Dot';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';


export const MapBlock = ({ text, title, span }: MapBlockProps): JSX.Element => {
    const router = useRouter();

    const [hidden, setHidden] = useState<boolean>(true);
    const [titleDot, setTitleDot] = useState<string>('');
    const [textDot, setTextDot] = useState<string>('');
    const [topBlock, setTopBlock] = useState<string>('');
    const [leftBlock, setLeftBlock] = useState<string>('');

    const dots = [
        {
            top: '73%',
            left: '71.5%',
            title: setLocale(router.locale).map.title1,
            text: setLocale(router.locale).map.text1,
            link: "https://www.google.com/maps/place/+89+Irakli+Abashidze+Street,+T'bilisi,+%D0%93%D1%80%D1%83%D0%B7%D0%B8%D1%8F/@41.709055,44.7531785,19z/data=!3m1!4b1!4m5!3m4!1s0x40447337db44d409:0x3c789f7363075fc7!8m2!3d41.709054!4d44.7538222?entry=ttu",
        },
        {
            top: '45.5%',
            left: '31.5%',
            title: setLocale(router.locale).map.title2,
            text: setLocale(router.locale).map.text2,
            link: "https://www.google.com/maps/place/HWMH%2BP7,+Zeda+Etseri,+%D0%93%D1%80%D1%83%D0%B7%D0%B8%D1%8F/@42.5712285,41.9330045,9.8z/data=!4m5!3m4!1s0x405c2209778d52e1:0xc799092b0bcd9517!8m2!3d42.5843125!4d41.9281875?entry=ttu",
        },
    ];

    const variants = {
        visible: {
            display: 'grid',
        },
        hidden: {
            display: 'none',
        }
    };

    return (
        <div className={styles.textBlock}>
            <Htag tag='xxl' className={styles.textBlockTitle}>{title}</Htag>
            <Htag tag='xl' className={styles.text}>
                {span ? <span className={styles.span}>{span + ' '}</span> : <></>}{text}</Htag>
            <div className={styles.map}>
                {dots.map(d => (
                    <Dot key={d.title} top={d.top} left={d.left} hidden={hidden} setHidden={setHidden}
                        title={d.title} setTitle={setTitleDot} text={d.text} setText={setTextDot}
                        link={d.link} setTopBlock={setTopBlock} setLeftBlock={setLeftBlock} />
                ))}
                <motion.div className={styles.dotText} style={{ top: topBlock, left: leftBlock }}
                    variants={variants}
                    initial={hidden ? 'hidden' : 'visible'}
                    transition={{ duration: 0.3 }}
                    animate={hidden ? 'hidden' : 'visible'}>
                    <Htag tag='m'>{titleDot}</Htag>
                    <Htag tag='s'>{textDot}</Htag>
                </motion.div>
                <Map />
            </div>
            <span className={styles.divider} />
        </div>
    );
};