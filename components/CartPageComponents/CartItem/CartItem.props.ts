import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    image: string,
	title: string,
    price: number,
    setAllCount: (e: any) => void,
    totalPrice: number,
    setTotalPrice: (e: any) => void,
	setCart: (e: any) => void,
}