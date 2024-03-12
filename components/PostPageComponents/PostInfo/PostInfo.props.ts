import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Links } from 'interfaces/blog.interface';


export interface PostInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string[],
    title: string,
    text: string,
    date: string,
    links: Links | undefined,
}