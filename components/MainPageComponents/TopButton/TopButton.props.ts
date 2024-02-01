import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TopButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isShop?: boolean,
}