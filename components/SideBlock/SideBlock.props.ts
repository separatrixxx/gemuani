import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SideBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	side: 'left' | 'right',
	text: string,
	link?: string,
	image: string,
	title: string,
}
