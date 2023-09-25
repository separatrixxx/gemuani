import styles from './ContactsForm.module.css';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Input } from '../Input/Input';


export const ContactsForm = (): JSX.Element => {
    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMEssage] = useState<string>('');

    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    return (
        <div className={styles.formBody}>
            <Htag tag='xxl' className={styles.contactsTitle}>{setLocale(router.locale).contacts_page.title1}</Htag>
            <div className={styles.inputsDiv}>
                <Input type='name' text={setLocale(router.locale).contacts_page.name} value={name}
                    error={errorName} onChange={(e) => setName(e.target.value)} />
                <Input type='email' text={setLocale(router.locale).contacts_page.email} value={email}
                    error={errorEmail} onChange={(e) => setEmail(e.target.value)} />
                <Input type='message' text={setLocale(router.locale).contacts_page.message} value={message}
                    error={errorMessage} onChange={(e) => setMEssage(e.target.value)} />
            </div>
            <button className={styles.button}>{setLocale(router.locale).contacts_page.send}</button>
        </div>
    );
};