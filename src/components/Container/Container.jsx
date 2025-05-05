import styles from '../../app.module.css';

export const Container = ({ children }) => {
    return (
        <>
            <main className={styles.main__clear}>
                {children}
            </main>
        </>
    )
} 