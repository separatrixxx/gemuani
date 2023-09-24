import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BlogBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
	link: string,
}