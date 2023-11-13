import { Buy } from "interfaces/cart.interface";

export function contactHelper(name: string, email: string, message: string,
    setErrorName: (e: any) => void, setErrorEmail: (e: any) => void, setErrorMessage: (e: any) => void,
    setLoading: (e: any) => void) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    setErrorName(false);
    setErrorEmail(false);
    setErrorMessage(false);

    if (+name !== 0 && EMAIL_REGEXP.test(email) && +message !== 0) {
        if (name !== null && email !== null && message !== null) {
            // const data: Buy = {
            //     name: name,
            //     email: email,
            //     phone: null,
            //     url: 'https://www.gemuani.com/',
            //     list_of_product: cart,
            // }

            // setLoading(true);

            // await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '', data)
            //     .then(function () {
            //         setLoading(false);
            //         ToastSuccess(setLocale(router.locale).success_purchase + '!');
            //         setCart([]);
            //         localStorage.removeItem('cart');
            //     })
            //     .catch(function (error) {
            //         setLoading(false);
            //         console.log('Buy error: ' + error);
            //         ToastError(setLocale(router.locale).error_purchase + ': ' + error);
            //     });
        }
    } else {
        if (+name === 0) {
            setErrorName(true);
        }

        if (!EMAIL_REGEXP.test(email)) {
            setErrorEmail(true);
        }

        if (+message === 0) {
            setErrorMessage(true);
        }
    }
}