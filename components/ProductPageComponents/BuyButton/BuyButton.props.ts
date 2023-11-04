import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BuyButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	isAdded: boolean,
    setIsAdded: (e: any) => void,
}
