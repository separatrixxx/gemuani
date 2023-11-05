import { Cart } from "interfaces/cart.interface";


export function getCartCount(): number {
    let currentCart = localStorage.getItem('cart');

    if (currentCart) {
        let newCart: Cart[] = JSON.parse(currentCart);

        return newCart.length;
    } else {
        return 0;
    }
}

export function getCart(id: string): Cart {
    let currentCart = localStorage.getItem('cart');

    let cart: Cart = {
        id: '',
        image: '',
        title: '',
        count: 0,
    };

    if (currentCart) {
        let newCart: Cart[] = JSON.parse(currentCart);

        for (let c of newCart) {
            if (c.id === id) {
                cart = c;

                break;
            }
        }
    }

    return cart;
}

export function addToCart(id: string, image: string, title: string, setCount: (e: any) => void, setAllCount: (e: any) => void) {
    let currentCart = localStorage.getItem('cart');

	let product: Cart = {
        id: id,
        image: image,
        title: title,
        count: 1,
    };

    if (currentCart) {
        let newCart: Cart[] = JSON.parse(currentCart);

        newCart.push(product);
        localStorage.clear();
        localStorage.setItem('cart', JSON.stringify(newCart));
        setAllCount(newCart.length)
    } else {
        let cart = [product];
        localStorage.setItem('cart', JSON.stringify(cart));
        setAllCount(1);
    }

    setCount(1);
}

export function removeFromCart(id: string, setCount: (e: any) => void, setAllCount: (e: any) => void) {
	let currentCart = localStorage.getItem('cart');

    if (currentCart) {
        let newCart: Cart[] = JSON.parse(currentCart);

        for (let c of newCart) {
            if (c.id === id) {
                newCart.splice(newCart.indexOf(c), 1);

                break;
            }
        }

        localStorage.clear();
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCount(0);
        setAllCount(newCart.length);
    }
}

export function plusMinusCart(id: string, setCount: (e: any) => void, isPlus: boolean) {
	let currentCart = localStorage.getItem('cart');

    if (currentCart) {
        let newCart: Cart[] = JSON.parse(currentCart);

        for (let c of newCart) {
            if (c.id === id) {
                isPlus ? c.count++ : c.count--;
                setCount(c.count);

                break;
            }
        }

        localStorage.clear();
        localStorage.setItem('cart', JSON.stringify(newCart));
    }
}
