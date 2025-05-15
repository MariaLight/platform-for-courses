import styles from './edit-input.module.css';

export const EditInput = ({ label, ...props }) => {
    return (
        <div className={styles.input__wrapper}>
            <label className={styles.label}>{label}:</label>
            <input className={styles.input} {...props} />
        </div>
    )
}