import { Link, useNavigate } from "react-router-dom";
import styles from './menu-item.module.css';

export const MenuItem = ({ text, icon, redirectTo,setIsBurgerOpened, additionalStyles }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => {
            setIsBurgerOpened(false);
            navigate(redirectTo);
        }}
            className={`${styles.link} ${styles[additionalStyles]}`
            }>
            <i className={`fa fa-${icon}`}></i>
            <div>{text}</div>
        </button>
    );
};