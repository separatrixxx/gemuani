import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface FooterLinksProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string,
	children: ReactNode,
}