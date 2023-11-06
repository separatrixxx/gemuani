import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Cart } from 'interfaces/cart.interface';


export interface CartListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	cart: Cart[],
	setAllCount: (e: any) => void,
}