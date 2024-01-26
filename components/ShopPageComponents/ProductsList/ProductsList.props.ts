import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Production } from 'interfaces/production.interface';


export interface ProductsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	production: Production[],
	setAllCount: (e: any) => void,
    setCart: (e: any) => void,
}