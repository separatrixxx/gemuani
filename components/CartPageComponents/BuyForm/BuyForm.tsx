import { BuyFormProps } from './BuyForm.props';
import styles from './BuyForm.module.css';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Input } from 'components/ContactsPageComponents/Input/Input';
import { buyHelper } from 'helpers/buy.helper';


export const BuyForm = ({ cart }: BuyFormProps): JSX.Element => {
    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);

    return (
        <div className={styles.formBody}>
            <div className={styles.inputsDiv}>
                <Input type='name' text={setLocale(router.locale).contacts_page.name} value={name}
                    error={errorName} onChange={(e) => setName(e.target.value)} />
                <Input type='email' text={setLocale(router.locale).contacts_page.email} value={email}
                    error={errorEmail} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className={styles.button} onClick={() => buyHelper(
                cart, name, email, setErrorName, setErrorEmail)}>
                {setLocale(router.locale).buy}
            </button>
        </div>
    );
};