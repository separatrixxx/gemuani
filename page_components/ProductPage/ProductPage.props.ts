import { Sort } from "interfaces/production.interface";


export interface ProductPageProps {
	id: string,
	image: string,
	title: string,
	description: string,
	country: string,
	sort: Sort[],
}