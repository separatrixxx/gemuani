import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LearnMoreProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	link: string,
	marginTop?: string,
	colorWhite?: boolean,
}