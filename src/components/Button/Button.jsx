import styles from './button.module.css'

export const Button = ({ children, ...props }) => {
return(
    <button className={styles.main__btn} {...props}>{children}</button>
)
}