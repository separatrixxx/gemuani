import styles from './LoadingDots.module.css';

export const LoadingDots = (): JSX.Element => {
  
    return (
        <span className={styles.loading}>
            <span />
            <span />
            <span />
        </span>
    );
};