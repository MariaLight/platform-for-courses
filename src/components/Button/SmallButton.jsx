import styles from './button.module.css'

export const SmallButton = ({ children, ...props }) => {
return(
    <button className={styles.small__btn} {...props}>{children}</button>
)
}