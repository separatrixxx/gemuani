import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TextBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
	link: string,
	title: string,
}