import { LearnMoreProps } from './LearnMore.props';
import styles from './LearnMore.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import Arrow from './arrow.svg';
import Link from 'next/link';
import cn from 'classnames';


export const LearnMore = ({ link, marginTop, colorWhite }: LearnMoreProps): JSX.Element => {
	const router = useRouter();

	return (
		<Link href={link} className={styles.learnMore} style={{ marginTop: marginTop ? marginTop : '' }}>
			<Htag tag='l' className={cn(styles.learnMoreText, {
				[styles.colorWhite]: colorWhite,
			})}>
				{setLocale(router.locale).learn_more}
			</Htag>
			<span className={cn(styles.arrow, {
				[styles.arrowWhite]: colorWhite,
			})}>
				<Arrow />
			</span>
		</Link>
	);
};
