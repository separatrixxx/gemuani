export interface Cart {
	id: string,
	image: string,
	title: string,
	count: number,
	price: number,
    weight: number,
}

export interface Buy {
    uname: string,
    phone: number, 
    email: string, 
    price: string, 
    cart: string,
    comment: string,
}
