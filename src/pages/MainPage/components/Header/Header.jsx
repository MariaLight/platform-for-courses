import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../../../components/Sidebar/MenuItem/MenuItem';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserRole } from '../../../../selectors';
import { USER_ROLE_ID } from '../../../../constants';

export const Header = () => {
    const roleId = useSelector(selectUserRole);
    const name = useSelector(selectUserName);

    const displayName = name ? name : 'Личный кабинет';
    return (
        <>
            <header>
                <div className="container">
                    <div className={styles.header__inner}>
                        <div className="header__left">
                            <div className="header__logo">Лого</div>
                        </div>
                        <div className="header__right">
                            <div className="header__search"></div>
                            {roleId === USER_ROLE_ID.reader ? <MenuItem icon="user-circle" text="Войти" additionalStyles="smaller-button" redirectTo="/login" /> : <>

                                <MenuItem icon="user-circle" text={displayName} additionalStyles="smaller-button" redirectTo="/profile" />
                            </>}

                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}