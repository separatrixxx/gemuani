import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SideBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	side: 'left' | 'right',
	text: string,
	link?: string,
	image?: string,
	video?: string,
	title: string,
	children?: ReactNode,
}
