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
import { LearnMore } from 'components/MainPageComponents/LearnMore/LearnMore';
import { PadBlock } from 'components/MainPageComponents/PadBlock/PadBlock';


export const CulturePage = (): JSX.Element => {
	const router = useRouter();

	const [element1, setElement1] = useState<Element | null>(null);
	const [element2, setElement2] = useState<Element | null>(null);
	const [element3, setElement3] = useState<Element | null>(null);
	const [element4, setElement4] = useState<Element | null>(null);

	useEffect(() => {
		setElement1(document.getElementById('el1'));
		setElement2(document.getElementById('el2'));
		setElement3(document.getElementById('el3'));
		setElement4(document.getElementById('el4'));
	}, []);

	const scrollIntoView = require('scroll-into-view');

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<PadBlock title={setLocale(router.locale).titles.culture_history_title.toUpperCase()} />
				<div className={styles.cultureBody}>
					<div className={styles.list}>
						<Htag tag='m' className={styles.title} onClick={() => scrollIntoView(element1)}>
							{setLocale(router.locale).culture_page.title6}
						</Htag>
						<Htag tag='m' className={styles.title} onClick={() => scrollIntoView(element2)}>
							{setLocale(router.locale).culture_page.title5}
						</Htag>
						<Htag tag='m' className={styles.title} onClick={() => scrollIntoView(element3)}>
							{setLocale(router.locale).culture_page.title4}
						</Htag>
						<Htag tag='m' className={styles.title} onClick={() => scrollIntoView(element4)}>
							{setLocale(router.locale).culture_page.title5}
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
						<Htag tag='xl' className={styles.title}>{setLocale(router.locale).culture_page.title6}</Htag>
					</span>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text20}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text21}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text22}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text23}</Htag>
					<AboutImageBlock image='/CultureImage5.webp' alt='culture image 5' />
					<LearnMore link='http://www.opera.ge/eng/opera' marginTop='10px' />
					<span id='el2'>
						<Htag tag='xl' className={styles.title}>{setLocale(router.locale).culture_page.title5}</Htag>
					</span>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text18}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text19}</Htag>
					<AboutImageBlock image='/CultureImage4.webp' alt='culture image 4' />
					<LearnMore link='https://www.tafu.edu.ge/wm.php?page=home_en' marginTop='10px' />
					<span id='el3'>
						<Htag tag='xl' className={styles.title}>{setLocale(router.locale).culture_page.title4}</Htag>
					</span>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text12}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text13}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text14}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text15}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text16}</Htag>
					<AboutImageBlock image='/CultureImg2.webp' alt='culture image 2' />
					<AboutImageBlock image='/CultureImg3.webp' alt='culture image 3' />
					<LearnMore link='https://gabriadze.com' marginTop='10px' />
					<span id='el4'>
						<Htag tag='xl' className={styles.title}>{setLocale(router.locale).culture_page.title3}</Htag>
					</span>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text8}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text9}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text10}</Htag>
					<Htag tag='l'>{setLocale(router.locale).culture_page.text11}</Htag>
					<AboutImageBlock image='/CultureImg1.webp' alt='culture image 1' />
					<LearnMore link='https://sukhishvili.net' marginTop='10px' />
					<Htag tag='l'>{setLocale(router.locale).culture_page.text17}</Htag>
				</div>
				<Footer />
			</div>
		</>
	);
};