import { LearnMoreProps } from './LearnMore.props';
import styles from './LearnMore.module.css';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import Arrow from './arrow.svg';
import Link from 'next/link';


export const LearnMore = ({ link, marginTop }: LearnMoreProps): JSX.Element => {
	const router = useRouter();

	return (
		<Link href={link} className={styles.learnMore} style={{ marginTop: marginTop ? marginTop : '60px' }}>
			<Htag tag='l' className={styles.learnMoreText}>{setLocale(router.locale).learn_more}</Htag>
			<span className={styles.arrow}><Arrow /></span>
		</Link>
	);
};
