import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	type: 'name' | 'email' | 'message' | 'phone'
	text: string,
	value: string,
	error: boolean,
	onChange: (e: any) => void,
}