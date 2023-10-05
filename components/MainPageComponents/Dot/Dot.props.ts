import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DotProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	top: string,
    left: string,
    hidden: boolean,
    setHidden: (e: any) => void,
    title: string,
    setTitle: (e: any) => void,
    text: string,
    setText: (e: any) => void,
    setTopBlock: (e: any) => void,
    setLeftBlock: (e: any) => void,
}
