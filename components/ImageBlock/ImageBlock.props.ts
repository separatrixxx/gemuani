import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ImageBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text?: string,
	image: string,
	ticker: boolean,
}