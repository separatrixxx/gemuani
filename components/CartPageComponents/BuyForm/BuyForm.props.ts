import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Cart } from 'interfaces/cart.interface';


export interface BuyFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	cart: Cart[],
}