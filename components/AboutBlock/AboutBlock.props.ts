import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AboutBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
	link: string,
}