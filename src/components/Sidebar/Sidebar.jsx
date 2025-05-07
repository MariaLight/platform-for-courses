import styles from './sidebar.module.css';
import defaultUserPhoto from '../../assets/img/default-user-photo.png';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { selectUserName, selectUserSession, selectUserImage, selectUserRole, selectUserLogin } from '../../selectors';
import { logout } from '../../actions';
import { USER_ROLE_ID } from '../../constants';
import { NavMenu } from './NavMenu/NavMenu';

export const Sidebar = () => {
    const session = useSelector(selectUserSession);
    const name = useSelector(selectUserName);
    const login = useSelector(selectUserLogin);
    const image = useSelector(selectUserImage);
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRole);
    const store = useStore();
    console.log(name, login);
    if (roleId === USER_ROLE_ID.reader) {
        if (store.getState().app.wasLogout) {
            return <Navigate to="/" />
        } else {
            return <Navigate to="/login" />
        }
    }
    return (
        <header className={styles.header}>
            <Link to='/profile' className={styles.header__profile}>
                <div className={styles.header__icon}>
                    {image ? <img src={image} alt="User image" /> : <img src={defaultUserPhoto} alt="User image" />}

                </div>
                {name ? <span>{name}</span> : <span>{login}</span>}
            </Link>
            <NavMenu userRoleId={roleId} />
            <button onClick={() => dispatch(logout(session))} className={styles.action__btn}>
                <i className='fa fa-sign-out-alt'></i>
                Выход
            </button>
        </header>
    );
}