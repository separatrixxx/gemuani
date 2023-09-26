import { FooterLinksProps } from './FooterLinks.props';
import styles from './FooterLinks.module.css';
import { Htag } from 'components/Htag/Htag';



export const FooterLinks = ({ title, children }: FooterLinksProps): JSX.Element => {
	return (
		<div className={styles.linksBlock}>
			<Htag tag='l' className={styles.title}>{title}</Htag>
			<div>
				{children}
			</div>
		</div>
	);
};