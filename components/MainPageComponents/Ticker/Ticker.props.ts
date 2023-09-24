import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TickerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
}