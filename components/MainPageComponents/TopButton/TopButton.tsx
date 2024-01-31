import styles from './TopButton.module.css';
import Arrow from './arrow.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollY } from 'hooks/useScrollY';
import { useResizeH } from 'hooks/useResize';
import { Htag } from 'components/Htag/Htag';
import Amazon from './amazon.svg';
import Wolt from './wolt.svg';


export const TopButton = (): JSX.Element => {
    const [element, setElement] = useState<Element | null>(null);

    useEffect(() => {
		setElement(document.getElementById('topElem'));
	}, []);

    const scrollIntoView = require('scroll-into-view');

    const [flag, setFlag] = useState<boolean>(false);
    const scrollPosition = useScrollY();
    const height = useResizeH();

    const variants = {
		visible: {
			transform: 'translate(0%, 0%)',
		},
		hidden: {
			transform: 'translate(0%, 500%)',
		}
	};

    if (scrollPosition > height && !flag) {
		setFlag(true);
	} else if (scrollPosition <= height && flag) {
		setFlag(false);
	}

	const variantsAW = {
		visible: {
			transform: 'translate(0%, -100%)',
		},
		hidden: {
			transform: 'translate(0%, 0%)',
		}
	};

	return (
		<>
			<motion.div className={styles.amazonAndWolt}
				variants={variantsAW}
				initial={flag ? 'visible' : 'hidden'}
				transition={{ duration: 0.3 }}
				animate={flag ? 'visible' : 'hidden'}>
				<a rel='noreferrer' target='_blank' href='https://www.amazon.com/GEMUANI-Freeze-Dried-Feijoa-Crisps/dp/B0C3RP22G2/ref=sr_1_2?keywords=GEMUANI&qid=1706684437&sr=8-2'>
					<Htag tag='xl' className={styles.shopLink}>
						<Amazon />
					</Htag>
				</a>
				<a rel='noreferrer' target='_blank' href='https://wolt.com/ka/geo/tbilisi/venue/wolt-market-marijani/gemuani-chiri-martsqvis-krispi-10gr-itemid-647f279fbe1e2eace68ee7e0'>
					<Htag tag='xl' className={styles.shopLink}>
						<Wolt />
					</Htag>
				</a>
			</motion.div>
			<motion.div className={styles.topButton} onClick={() => scrollIntoView(element)}
				variants={variants}
				initial={flag ? 'visible' : 'hidden'}
				transition={{ duration: 0.3 }}
				animate={flag ? 'visible' : 'hidden'}>
				<Arrow />
			</motion.div>
		</>
	);
};
