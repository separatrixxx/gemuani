import styles from './HeaderLocaleChange.module.css';
import { useRouter } from 'next/router';
import { en } from 'locales/en.locale';
import { ru } from 'locales/ru.locale';
import { ge } from 'locales/ge.locale';
import Link from 'next/link';
import { useState } from 'react';
import { setLocale } from 'helpers/locale.helper';
import { Modal } from 'components/MainPageComponents/Modal/Modal';
import { Htag } from 'components/Htag/Htag';
import Ru from './ru.svg';
import Ge from './ge.svg';
import En from './en.svg';


export const HeaderLocaleChange = (): JSX.Element => {
    const router = useRouter();

    const [active, setActive] = useState<boolean>(false);

    const languages = [en, ru, ge];
    const langIndex = languages.indexOf(setLocale(router.locale));

    if (langIndex !== -1) {
        languages.splice(langIndex, 1);
    }

    let Icon;

    if (router.locale === 'ru') {
        Icon = Ru;
    } else if (router.locale === 'ge') {
        Icon = Ge;
    } else {
        Icon = En;
    }

    return (
        <>
            <Htag tag='s' className={styles.lang} onClick={() => setActive(true)}>
                <Icon />
            </Htag>
            <Modal active={active} setActive={setActive}>
                <div className={styles.blockLanguages}>
                    {languages.map(m => (
                        <Link key={m.locale} href={router.asPath} locale={m.locale}
                            onClick={() => setActive(false)}>
                            <Htag tag='l' className={styles.langLink}>{m.language}</Htag>
                        </Link>
                    ))}
                </div>
            </Modal>
        </>
    );
};