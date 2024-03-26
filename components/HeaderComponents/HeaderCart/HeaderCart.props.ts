import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderCartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	count: number,
}
