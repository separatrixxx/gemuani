import { BuyFormProps } from './BuyForm.props';
import styles from './BuyForm.module.css';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Input } from 'components/ContactsPageComponents/Input/Input';
import { buyHelper } from 'helpers/buy.helper';
import { LoadingDots } from '../LoadingDots/LoadingDots';
import cn from 'classnames';


export const BuyForm = ({ cart, setCart }: BuyFormProps): JSX.Element => {
    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorPhone, setErrorPhone] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

    let totalPrice = 0;

    for (const c of cart) {
        totalPrice += c.price * c.count;
    }

    return (
        <div className={cn(styles.formBody, {
			[styles.margin1]: cart.length === 1,
		})}>
            <div className={styles.inputsDiv}>
                <Input type='name' text={setLocale(router.locale).contacts_page.name} value={name}
                    error={errorName} onChange={(e) => setName(e.target.value)} />
                <Input type='email' text={setLocale(router.locale).contacts_page.email} value={email}
                    error={errorEmail} onChange={(e) => setEmail(e.target.value)} />
                <Input type='phone' text={setLocale(router.locale).phone_number} value={phone}
                    error={errorPhone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            {
                !loading ?
                    <button className={styles.button} onClick={() => buyHelper(
                        cart, name, email, phone, totalPrice, setErrorName, setErrorEmail, setErrorPhone, setLoading, setCart, router)}>
                        {setLocale(router.locale).buy}
                    </button>
                :
                    <button className={cn(styles.button, styles.button_loading)}>
                        <LoadingDots />
                    </button>
            }
        </div>
    );
};