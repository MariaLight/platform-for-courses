import { Link } from "react-router-dom";
import styles from './menu-item.module.css';

export const MenuItem = ({ text, icon, redirectTo, additionalStyles }) => {
    return (
        <Link to={redirectTo} className={`${styles.link} ${styles[additionalStyles]}`}>
            <i className={`fa fa-${icon}`}></i>
            <div>{text}</div>
        </Link>
    );
};