import styles from './sidebar.module.css';
import defaultUserPhoto from '../../assets/img/default-user-photo.png';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { selectUserName, selectUserSession, selectUserImage, selectUserRole, selectUserEmail } from '../../selectors';
import { logout } from '../../actions';
import { USER_ROLE_ID } from '../../constants';
import { NavMenu } from './NavMenu/NavMenu';
import { useState } from 'react';

export const Sidebar = () => {
    const session = useSelector(selectUserSession);
    const name = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);
    const image = useSelector(selectUserImage);
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRole);
    const store = useStore();
    if (roleId === USER_ROLE_ID.reader) {
        if (store.getState().app.wasLogout) {
            return <Navigate to="/" />
        } else {
            return <Navigate to="/login" />
        }
    }

    const [isBurgerOpened, setIsBurgerOpened] = useState(false);

    const onLogout = () => {
        dispatch(logout(session));
        sessionStorage.removeItem('userData');
    }
    return (
        <header className={styles.header__wrapper}>
            <button className={styles.action__btn} onClick={() => setIsBurgerOpened(true)}>
                <i className='fa fa-navicon'></i>
                Меню
            </button>
            <div className={`${styles.header} ${isBurgerOpened && styles.header__active}`}>
                <button className={`${styles.close__btn} ${styles.action__btn}`} onClick={() => setIsBurgerOpened(false)}>
                    <i className='fa fa-close'></i>
                </button>
                <Link onClick={() => setIsBurgerOpened(false)} to='/profile' className={styles.header__profile}>
                    <div className={styles.header__icon}>
                        {image ? <img src={image} alt="User image" /> : <img src={defaultUserPhoto} alt="User image" />}

                    </div>
                    {name ? <span>{name}</span> : <span>{email}</span>}
                </Link>
                <NavMenu onClick={() => {
                    console.log('hi');
                    setIsBurgerOpened(false);
                }} userRoleId={roleId} />
                <button onClick={onLogout} className={styles.action__btn}>
                    <i className='fa fa-sign-out-alt'></i>
                    Выход
                </button>
            </div>
        </header>
    );
}