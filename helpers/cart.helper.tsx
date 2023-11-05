import { Cart } from "interfaces/cart.interface";


export function addToCart(id: string, image: string, title: string, count: number) {
    let currentCart = localStorage.getItem('cart');

    console.log(currentCart);
    
	let product: Cart = {
        id: id,
        image: image,
        title: title,
        count: count,
    };

    if (!currentCart) {
        let cart = [product];
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        let newCart: Cart[] = JSON.parse(currentCart);
        
        if (newCart.find(el => el.id === product.id)) {
            for (let el of newCart) {
                if (el.id == product.id) {
                    el.count = product.count;
                }
            }
        } else {
            newCart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(newCart));
    }
}
