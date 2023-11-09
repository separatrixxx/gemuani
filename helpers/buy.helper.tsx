import { Cart } from "interfaces/cart.interface";

export function buyHelper(cart: Cart[], name: string, email: string, setErrorName: (e: any) => void, setErrorEmail: (e: any) => void) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    setErrorName(false);
    setErrorEmail(false);

    if (+name !== 0 && EMAIL_REGEXP.test(email)) {
        if (name !== null && email !== null) {
            // window.location.href = "mailto:Ajj@gemuaji.com"
            //     + "?cc=Ajj@gemuaji.com"
            //     + "&subject=Вопрос от пользователя " + encodeURIComponent(name)
            //     + "&body=" + encodeURIComponent(message);

            let buyText = "New offer:\n";

            for (let c of cart) {
                buyText += c.title + ', x' + c.count + ', singlePrice = ' + c.price
                    + ', totalPrice = ' + c.price * c.count + '\n';
            }

            buyText += 'Customer: ' + name + ', email: ' + email;

            console.log(buyText);
        }
    } else {
        if (+name === 0) {
            setErrorName(true);
        }

        if (!EMAIL_REGEXP.test(email)) {
            setErrorEmail(true);
        }
    }
}