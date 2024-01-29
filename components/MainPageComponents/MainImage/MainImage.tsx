import styles from './MainImage.module.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import cn from 'classnames';


export const MainImage = (): JSX.Element => {
	const router = useRouter();
	
	// const image = '/MainImage.gif';

	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isVisible2, setIsVisible2] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(false);
		setIsVisible2(false);

        const timerId = setTimeout(() => {
			setIsVisible(true);
		}, 1500);

		const timerId2 = setTimeout(() => {
			setIsVisible2(true);
		}, 2500);

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }

			if (timerId2) {
                clearInterval(timerId2);
            }
        };
        
	}, []);

	const variants = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		}
	};

	return (
		<div id='mainImage' className={styles.imageBlock}>
			<video autoPlay={true} loop muted className={cn(styles.mainImage, {
				[styles.darkness]: isVisible,
			})}>
				<source src="MainImage.webm" type="video/webm" />
				<source src="MainImage.mp4" type="video/mp4" />
			</video>
			<div className={styles.titleDiv}>
				<motion.h1 className={cn(styles.title, {
					[styles.colored]: isVisible2,
				})}
					variants={variants}
					initial={isVisible ? 'visible' : 'hidden'}
					transition={{ duration: 0.5 }}
					animate={isVisible ? 'visible' : 'hidden'}>
					{'GEMUANI'}
				</motion.h1>
				<motion.h1 className={cn(styles.title, styles.title2)}
					variants={variants}
					initial={isVisible2 ? 'visible' : 'hidden'}
					transition={{ duration: 0.5 }}
					animate={isVisible2 ? 'visible' : 'hidden'}>
					{setLocale(router.locale).slogan}
				</motion.h1>
			</div>
		</div>
	);
};