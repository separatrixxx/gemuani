import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface  EnergyCounterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	energyNumber: number,
}
