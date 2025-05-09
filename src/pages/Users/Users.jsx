import { useState, useEffect } from "react";
import { H1, ErrorPageContainer } from "../../components";
import { useServerRequest } from "../../hooks";
import { UserRow } from './components/UserRow/UserRow';
import styles from './users.module.css';

export const Users = () => {
    const requestServer = useServerRequest();

    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    useEffect(() => {
        Promise.all([
            requestServer('fetchUsers'),
            requestServer('fetchRoles')

        ]).then(([usersRes, rolesRes]) => {
            if (usersRes.error || rolesRes.error) {
                setErrorMessage(usersRes.error || rolesRes.error);
                return;
            }

            setUsers(usersRes);
            setRoles(rolesRes);
        });

    }, [requestServer]);

    return (
        <div>
            <ErrorPageContainer error={errorMessage}>
                <H1>Пользователи</H1>

                <div className={styles.table__users}>
                    <div className={styles.table__header}>
                        <div className={styles.table__email}>Email</div>
                        <div className={styles.table__name}>Имя</div>
                        <div className={styles.table__role}>Роль</div>
                        <div className={styles.table__date}>Дата регистрации</div>
                    </div>
                    {users.map(({ id, email, name, registeredAt, roleId }) =>
                        <UserRow key={id} email={email} name={name} registeredAt={registeredAt} roleId={roleId} />
                    )}
                </div>
            </ErrorPageContainer>
        </div>
    )
}