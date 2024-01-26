import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PadBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string,
}
