export interface Production {
	id: string,
	image: string,
	image_1: string,
	imageFruit: string,
	title: string,
	titleShort: string,
	description: string,
	link: string,
	country: string,
	price: number,
	sort: Sort[],
}

export interface Sort {
	id: number,
	title: string,
	titleFull: string,
	weight: number,
	price: number,
}
