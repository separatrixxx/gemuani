import { DuoBlockProps } from './DuoBlock.props';
import styles from './DuoBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import cn from 'classnames';


export const DuoBlock = ({ text, side, children }: DuoBlockProps): JSX.Element => {
	return (
		<div className={cn(styles.duoBlock, {
			[styles.rightSide]: side === 'right',
		})}>
             {children}
			<Htag tag='l' className={styles.text}>
                {text}
            </Htag>
		</div>
	);
};
