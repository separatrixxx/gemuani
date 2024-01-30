import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface DuoBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
	side: 'left' | 'right',
	children: ReactNode,
}