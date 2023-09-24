import { EnergyCounterProps } from './EnergyCounter.props';
import styles from './EnergyCounter.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Htag } from 'components/Htag/Htag';


export const EnergyCounter = ({ energyNumber }: EnergyCounterProps): JSX.Element => {
    const router = useRouter();

    return (
        <Htag tag='xl' className={styles.energyCounter}>
            <span className={styles.energyNumber}>{energyNumber}</span>
            {' ' + setLocale(router.locale).kwt}
        </Htag>
    );
};