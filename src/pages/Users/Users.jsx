import { H1 } from "../../components";
import {UserRow} from './components/UserRow/UserRow';
import styles from './users.module.css';

export const Users = () => {
    const users = [];
    return (
        <div>
            <H1>Пользователи</H1>

            <div class={styles.table__users}>
                <div class={styles.table__header}>
                    <div className="login-column">Email</div>
                    <div className="name-column">Имя</div>
                    <div className="role-column">Роль</div>
                    <div className="registered-at-column">Дата регистрации</div>
                </div>
                {users.map(({ id, email, name, registeredAt, roleId }) =>
                    <UserRow key={id} email={email} name={name} registeredAt={registeredAt} roleId={roleId} />
                )}
            </div>

        </div>
    )
}