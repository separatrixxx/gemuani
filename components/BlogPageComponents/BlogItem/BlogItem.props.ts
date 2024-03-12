import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BlogItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    image: string[],
	title: string,
    text: string,
    date: string,
}
