import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    image: string,
	title: string,
    price: number,
}