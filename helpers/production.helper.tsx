import { Production } from "interfaces/production.interface";
import { setLocale } from "./locale.helper";


export function setProduction(locale: string | undefined): Production[] {
	const production1: Production = {
        id: '0',
        image: '/Production1.webp',
        image_1: '/Production1_1.webp',
        imageFruit: '/apple.webp',
        title: setLocale(locale).products.title1,
        titleShort: 'apple',
        description: setLocale(locale).products.description1,
        link: '',
        country: setLocale(locale).georgia,
        price: 3.4,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product1.title1,
                titleFull: setLocale(locale).products.product1.titleFull1,
                weight: 10,
                price: 3.4,
            },
            {
                id: 1,
                title: setLocale(locale).products.product1.title2,
                titleFull: setLocale(locale).products.product1.titleFull2,
                weight: 35,
                price: 12.5,
            },
            {
                id: 2,
                title: setLocale(locale).products.product1.title3,
                titleFull: setLocale(locale).products.product1.titleFull3,
                weight: 100,
                price: 29.1,
            },
            {
                id: 3,
                title: setLocale(locale).products.product1.title4,
                titleFull: setLocale(locale).products.product1.titleFull4,
                weight: 40,
                price: 13.4,
            },
        ],
    };

    const production2: Production = {
        id: '1',
        image: '/Production3.webp',
        image_1: '/Production3_1.webp',
        imageFruit: '/beetroot.webp',
        title: setLocale(locale).products.title3,
        titleShort: 'beetroot',
        description: setLocale(locale).products.description3,
        link: '',
        country: setLocale(locale).georgia,
        price: 4.9,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product3.title1,
                titleFull: setLocale(locale).products.product3.titleFull1,
                weight: 10,
                price: 4.9,
            },
            {
                id: 1,
                title: setLocale(locale).products.product3.title1,
                titleFull: setLocale(locale).products.product3.titleFull1,
                weight: 50,
                price: 21.86,
            },
            {
                id: 2,
                title: setLocale(locale).products.product3.title2,
                titleFull: setLocale(locale).products.product3.titleFull2,
                weight: 70,
                price: 27.3,
            },
        ],
    };

    const production3: Production = {
        id: '2',
        image: '/Production4.webp',
        image_1: '/Production4_1.webp',
        imageFruit: '/black_currant.webp',
        title: setLocale(locale).products.title4,
        titleShort: 'black currant',
        description: setLocale(locale).products.description4,
        link: '',
        country: setLocale(locale).georgia,
        price: 21.15,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product4.title1,
                titleFull: setLocale(locale).products.product4.titleFull1,
                weight: 50,
                price: 21.15,
            },
        ],
    };

    const production4: Production = {
        id: '3',
        image: '/Production5.webp',
        image_1: '/Production5_1.webp',
        imageFruit: '/blueberry.webp',
        title: setLocale(locale).products.title5,
        titleShort: 'blueberry',
        description: setLocale(locale).products.description5,
        link: '',
        country: setLocale(locale).georgia,
        price: 6,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product5.title1,
                titleFull: setLocale(locale).products.product5.titleFull1,
                weight: 10,
                price: 6,
            },
            {
                id: 1,
                title: setLocale(locale).products.product5.title1,
                titleFull: setLocale(locale).products.product5.titleFull1,
                weight: 50,
                price: 28.55,
            },
            {
                id: 2,
                title: setLocale(locale).products.product5.title1,
                titleFull: setLocale(locale).products.product5.titleFull1,
                weight: 80,
                price: 47.67,
            },
            {
                id: 3,
                title: setLocale(locale).products.product5.title2,
                titleFull: setLocale(locale).products.product5.titleFull2,
                weight: 60,
                price: 44.9,
            },
            {
                id: 4,
                title: setLocale(locale).products.product5.title3,
                titleFull: setLocale(locale).products.product5.titleFull3,
                weight: 150,
                price: 82.5,
            },
        ],
    };

    const production5: Production = {
        id: '4',
        image: '/Production6.webp',
        image_1: '/Production6.webp',
        imageFruit: '/cherry.webp',
        title: setLocale(locale).products.title6,
        titleShort: 'cherry',
        description: setLocale(locale).products.description6,
        link: '',
        country: setLocale(locale).georgia,
        price: 5.7,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product6.title1,
                titleFull: setLocale(locale).products.product6.titleFull1,
                weight: 10,
                price: 5.7,
            },
            {
                id: 1,
                title: setLocale(locale).products.product6.title1,
                titleFull: setLocale(locale).products.product6.titleFull1,
                weight: 50,
                price: 25.05,
            },
        ],
    };

    const production6: Production = {
        id: '5',
        image: '/Production7.webp',
        image_1: '/Production7_1.webp',
        imageFruit: '/feijoa.webp',
        title: setLocale(locale).products.title7,
        titleShort: 'feijoa',
        description: setLocale(locale).products.description7,
        link: '',
        country: setLocale(locale).georgia,
        price: 4.7,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product7.title1,
                titleFull: setLocale(locale).products.product7.titleFull1,
                weight: 10,
                price: 4.7,
            },
            {
                id: 1,
                title: setLocale(locale).products.product7.title1,
                titleFull: setLocale(locale).products.product7.titleFull1,
                weight: 50,
                price: 24,
            },
        ],
    };

    const production7: Production = {
        id: '6',
        image: '/Production8.webp',
        image_1: '/Production8_1.webp',
        imageFruit: '/grape.webp',
        title: setLocale(locale).products.title8,
        titleShort: 'grape',
        description: setLocale(locale).products.description8,
        link: '',
        country: setLocale(locale).georgia,
        price: 4.4,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product8.title1,
                titleFull: setLocale(locale).products.product8.titleFull1,
                weight: 10,
                price: 4.4,
            },
            {
                id: 1,
                title: setLocale(locale).products.product8.title1,
                titleFull: setLocale(locale).products.product8.titleFull1,
                weight: 100,
                price: 39.5,
            },
        ],
    };

    const production8: Production = {
        id: '7',
        image: '/Production9.webp',
        image_1: '/Production9_1.webp',
        imageFruit: '/kiwi.webp',
        title: setLocale(locale).products.title9,
        titleShort: 'kiwi',
        description: setLocale(locale).products.description9,
        link: '',
        country: setLocale(locale).georgia,
        price: 4.2,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product9.title1,
                titleFull: setLocale(locale).products.product9.titleFull1,
                weight: 10,
                price: 4.2,
            },
            {
                id: 1,
                title: setLocale(locale).products.product9.title1,
                titleFull: setLocale(locale).products.product9.titleFull1,
                weight: 50,
                price: 36.6,
            },
            {
                id: 2,
                title: setLocale(locale).products.product9.title2,
                titleFull: setLocale(locale).products.product9.titleFull2,
                weight: 150,
                price: 55,
            },
            {
                id: 3,
                title: setLocale(locale).products.product9.title3,
                titleFull: setLocale(locale).products.product9.titleFull3,
                weight: 100,
                price: 37.8,
            },
        ],
    };

    const production9: Production = {
        id: '8',
        image: '/Production10.webp',
        image_1: '/Production10_1.webp',
        imageFruit: '/mandarin.webp',
        title: setLocale(locale).products.title10,
        titleShort: 'mandarin',
        description: setLocale(locale).products.description10,
        link: '',
        country: setLocale(locale).georgia,
        price: 6,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product10.title1,
                titleFull: setLocale(locale).products.product10.titleFull1,
                weight: 10,
                price: 6,
            },
            {
                id: 1,
                title: setLocale(locale).products.product10.title1,
                titleFull: setLocale(locale).products.product10.titleFull1,
                weight: 30,
                price: 15.75,
            },
            {
                id: 2,
                title: setLocale(locale).products.product10.title1,
                titleFull: setLocale(locale).products.product10.titleFull1,
                weight: 50,
                price: 24.77,
            },
            {
                id: 3,
                title: setLocale(locale).products.product10.title2,
                titleFull: setLocale(locale).products.product10.titleFull2,
                weight: 30,
                price: 15.2,
            },
        ],
    };

    const production10: Production = {
        id: '9',
        image: '/Production13.webp',
        image_1: '/Production13_1.webp',
        imageFruit: '/peach.webp',
        title: setLocale(locale).products.title13,
        titleShort: 'peach',
        description: setLocale(locale).products.description13,
        link: '',
        country: setLocale(locale).georgia,
        price: 7.5,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product13.title1,
                titleFull: setLocale(locale).products.product13.titleFull1,
                weight: 10,
                price: 7.5,
            },
            {
                id: 1,
                title: setLocale(locale).products.product13.title1,
                titleFull: setLocale(locale).products.product13.titleFull1,
                weight: 40,
                price: 15.75,
            },
            {
                id: 2,
                title: setLocale(locale).products.product13.title2,
                titleFull: setLocale(locale).products.product13.titleFull2,
                weight: 25,
                price: 19.7,
            },
            {
                id: 3,
                title: setLocale(locale).products.product13.title3,
                titleFull: setLocale(locale).products.product13.titleFull3,
                weight: 200,
                price: 100.9,
            },
            {
                id: 4,
                title: setLocale(locale).products.product13.title4,
                titleFull: setLocale(locale).products.product13.titleFull4,
                weight: 100,
                price: 62.7,
            },
        ],
    };

    const production11: Production = {
        id: '10',
        image: '/Production14.webp',
        image_1: '/Production14_1.webp',
        imageFruit: '/raspberry.webp',
        title: setLocale(locale).products.title14,
        titleShort: 'raspberry',
        description: setLocale(locale).products.description14,
        link: '',
        country: setLocale(locale).georgia,
        price: 10.7,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product14.title1,
                titleFull: setLocale(locale).products.product14.titleFull1,
                weight: 10,
                price: 10.7,
            },
            {
                id: 1,
                title: setLocale(locale).products.product14.title1,
                titleFull: setLocale(locale).products.product14.titleFull1,
                weight: 30,
                price: 28.2,
            },
            {
                id: 2,
                title: setLocale(locale).products.product14.title2,
                titleFull: setLocale(locale).products.product14.titleFull2,
                weight: 30,
                price: 30.8,
            },
            {
                id: 3,
                title: setLocale(locale).products.product14.title3,
                titleFull: setLocale(locale).products.product14.titleFull3,
                weight: 150,
                price: 110.1,
            },
        ],
    };

    const production12: Production = {
        id: '11',
        image: '/Production15.webp',
        image_1: '/Production15_1.webp',
        imageFruit: '/strawberry.webp',
        title: setLocale(locale).products.title15,
        titleShort: 'strawberry',
        description: setLocale(locale).products.description15,
        link: '',
        country: setLocale(locale).georgia,
        price: 5.6,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product15.title1,
                titleFull: setLocale(locale).products.product15.titleFull1,
                weight: 10,
                price: 5.6,
            },
            {
                id: 1,
                title: setLocale(locale).products.product15.title1,
                titleFull: setLocale(locale).products.product15.titleFull1,
                weight: 20,
                price: 9.9,
            },
            {
                id: 2,
                title: setLocale(locale).products.product15.title1,
                titleFull: setLocale(locale).products.product15.titleFull1,
                weight: 50,
                price: 20.63,
            },
            {
                id: 3,
                title: setLocale(locale).products.product15.title2,
                titleFull: setLocale(locale).products.product15.titleFull2,
                weight: 30,
                price: 20.7,
            },
            {
                id: 4,
                title: setLocale(locale).products.product15.title3,
                titleFull: setLocale(locale).products.product15.titleFull3,
                weight: 100,
                price: 41.3,
            },
            {
                id: 5,
                title: setLocale(locale).products.product15.title4,
                titleFull: setLocale(locale).products.product15.titleFull4,
                weight: 50,
                price: 21.8,
            },
            {
                id: 6,
                title: setLocale(locale).products.product15.title4,
                titleFull: setLocale(locale).products.product15.titleFull4,
                weight: 100,
                price: 41.3,
            },
        ],
    };

    const production13: Production = {
        id: '12',
        image: '/Production2.webp',
        image_1: '/Production2_1.webp',
        imageFruit: '/banana.webp',
        title: setLocale(locale).products.title2,
        titleShort: 'banana',
        description: setLocale(locale).products.description2,
        link: '',
        country: setLocale(locale).georgia,
        price: 3.8,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product2.title1,
                titleFull: setLocale(locale).products.product2.titleFull1,
                weight: 10,
                price: 3.8,
            },
            {
                id: 1,
                title: setLocale(locale).products.product2.title1,
                titleFull: setLocale(locale).products.product2.titleFull1,
                weight: 70,
                price: 20.88,
            },
            {
                id: 2,
                title: setLocale(locale).products.product2.title1,
                titleFull: setLocale(locale).products.product2.titleFull1,
                weight: 150,
                price: 41.27,
            },
        ],
    };

    const production14: Production = {
        id: '13',
        image: '/Production11.webp',
        image_1: '/Production11_1.webp',
        imageFruit: '/melon.webp',
        title: setLocale(locale).products.title11,
        titleShort: 'melon',
        description: setLocale(locale).products.description11,
        link: '',
        country: setLocale(locale).georgia,
        price: 6,
        sort: [
            {
                id: 0,
                title: setLocale(locale).products.product11.title1,
                titleFull: setLocale(locale).products.product11.titleFull1,
                weight: 10,
                price: 6,
            },
            {
                id: 1,
                title: setLocale(locale).products.product11.title1,
                titleFull: setLocale(locale).products.product11.titleFull1,
                weight: 40,
                price: 31.5,
            },
            {
                id: 2,
                title: setLocale(locale).products.product11.title2,
                titleFull: setLocale(locale).products.product11.titleFull2,
                weight: 25,
                price: 17.7,
            },
        ],
    };

    return [production1, production2, production3, production4, production5, production6, production7, 
        production8, production9, production10, production11, production12, production13, production14];
}
