import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AboutImageBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string,
	alt: string,
}