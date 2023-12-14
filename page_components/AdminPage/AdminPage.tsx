import styles from './AdminPage.module.css';
import { useState } from 'react';
import { Input } from 'components/ContactsPageComponents/Input/Input';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { addBlog, deleteBlog, showFile } from 'helpers/blog.helper';
import { Toaster } from 'react-hot-toast';
import { LoadingDots } from 'components/CartPageComponents/LoadingDots/LoadingDots';
import cn from 'classnames';


export const AdminPage = (): JSX.Element => {
    const router = useRouter();
    
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    let truePassword: string = 'admin';

    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [id, setId] = useState<string>('');

    const [titleError, setTitleError] = useState<boolean>(false);
    const [textError, setTextError] = useState<boolean>(false);
    const [idError, setIdError] = useState<boolean>(false);

    const [loadingOne, setLoadingOne] = useState<boolean>(false);
    const [loadingTwo, setLoadingTwo] = useState<boolean>(false);
    
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
                        !loadingOne ?
                            <button className={styles.button} onClick={() => addBlog(
                                title, text, setTitleError, setTextError, setLoadingOne, router
                            )}>
                                {setLocale(router.locale).blog_locales.add_post}
                            </button>
                        :
                            <button className={cn(styles.button, styles.button_loading)}>
                                <LoadingDots />
                            </button>
                    }
                    <Input type='phone' text={setLocale(router.locale).blog_locales.id} value={id}
                        error={idError} onChange={(e) => setId(e.target.value)} />
                    {
                        !loadingTwo ?
                            <button className={styles.button} onClick={() => deleteBlog(
                                id, setIdError, setLoadingTwo, router
                            )}>
                                {setLocale(router.locale).blog_locales.delete_post}
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