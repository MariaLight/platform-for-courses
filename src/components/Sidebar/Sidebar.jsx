import styles from './sidebar.module.css';
import { MenuItem } from './MenuItem/MenuItem';

export const Sidebar = () => (
    <header className={styles.header}>
        <div className={styles.header__icon}>
            <img src="" alt="User image" />
        </div>
        <nav className={styles.header__nav}>
            <MenuItem icon="book" text="Обучение" redirectTo="/courses" />
            <MenuItem icon="th-list" text="Каталог" redirectTo="/catalog" />
            <MenuItem icon="heart" text="Поддержка" redirectTo="/support" />
        </nav>
        <button>
            <i className='fa fa-sign-out-alt'></i>
            Выход
        </button>
    </header>
)