import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MapBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
	title: string,
	span?: string,
}