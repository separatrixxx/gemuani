import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ShopBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
	link: string,
	image: string,
	title: string,
}