import axios from "axios";
import { ToastError, ToastSuccess } from "components/Toast/Toast";
import { Buy } from "interfaces/cart.interface";
import { setLocale } from "./locale.helper";

export async function contactHelper(name: string, email: string, phone: string, message: string,
    setErrorName: (e: any) => void, setErrorEmail: (e: any) => void, setErrorPhone: (e: any) => void, setErrorMessage: (e: any) => void,
    setLoading: (e: any) => void, router: any) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    setErrorName(false);
    setErrorEmail(false);
    setErrorPhone(false);
    setErrorMessage(false);

    let isValid = false;

    await axios.post('http://34.88.43.118:3000/valid_number', {
        phone: phone,
    })
        .then(function (response) {
            isValid = response.data.valid;
        })
        .catch(function (error) {
            console.log(error)
        });

    if (+name !== 0 && EMAIL_REGEXP.test(email) && isValid && +message !== 0) {
        if (name !== null && email !== null && phone !== null && message !== null) {
            const data: Buy = {
                name: name + ', ' + message,
                email: email,
                phone: +phone,
                url: 'https://www.gemuani.com/',
                list_of_product: [],
            }

            setLoading(true);

            await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '', data)
                .then(function () {
                    setLoading(false);
                    ToastSuccess(setLocale(router.locale).success_contact + '!');
                })
                .catch(function (error) {
                    setLoading(false);
                    console.log('Contact error: ' + error);
                    ToastError(setLocale(router.locale).error_purchase + ': ' + error);
                });
        }
    } else {
        if (+name === 0) {
            setErrorName(true);
        }

        if (!EMAIL_REGEXP.test(email)) {
            setErrorEmail(true);
        }

        if (!isValid) {
            setErrorPhone(true);
        }

        if (+message === 0) {
            setErrorMessage(true);
        }
    }
}