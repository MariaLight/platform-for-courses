import { useState, useEffect } from "react";
import { H1, ErrorPageContainer } from "../../components";
import { useServerRequest } from "../../hooks";
import { UserRow } from './components/UserRow/UserRow';
import styles from './users.module.css';
import { UsersSearch } from "./components/UsersSearch/UsersSearch";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../selectors";
import { setUsers } from "../../actions";

export const Users = () => {
    const requestServer = useServerRequest();

    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        if (!searchValue) {
            Promise.all([
                requestServer('fetchUsers'),
                requestServer('fetchRoles')

            ]).then(([usersRes, rolesRes]) => {
                if (usersRes.error || rolesRes.error) {
                    setErrorMessage(usersRes.error || rolesRes.error);
                    return;
                }

                setUsers(usersRes.res);
                setRoles(rolesRes.res);
            });
        }
    }, [requestServer, searchValue]);
    return (
        <div>
            <ErrorPageContainer error={errorMessage}>
                <H1>Пользователи</H1>
                <UsersSearch users={users} setUsers={setUsers} searchValue={searchValue} setSearchValue={setSearchValue} />
                <div className={styles.table__users}>
                    <div className={styles.table__header}>
                        <div className={styles.table__email}>Email</div>
                        <div className={styles.table__name}>Имя</div>
                        <div className={styles.table__role}>Роль</div>
                        <div className={styles.table__date}>Дата регистрации</div>
                    </div>
                    {users.map(({ id, email, name, registeredAt, roleId }) =>
                        <UserRow key={id} userId={id} email={email} name={name} registeredAt={registeredAt} roleId={roleId} roles={roles} />
                    )}
                </div>
            </ErrorPageContainer>
        </div>
    )
}