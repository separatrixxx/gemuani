import styles from './AdminPage.module.css';
import { useState } from 'react';
import { Input } from 'components/ContactsPageComponents/Input/Input';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { LoadingDots } from 'components/CartPageComponents/LoadingDots/LoadingDots';
import { addBlog, getBlog, showFile } from 'helpers/blog.helper';
import cn from 'classnames';
import { Toaster } from 'react-hot-toast';


export const AdminPage = (): JSX.Element => {
    const router = useRouter();
    
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    let truePassword: string = 'admin';

    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    const [titleError, setTitleError] = useState<boolean>(false);
    const [textError, setTextError] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);
    
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
            <>
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                    toastOptions={{
                        duration: 2000,
                    }}
                />
                <div className={styles.wrapper}>
                    <Input type='message' text={setLocale(router.locale).blog_locales.title} value={title}
                        error={titleError} onChange={(e) => setTitle(e.target.value)} />
                    <Input type='area' text={setLocale(router.locale).blog_locales.text} value={text}
                        error={textError} onChange={(e) => setText(e.target.value)} />
                    <input type="file" onChange={() => showFile(event)}></input>
                    {
                        !loading ?
                            <button className={styles.button} onClick={() => addBlog(
                                title, text, setTitleError, setTextError, setLoading, router
                            )}>
                                {setLocale(router.locale).blog_locales.add_post}
                            </button>
                        :
                            <button className={cn(styles.button, styles.button_loading)}>
                                <LoadingDots />
                            </button>
                    }
                </div>
            </>
        );
    }
};