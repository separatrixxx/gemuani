import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SlideProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string,
	text: string,
	image: string,
	imageMobile: string,
}