import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PostInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string,
    title: string,
    text: string,
    date: string,
}