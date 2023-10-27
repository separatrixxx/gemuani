import styles from './ShopPage.module.css';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { setLocale } from 'helpers/locale.helper';
import { TopElem } from 'components/TopElem/TopElem';
import { TopButton } from 'components/MainPageComponents/TopButton/TopButton';
import Amazon from './amazon.svg';
import Wolt from './wolt.svg';
import Image from 'next/image';
import { Production } from 'interfaces/production.interface';
import cn from 'classnames';


export const ShopPage = (): JSX.Element => {
	const router = useRouter();

	const production1: Production = {
		image: '/Production1.webp',
		title: 'GEMUANI Natural Freeze Dried Apple Cubes Healthy Snacks | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 1.76 ounces 50 gramm',
		description: 'Dried apples are super convenient and mess-free snacks for all ages! They are easy to pack and transport – lunch boxes, pocketbooks, glove compartments, backpacks, your choice! Make sure to have them handy whether at home or on the go.Suitable For Nearly Any Kind Of Die Our dried apples are diced for your easy usage. They are ready to eat or will add a yum rich flavor to your muffins, cookies, pies, breads, compotes, yogurts, cereals, salads, poultry sauces and all your everyday recipes. Utter Freshness With Each Bite Looking to add nutrients to your daily intake? Our dried apples provide you with dietary fiber and are a rich source of many vitamins and minerals with no added sugar. They are great for the digestive system too! Perfect choice for those on a low-fat, low-cholesterol or low-sodium diet.',
		link: 'https://www.amazon.com/GEMUANI-Freeze-Dried-Apple-Cubes/dp/B0C3RNX5LS',
	};

	const production2: Production = {
		image: '/Production2.webp',
		title: 'GEMUANI 100% Natural Freeze Dried Beetroot Crisps | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 1.76 ounces 50 gramm',
		description: '',
		link: '',
	};

	const production3: Production = {
		image: '/Production3.webp',
		title: 'GEMUANI  100% Natural Freeze Dried Black Currant Crisps | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 1.76 ounces 50 gramm',
		description: 'Natural goodness, a handful of berries makes for a quick and healthy snack, adds flavour to your favourite baked treat, and adds an extra depth of taste to all manner of savoury and sweet recipes. So if you’re serious about eating right, or about cooking, a regular supply of berries in your pantry is a real must-have.. our berries, you can be sure that we’ve added nothing at all. No artificial colours, flavours or preservatives, and no added sugars. And you can be sure that we’ve sourced our berries from farmers who carefully farm, and harvest all kinds of berries - from exotic goji berries to firm favourites like raspberries and strawberries - packing them carefully to make sure they reach you in the best possible condition.',
		link: 'https://www.amazon.com/Freeze-Dried-Black-Currant-Crisps/dp/B0C3RPQG79',
	};

	const production4: Production = {
		image: '/Production4.webp',
		title: 'GEMUANI 100% Natural Freeze Dried Blueberry Crisps | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 1.76 ounces 50 gramm',
		description: '',
		link: '',
	};

	const production5: Production = {
		image: '/Production5.webp',
		title: 'GEMUANI 100% Natural Freeze Dried Cherry Crisps | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 1.76 ounces 50 gramm',
		description: 'Freeze-dried tart cherries No added sugar or preservatives Freeze-dried cherries are terrific camping or backpacking food and convenient for quick-and-easy snacking at home or on the go. Tart cherries are delicious and added to cereals, smoothies, yogurt, desserts, muffins, and trail mixes and are a good source of fiber and antioxidants, vitamins A and C. Our freeze-dried cherries contain only ONE ingredient - cherries! No sugar, preservatives, or artificial flavors are added. Grab some today and start eating right the easy way. Sold in convenient, re-sealable pouches.',
		link: 'https://www.amazon.com/GEMUANI-Freeze-Dried-Cherry-Crisps/dp/B0C3RNF9MC?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A38SWN2F5R92VQ',
	};

	const production6: Production = {
		image: '/Production6.webp',
		title: 'GEMUANI 100% Natural Freeze Dried Feijoa Crisps | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 1.76 ounces 50 gramm',
		description: '',
		link: '',
	};

	const production7: Production = {
		image: '/Production7.webp',
		title: 'GEMUANI Natural Freeze Dried Grape Crisps Healthy Snacks | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 3.53 ounces 100 gramm',
		description: 'Freeze-Dried Fruits are the perfect addition to your daily pantry or long-term food storage. Our wide selection of fruits tastes delicious straight from the can or can be rehydrated into their natural state by just adding water! Rich in nutrients, every natural fruit ingredient is 100% freeze-dried with a year shelf life and no unhealthy preservatives or additives! Check out our best-selling Fruit below!',
		link: 'https://www.amazon.com/GEMUANI-Freeze-Dried-Grape-Crisps/dp/B0C3RQ9DGY',
	};

	const production8: Production = {
		image: '/Production8.webp',
		title: 'GEMUANI 100% Natural Freeze Dried Kiwi Crisps | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 1.76 ounces 50 gramm',
		description: 'Kiwifruit are tropical fruit with fuzzy brown skin, bright and vibrant green flesh, and a tangy and tender sweet taste. We bring you the finest, premium dried kiwi slices, lightly sweetened and dried to perfection, conveniently packed in a resealable pouch for easy storage and extra freshness.Kiwi is a unique fruit having a slightly tart and tangy but sweet taste, many unsung health benefits and is the national fruit of georgia . Kiwis are a powerhouse of antioxidants and vitamin C, supporting a healthy body and strong immunity. Our dried kiwi slices retain all the healthy goodness of the fresh fruit.Kiwifruit have many tremendous health benefits. Kiwis are of the best sources for vitamin C, having even more vitamin C than oranges and lemons! Kiwis are low in calories and have lots of dietary fiber for a balanced diet and a healthy gut. Kiwis also have vitamin A, calcium, iron, magnesium and potassium.',
		link: 'https://www.amazon.com/GEMUANI-Freeze-Dried-Kiwi-Crisps/dp/B0C3RNFTM8',
	};

	const production9: Production = {
		image: '/Production9.webp',
		title: 'GEMUANI 100% Natural Freeze Dried Mandarin Crisps | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 1.06 ounces 30 gramm',
		description: '',
		link: '',
	};

	const production10: Production = {
		image: '/Production10.webp',
		title: 'GEMUANI 100% Natural Freeze Dried Peach Cubes | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 3.53 ounces 100 gramm',
		description: '',
		link: '',
	};

	const production11: Production = {
		image: '/Production11.webp',
		title: 'GEMUANI 100% Natural Freeze Dried Raspberry Crisps | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 1.06 ounces 30 gramm',
		description: '',
		link: '',
	};

	const production12: Production = {
		image: '/Production12.webp',
		title: 'GEMUANI 100% Natural Freeze Dried Strawberry Crisps | Made in Georgia | Non-GMO & Vegan | No added Sugar & Preservatives & Additives 0.71 ounces 20 gramm',
		description: '',
		link: '',
	};

	const production: Production[] = [production1, production2, production3, production4, production5, production6, production7, production8,
		production9, production10, production11, production12];

	return (
		<>
			<TopElem />
			<TopButton />
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.shopBody}>
					<Htag tag='xxl' className={styles.shopTitle}>{setLocale(router.locale).shop_page.title1}</Htag>
					<a rel='noreferrer' target='_blank' href='https://www.amazon.com/s?k=GEMUANI&ref=bl_dp_s_web_0'>
						<Htag tag='xl' className={styles.shopLink}>
							<Amazon />
						</Htag>
					</a>
					<a rel='noreferrer' target='_blank' href='https://wolt.com/geo/tbilisi/venue/wolt-market-marijani?search=%E1%83%92%E1%83%94%E1%83%9B%E1%83%A3%E1%83%90%E1%83%9C%E1%83%98'>
						<Htag tag='xl' className={styles.shopLink}>
							<Wolt />
						</Htag>
					</a>
					<Htag tag='xxl' className={cn(styles.shopTitle, styles.marginTop)}>{setLocale(router.locale).shop_page.title2}</Htag>
					<div className={styles.productionDiv}>
						{production.map(p => (
							<div key={p.title} className={styles.product}>
								<div className={styles.imageBlock}>
									<Image className={styles.img} draggable='false'
										loader={() => p.image}
										src={p.image}
										alt={p.title}
										width={1}
										height={1}
										unoptimized={true}
									/>
								</div>
								<Htag tag='m' className={styles.productTitle}>{p.title}</Htag>
								{/* <Htag tag='m'>{p.description}</Htag> */}
								<a className={styles.link} rel='noreferrer' target='_blank' href={p.link}>
									<Htag tag='l' className={styles.buy}>{setLocale(router.locale).buy}</Htag>
								</a>
							</div>
						))}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};