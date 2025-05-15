import { USER_ROLE_ID } from '../../../constants'
import styles from '../sidebar.module.css';
import { MenuItem } from '../MenuItem/MenuItem';

export const NavMenu = ({ userRoleId, setIsBurgerOpened }) => {
    return (
        <nav className={styles.header__nav}>
            {userRoleId === USER_ROLE_ID.admin &&
                <MenuItem setIsBurgerOpened={setIsBurgerOpened} icon="users" text="Пользователи" redirectTo="/users" />

            }
            {(userRoleId === USER_ROLE_ID.admin || userRoleId === USER_ROLE_ID.editor || userRoleId === USER_ROLE_ID.student) &&
                <MenuItem setIsBurgerOpened={setIsBurgerOpened} icon="book" text="Обучение" redirectTo="/courses" />
            }
            {userRoleId === USER_ROLE_ID.student &&
                <MenuItem setIsBurgerOpened={setIsBurgerOpened} icon="th-list" text="Каталог" redirectTo="/catalog" />
            }
            {userRoleId === USER_ROLE_ID.student &&
                <MenuItem setIsBurgerOpened={setIsBurgerOpened} icon="heart" text="Поддержка" redirectTo="/support" />
            }
        </nav>
    )
}