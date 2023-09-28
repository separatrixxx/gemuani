import styles from './TopButton.module.css';
import Arrow from './arrow.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollY } from 'hooks/useScrollY';
import { useResizeH } from 'hooks/useResize';


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

	return (
		<motion.div className={styles.topButton} onClick={() => scrollIntoView(element)}
            variants={variants}
			initial={flag ? 'visible' : 'hidden'}
			transition={{ duration: 0.3 }}
			animate={flag ? 'visible' : 'hidden'}>
            <Arrow />
        </motion.div>
	);
};
