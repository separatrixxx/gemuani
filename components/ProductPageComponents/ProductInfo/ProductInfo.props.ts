import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
	image: string,
    title: string,
    titleFull: string,
    description: string,
}