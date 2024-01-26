import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    image: string,
    imageFruit: string,
	title: string,
    price: number,
    weight: number,
    setAllCount: (e: any) => void,
    setCart: (e: any) => void,
}
