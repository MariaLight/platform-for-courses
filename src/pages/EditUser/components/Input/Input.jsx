import styles from '../../edit-user.module.css';

export const Input = ({ label, ...props }) => {
    return (
        <div className={styles.input__wrapper}>
            <label className={styles.label}>{label}:</label>
            <input className={styles.input} {...props} />
        </div>
    )
}