import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BuyButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	isAdded: boolean,
    setIsAdded: (e: any) => void,
    id: string,
    image: string,
    title: string,
    count: number,
    price: number,
    setCount: (e: any) => void,
    setAllCount: (e: any) => void,
    setCart: (e: any) => void,
}
