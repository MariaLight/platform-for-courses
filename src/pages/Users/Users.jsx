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
                    <div className={styles.table__email}>Email</div>
                    <div className={styles.table__name}>Имя</div>
                    <div className={styles.table__role}>Роль</div>
                    <div className={styles.table__date}>Дата регистрации</div>
                </div>
                {users.map(({ id, email, name, registeredAt, roleId }) =>
                    <UserRow key={id} email={email} name={name} registeredAt={registeredAt} roleId={roleId} />
                )}
            </div>

        </div>
    )
}