import styles from './error-message.module.css';
export const ErrorMessage = ({ children }) => {
    return (
        <div className={styles.error_message}>{children}</div>
    )
}