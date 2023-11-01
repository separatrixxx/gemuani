import styles from './CulturePage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';
import { AboutImageBlock } from 'components/AboutPageComponents/AboutImageBlock/AboutImageBlock';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import { useEffect, useState } from 'react';


export const CulturePage = (): JSX.Element => {
	const router = useRouter();

	const [element1, setElement1] = useState<Element | null>(null);
	const [element2, setElement2] = useState<Element | null>(null);

	useEffect(() => {
		setElement1(document.getElementById('el1'));
		setElement2(document.getElementById('el2'));
	}, []);

	const scrollIntoView = require('scroll-into-view');

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.cultureBody}>
					<div className={styles.list}>
						<Htag tag='l' className={styles.title} onClick={() => scrollIntoView(element1)}>
							{setLocale(router.locale).culture_page.title3}
						</Htag>
						<Htag tag='l' className={styles.title} onClick={() => scrollIntoView(element2)}>
							{setLocale(router.locale).culture_page.title4}
						</Htag>
					</div>
					<Htag tag='xxl' className={styles.cultureTitle}>{setLocale(router.locale).culture_page.title1}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text1}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text2}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text3}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text4}</Htag>
					<Htag tag='l'>{setLocale(router.locale).kiwi_farm_page.text5}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text6}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text7}</Htag>
					<Htag tag='xxl' className={styles.cultureTitle2}>{setLocale(router.locale).culture_page.title2}</Htag>
					<span id='el1'>
						<Htag tag='xl' className={styles.title}>{setLocale(router.locale).culture_page.title3}</Htag>
					</span>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text8}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text9}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text10}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text11}</Htag>
					<AboutImageBlock image='/CultureImg1.webp' alt='culture image 1' />
					<span id='el2'>
						<Htag tag='xl' className={styles.title}>{setLocale(router.locale).culture_page.title4}</Htag>
					</span>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text12}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text13}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text14}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text15}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text16}</Htag>
					<AboutImageBlock image='/CultureImg2.webp' alt='culture image 2' />
					<AboutImageBlock image='/CultureImg3.webp' alt='culture image 3' />
					<Htag tag='l'>{setLocale(router.locale).culture_page.text17}</Htag>
				</div>
				<Footer />
			</div>
		</>
	);
};