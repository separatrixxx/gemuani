import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CounterDivProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    setIsAdded?: (e: any) => void,
    id: string,
    count: number,
    setCount: (e: any) => void,
    setAllCount: (e: any) => void,
    price?: number,
    totalPrice?: number,
    setTotalPrice?: (e: any) => void,
}
