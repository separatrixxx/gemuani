import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    image: string,
	title: string,
    setAllCount: (e: any) => void,
}