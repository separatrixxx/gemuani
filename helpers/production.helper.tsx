import { Production } from "interfaces/production.interface";
import { setLocale } from "./locale.helper";


export function setProduction(locale: string | undefined): Production[] {
	const production1: Production = {
        id: '0',
        image: '/Production1.webp',
        title: setLocale(locale).products.title1,
        titleShort: 'apple_cubes',
        titleFull: setLocale(locale).products.title1Full,
        description: setLocale(locale).products.description1,
        link: 'https://www.amazon.com/GEMUANI-Freeze-Dried-Apple-Cubes/dp/B0C3RNX5LS',
        price: 14.5,
        country: setLocale(locale).georgia,
        weight: 50,
    };
    
    const production2: Production = {
        id: '1',
        image: '/Production2.webp',
        title: setLocale(locale).products.title2,
        titleShort: 'beetroot_crisps',
        titleFull: setLocale(locale).products.title2Full,
        description: setLocale(locale).products.description2,
        link: '',
        price: 22.4,
        country: setLocale(locale).georgia,
        weight: 50,
    };
    
    const production3: Production = {
        id: '2',
        image: '/Production3.webp',
        title: setLocale(locale).products.title3,
        titleShort: 'black_currant_crisps',
        titleFull: setLocale(locale).products.title3Full,
        description: setLocale(locale).products.description3,
        link: 'https://www.amazon.com/Freeze-Dried-Black-Currant-Crisps/dp/B0C3RPQG79',
        price: 22.8,
        country: setLocale(locale).georgia,
        weight: 50,
    };
    
    const production4: Production = {
        id: '3',
        image: '/Production4.webp',
        title: setLocale(locale).products.title4,
        titleShort: 'blueberry_crisps',
        titleFull: setLocale(locale).products.title4Full,
        description: setLocale(locale).products.description4,
        link: '',
        price: 38.6,
        country: setLocale(locale).georgia,
        weight: 50,
    };
    
    const production5: Production = {
        id: '4',
        image: '/Production5.webp',
        title: setLocale(locale).products.title5,
        titleShort: 'cherry_crisps',
        titleFull: setLocale(locale).products.title5Full,
        description: setLocale(locale).products.description5,
        link: 'https://www.amazon.com/GEMUANI-Freeze-Dried-Cherry-Crisps/dp/B0C3RNF9MC?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A38SWN2F5R92VQ',
        price: 25.2,
        country: setLocale(locale).georgia,
        weight: 50,
    };
    
    const production6: Production = {
        id: '5',
        image: '/Production6.webp',
        title: setLocale(locale).products.title6,
        titleShort: 'feijoa_crisps',
        titleFull: setLocale(locale).products.title6Full,
        description: setLocale(locale).products.description6,
        link: '',
        price: 24,
        country: setLocale(locale).georgia,
        weight: 20,
    };
    
    const production7: Production = {
        id: '6',
        image: '/Production7.webp',
        title: setLocale(locale).products.title7,
        titleShort: 'grape_crisps',
        titleFull: setLocale(locale).products.title7Full,
        description: setLocale(locale).products.description7,
        link: 'https://www.amazon.com/GEMUANI-Freeze-Dried-Grape-Crisps/dp/B0C3RQ9DGY',
        price: 39.2,
        country: setLocale(locale).georgia,
        weight: 100,
    };
    
    const production8: Production = {
        id: '7',
        image: '/Production8.webp',
        title: setLocale(locale).products.title8,
        titleShort: 'kiwi_crisps',
        titleFull: setLocale(locale).products.title8Full,
        description: setLocale(locale).products.description8,
        link: 'https://www.amazon.com/GEMUANI-Freeze-Dried-Kiwi-Crisps/dp/B0C3RNFTM8',
        price: 36.7,
        country: setLocale(locale).georgia,
        weight: 50,
    };
    
    const production9: Production = {
        id: '8',
        image: '/Production9.webp',
        title: setLocale(locale).products.title9,
        titleShort: 'mandarin_crisps',
        titleFull: setLocale(locale).products.title9Full,
        description: setLocale(locale).products.description9,
        link: '',
        price: 15.8,
        country: setLocale(locale).georgia,
        weight: 30,
    };
    
    const production10: Production = {
        id: '9',
        image: '/Production10.webp',
        title: setLocale(locale).products.title10,
        titleShort: 'peach_cubes',
        titleFull: setLocale(locale).products.title10Full,
        description: setLocale(locale).products.description10,
        link: '',
        price: 62.7,
        country: setLocale(locale).georgia,
        weight: 100,
    };
    
    const production11: Production = {
        id: '10',
        image: '/Production11.webp',
        title: setLocale(locale).products.title11,
        titleShort: 'raspberry_crisps',
        titleFull: setLocale(locale).products.title11Full,
        description: setLocale(locale).products.description11,
        link: '',
        price: 28.5,
        country: setLocale(locale).georgia,
        weight: 30,
    };
    
    const production12: Production = {
        id: '11',
        image: '/Production12.webp',
        title: setLocale(locale).products.title12,
        titleShort: 'strawberry_crisps',
        titleFull: setLocale(locale).products.title12Full,
        description: setLocale(locale).products.description12,
        link: '',
        price: 10,
        country: setLocale(locale).georgia,
        weight: 20,
    };
    
    return [production1, production2, production3, production4, production5, production6, production7, production8,
        production9, production10, production11, production12];
}
