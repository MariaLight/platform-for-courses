import styles from './sidebar.module.css';
import { MenuItem } from './MenuItem/MenuItem';
import defaultUserPhoto from '../../assets/img/default-user-photo.png';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <header className={styles.header}>
            <Link to='/profile' className={styles.header__icon}>
                <img src={defaultUserPhoto} alt="User image" />
            </Link>
            <nav className={styles.header__nav}>
                <MenuItem icon="book" text="Обучение" redirectTo="/courses" />
                <MenuItem icon="th-list" text="Каталог" redirectTo="/catalog" />
                <MenuItem icon="heart" text="Поддержка" redirectTo="/support" />
            </nav>
            <button className={styles.action__btn}>
                <i className='fa fa-sign-out-alt'></i>
                Выход
            </button>
        </header>
        );
}