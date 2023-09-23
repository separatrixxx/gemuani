import styles from './Header.module.css';
import { Htag } from 'components/Htag/Htag';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './logo_icon.svg';
import { useScrollY } from 'hooks/useScrollY';
import { useResizeW } from 'hooks/useResize';
import { motion } from 'framer-motion';
import { BurgerMenu } from 'components/BurgerMenu/BurgenMenu';
import { Links } from 'interfaces/components.interface';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export const Header = (): JSX.Element => {
	const router = useRouter();

	const links: Links[] = [
		{ title: setLocale(router.locale).about.toUpperCase(), link: 'about' },
		{ title: setLocale(router.locale).blog.toUpperCase(), link: 'blog' },
		{ title: setLocale(router.locale).contacts.toUpperCase(), link: 'contacts' },
		{ title: setLocale(router.locale).shop.toUpperCase(), link: 'shop' },
	];

	const [open, setOpen] = useState<boolean>(false);
	const [lastScroll, setLastScroll] = useState<number>(0);
	const [flag, setFlag] = useState<boolean>(false);
	const [hidden, setHidden] = useState<boolean>(false);

	const scrollPosition = useScrollY();
	const width = useResizeW();

	if (scrollPosition - lastScroll >= 200 && scrollPosition > lastScroll) {
		setOpen(false);
		setFlag(true);
		setLastScroll(scrollPosition);
	} else if (scrollPosition < lastScroll) {
		setFlag(false);
		setLastScroll(scrollPosition);
	}

	const variants = {
		visible: {
			transform: 'translate(0%, 0%)',
		},
		hidden: {
			transform: 'translate(0%, -100%)',
		}
	};

	const variantsBlock = {
		visible: {
			height: 'fit-content',
			opacity: 1,
			transition: {
				duration: 0.3,
			}
		},
		hidden: {
			height: 0,
			opacity: 0,
			transition: {
				duration: 0.3,
			}
		}
	};

	if (width > 1024) {
		variantsBlock.visible.transition.duration = 0;
		variantsBlock.hidden.transition.duration = 0;
	}

	return (
		<motion.header className={styles.header}
			variants={variants}
			initial={flag ? 'hidden' : 'visible'}
			transition={{ duration: 0.3 }}
			animate={flag ? 'hidden' : 'visible'}>
			<Link href='/' className={styles.logo}><Logo /></Link>
			<motion.div className={styles.headerBlock}
				variants={variantsBlock}
				initial={open || width > 1024 ? 'visible' : 'hidden'}
				animate={open || width > 1024 ? 'visible' : 'hidden'}
				style={width > 1024 ? { gridTemplateColumns: `repeat(${links.length}, auto)` } : { gridTemplateRows: `repeat(${links.length}, auto)` }}>
				{links.map(l => (
					<Link href={"/" + l.link} key={l.link}
						style={hidden ? { display: 'none' } : { display: 'block' }}>
						<Htag tag='m' className={styles.text}>{l.title}</Htag>
					</Link>
				))}
			</motion.div>
			<BurgerMenu open={open} setOpen={setOpen} setHidden={setHidden} />
		</motion.header>
	);
};