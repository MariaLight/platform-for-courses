import { Link } from "react-router-dom";
import styles from './menu-item.module.css';

export const MenuItem = ({ text, icon, redirectTo }) => {
    return (
        <Link to={redirectTo} className={styles.link}>
            <i className={`fa fa-${icon}`}></i>
            <div>{text}</div>
        </Link>
    );
};