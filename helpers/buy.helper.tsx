import { Buy, Cart } from "interfaces/cart.interface";
import axios from "axios";
import { ToastError, ToastSuccess } from "components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";
import { Production } from "interfaces/production.interface";
import { setProduction } from "./production.helper";


export async function buyHelper(cart: Cart[], name: string, email: string, phone: string, totalPrice: number,
    comment: string, setErrorName: (e: any) => void, setErrorEmail: (e: any) => void, setErrorPhone: (e: any) => void,
    setLoading: (e: any) => void, setCart: (e: any) => void, router: any) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const PHONE_REGEXP = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/iu;

    setErrorName(false);
    setErrorEmail(false);
    setErrorPhone(false);

    if (+name !== 0 && EMAIL_REGEXP.test(email) && PHONE_REGEXP.test(phone)) {
        if (cart.length > 0) {
            if (name !== null && email !== null && phone !== null) {
                let products: Production[] = setProduction('en');

                let cartStr = "";

                for (let c of cart) {
                    cartStr += products[+c.id.slice(0, c.id.length - 2)].title + ' ' 
                        + products[+c.id.slice(0, c.id.length - 2)].sort[+c.id.slice(2, c.id.length)].title
                        + ' | ' + c.weight + 'g | ' + c.count + ', ';
                }
                cartStr = cartStr.slice(0, cartStr.length - 2);

                const data: Buy = {
                    uname: name,
                    phone: +phone,
                    email: email,
                    price: "" + Math.round(totalPrice),
                    cart: cartStr,
                    comment: comment,
                };

                setLoading(true);
    
                await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '', data)
                    .then(function () {
                        setLoading(false);
                        ToastSuccess(setLocale(router.locale).success_purchase + '!');
                        setCart([]);
                        localStorage.removeItem('cart');
                    })
                    .catch(function (error) {
                        setLoading(false);
                        console.log('Buy error: ' + error);
                        ToastError(setLocale(router.locale).error_purchase + ': ' + error);
                    });
            }
        } else {
            ToastError(setLocale(router.locale).first_add_items);
        }
    } else {
        if (+name === 0) {
            setErrorName(true);
        }

        if (!EMAIL_REGEXP.test(email)) {
            setErrorEmail(true);
        }

        if (!PHONE_REGEXP.test(phone)) {
            setErrorPhone(true);
        }
    }
}