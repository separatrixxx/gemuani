import { MapBlockProps } from './MapBlock.props';
import styles from './MapBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import Map from './map.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dot } from '../Dot/Dot';


export const MapBlock = ({ text, title, span }: MapBlockProps): JSX.Element => {
    const [hidden, setHidden] = useState<boolean>(true);
    const [titleDot, setTitleDot] = useState<string>('');
    const [textDot, setTextDot] = useState<string>('');
    const [topBlock, setTopBlock] = useState<string>('');
    const [leftBlock, setLeftBlock] = useState<string>('');

    const dots = [
        {
            top: '35%',
            left: '27%',
            title: 'Cool place!',
            text: 'Very-very cool place, wow!',
        },
        {
            top: '55%',
            left: '47%',
            title: 'Another cool place!',
            text: 'Some cool place, but another!',
        }
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
                        title={d.title}  setTitle={setTitleDot} text={d.text} setText={setTextDot}
                        setTopBlock={setTopBlock} setLeftBlock={setLeftBlock} />
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