import { Sort } from 'interfaces/production.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
	image: string,
    title: string,
    description: string,
    country: string,
    sort: Sort[],
    sortNum: number,
    setAllCount: (e: any) => void,
    setCart: (e: any) => void,
    setSortNum: (e: any) => void,
    isAdded: boolean,
    count: number,
    setIsAdded: (e: any) => void,
    setCount: (e: any) => void,
}