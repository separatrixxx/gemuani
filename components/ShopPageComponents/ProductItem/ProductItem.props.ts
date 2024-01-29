import { Sort } from 'interfaces/production.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    image: string,
    image_1: string,
    imageFruit: string,
	title: string,
    price: number,
    sort: Sort[],
    setAllCount: (e: any) => void,
    setCart: (e: any) => void,
}
