import { Buy, Cart } from "interfaces/cart.interface";
import axios from "axios";
import { ToastError, ToastSuccess } from "components/Toast/Toast";
import { setLocale } from "./locale.helper";

export async function buyHelper(cart: Cart[], name: string, email: string, phone: string,
    setErrorName: (e: any) => void, setErrorEmail: (e: any) => void, setErrorPhone: (e: any) => void,
    setLoading: (e: any) => void, setCart: (e: any) => void, router: any) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    setErrorName(false);
    setErrorEmail(false);
    setErrorPhone(false);

    const { data: response } = await axios.get(
        'http://apilayer.net/api/validate?access_key=df5b3be5e79fbc0ee90aee227feeb345&number=' + phone);

    if (+name !== 0 && EMAIL_REGEXP.test(email) && response.valid) {
        if (cart.length > 0) {
            if (name !== null && email !== null && phone !== null) {
                const data: Buy = {
                    name: name,
                    email: email,
                    phone: +phone,
                    url: 'https://www.gemuani.com/',
                    list_of_product: cart,
                }
    
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

        if (!response.valid) {
            setErrorPhone(true);
        }
    }
}