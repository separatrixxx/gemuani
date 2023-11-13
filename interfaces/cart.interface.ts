export interface Cart {
	id: string,
	image: string,
	title: string,
	count: number,
	price: number,
}

export interface Buy {
    name: string, 
    email: string, 
    phone: number, 
    url: string, 
    list_of_product: Cart[], 
}
