import { EnergyCounterProps } from './EnergyCounter.props';
import styles from './EnergyCounter.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Htag } from 'components/Htag/Htag';
import { useEffect, useRef, useState } from 'react';


export const EnergyCounter = ({ energyNumber }: EnergyCounterProps): JSX.Element => {
    const router = useRouter();

    const [counter, setCounter] = useState<number>(0);
    const counterRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!counterRef.current) return;
            const { top } = counterRef.current.getBoundingClientRect();
        if (top <= window.innerHeight) {
            setCounter(1);
            window.removeEventListener('scroll', handleScroll);
        }
    };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [handleScroll]);
    
    useEffect(() => {
        let id: NodeJS.Timeout;
        if (counter > 0 && counter < energyNumber) {
          id = setTimeout(() => setCounter(counter + 1), 20);
        }
        return () => clearTimeout(id);
    }, [counter, energyNumber]);

    return (
        <div ref={counterRef} className={styles.wrapper}>
            <Htag tag='xl' className={styles.energyCounter}>
                <span className={styles.energyNumber}>{counter}</span>
                {' ' + setLocale(router.locale).kwt}
            </Htag>
        </div>
    );
};