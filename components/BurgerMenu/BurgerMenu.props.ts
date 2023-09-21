import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BurgerMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	open: boolean,
	setOpen: (e: any) => void,
	setHidden: (e: any) => void,
}