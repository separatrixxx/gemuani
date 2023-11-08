import styles from './AdminPage.module.css';
import { useState } from 'react';
import cn from 'classnames';


export const AdminPage = (): JSX.Element => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    let truePassword: string = 'admin';
    
	if (!isAdmin) {
        return (
            <div className={styles.wrapper}>
                <input className={cn(styles.input, {
                    [styles.error_input]: error,
                })}
                    placeholder={'Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={'text'}
                    name={'Password'}
                    aria-label={'Password'} />
                <button className={styles.button} onClick={() => {
                    if (password === truePassword) {
                        setIsAdmin(true);
                    } else {
                        setError(true);
                    }
                }}>
                    Login
                </button>
            </div>
        );
    } else {
        return (
            <div className={styles.wrapper}>
                Admin
            </div>
        );
    }
};