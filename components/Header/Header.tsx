import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { Htag } from 'components/Htag/Htag';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './logo_icon.svg';
import Arrow from './arrow.svg';
import { useScrollY } from 'hooks/useScrollY';
import { useResizeW } from 'hooks/useResize';
import { motion } from 'framer-motion';
import { Links } from 'interfaces/components.interface';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { BurgerMenu } from 'components/MainPageComponents/BurgerMenu/BurgenMenu';
import { HeaderLocaleChange } from 'components/HeaderLocaleChange/HeaderLocaleChange';
import { HeaderCart } from 'components/HeaderCart/HeaderCart';
import { getCartAll } from 'helpers/cart.helper';
import { Cart } from 'interfaces/cart.interface';
import cn from 'classnames';


export const Header = ({ count }: HeaderProps): JSX.Element => {
	const router = useRouter();

	const [hiddenLinks, setHiddenLinks] = useState<boolean>(true);

	useEffect(() => {
		setCart(getCartAll(router.locale));
	}, [router.locale]);

	const links: Links[] = [
		{ title: setLocale(router.locale).shop.toUpperCase(), link: 'shop' },
		{ title: setLocale(router.locale).about.toUpperCase(), more: true },
		{ title: setLocale(router.locale).blog.toUpperCase(), link: 'blog' },
		{ title: setLocale(router.locale).contacts.toUpperCase(), link: 'contacts' },
		{ title: setLocale(router.locale).partners.toUpperCase(), link: 'partners' },
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
			display: 'grid',
			transition: {
				duration: 0.3,
			}
		},
		hidden: {
			height: 0,
			opacity: 0,
			display: 'none',
			transition: {
				duration: 0.3,
			}
		}
	};

	const variantsHiddenArrow = {
		active: {
			transform: 'rotate(180deg)',
		},
		passive: {
			transform: 'rotate(0deg)',
		}
	};

	const variantsHiddenDiv = {
		active: {
			display: 'none',
		},
		passive: {
			display: 'grid',
		}
	};

	if (width > 1024) {
		variantsBlock.visible.transition.duration = 0;
		variantsBlock.hidden.transition.duration = 0;
	}

	const [cart, setCart] = useState<Cart[]>([]);

	return (
		<motion.header className={styles.header}
			variants={variants}
			initial={flag ? 'hidden' : 'visible'}
			transition={{ duration: 0.3 }}
			animate={flag ? 'hidden' : 'visible'}>
			<Link href='/' className={styles.logo} aria-label="Go Home">
				<Logo />
			</Link>
			<motion.div className={styles.headerBlock}
				variants={variantsBlock}
				initial={open || width > 1024 ? 'visible' : 'hidden'}
				animate={open || width > 1024 ? 'visible' : 'hidden'}
				style={width > 1024 ? { gridTemplateColumns: `repeat(${links.length}, auto)` } : { gridTemplateRows: `repeat(${links.length}, auto)` }}>
				{links.map(l => (
					!l.more ?
						<Link href={"/" + l.link} key={l.link} style={hidden ? { display: 'none' } : { display: 'block' }}>
							<Htag tag='s' className={cn(styles.text, {
								[styles.shopLink]: l.link === 'shop',
							})}>
								{l.title}
							</Htag>
						</Link>
						:
						<div key={'u' + l.link} className={styles.moreDiv}
							onMouseOverCapture={() => {
								if (width >= 1024) {
									setHiddenLinks(false);
								}
							}} onMouseOutCapture={() => {
								if (width >= 1024) {
									setHiddenLinks(true);
								}
							}}>
							<Htag tag='s' className={cn(styles.text, styles.textArrow)}
								style={hidden ? { display: 'none' } : { display: 'block' }}>{l.title}
								<motion.span className={styles.arrow}
									variants={variantsHiddenArrow}
									initial={!hiddenLinks ? 'active' : 'passive'}
									transition={{ duration: 0.3 }}
									animate={!hiddenLinks ? 'active' : 'passive'}>
									<Arrow />
								</motion.span>
								<motion.div className={styles.hiddenLinks}
									variants={variantsHiddenDiv}
									initial={hiddenLinks ? 'active' : 'passive'}
									transition={{ duration: 0.3 }}
									animate={hiddenLinks ? 'active' : 'passive'}>
									<Link href='/about'>
										<Htag tag='m' className={styles.hiddenText}>
											{setLocale(router.locale).titles.about_title + ' Gemuani'}
										</Htag>
									</Link>
									<Link href='/kiwi_farm'>
										<Htag tag='m' className={styles.hiddenText}>
											{setLocale(router.locale).titles.kiwi_farm_title}
										</Htag>
									</Link>
									<Link href='/culture'>
										<Htag tag='m' className={styles.hiddenText}>
											{setLocale(router.locale).titles.culture_history_title}
										</Htag>
									</Link>
								</motion.div>
							</Htag>
						</div>
				))}
			</motion.div>
			<div className={styles.openOrLang}>
				<HeaderCart count={count !== undefined ? count : cart.length} />
				<HeaderLocaleChange />
				<BurgerMenu open={open} setOpen={setOpen} setHidden={setHidden} />
			</div>
		</motion.header>
	);
};