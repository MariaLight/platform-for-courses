import styles from './h1.module.css';

export const H1 = ({ children }) => {
    return (
        <h1 className={styles.title}>{children}</h1>
    )
}
