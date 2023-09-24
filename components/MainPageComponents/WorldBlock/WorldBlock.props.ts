import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface WorldBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
	title: string,
}