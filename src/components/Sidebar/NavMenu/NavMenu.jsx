import { USER_ROLE_ID } from '../../../constants'
import styles from '../sidebar.module.css';
import { MenuItem } from '../MenuItem/MenuItem';

export const NavMenu = ({ userRoleId }) => {
    return (
        <nav className={styles.header__nav}>
            {/* {userRoleId === USER_ROLE_ID.admin &&
                <MenuItem icon="users" text="Пользователи" redirectTo="/users" />

            }
            {userRoleId === USER_ROLE_ID.admin || userRoleId === USER_ROLE_ID.editor &&
                <MenuItem icon="book" text="Курсы" redirectTo="/edit-courses" />
            }
            {userRoleId === USER_ROLE_ID.student &&
                <MenuItem icon="book" text="Обучение" redirectTo="/courses" />
            }
            {userRoleId === USER_ROLE_ID.student &&
                <MenuItem icon="th-list" text="Каталог" redirectTo="/catalog" />
            }
            {userRoleId === USER_ROLE_ID.student &&
                <MenuItem icon="heart" text="Поддержка" redirectTo="/support" />
            } */}

            <MenuItem icon="users" text="Пользователи" redirectTo="/users" />
            <MenuItem icon="book" text="Обучение" redirectTo="/courses" />
            <MenuItem icon="th-list" text="Каталог" redirectTo="/catalog" />
            <MenuItem icon="heart" text="Поддержка" redirectTo="/support" />
        </nav>
    )
}