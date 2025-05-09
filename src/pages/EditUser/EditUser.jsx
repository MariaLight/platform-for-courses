import { H1, Button } from "../../components"
import styles from './edit-user.module.css';
import { Input } from "./components/Input/Input";
import { useParams } from "react-router-dom";
import { getUserById } from "../../bff/api";
import { useState, useEffect } from "react";
import { useServerRequest } from "../../hooks";
import { USER_ROLE_ID } from "../../constants";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";

export const EditUser = () => {
    const requestServer = useServerRequest();
    const currentUserRoleId = useSelector(selectUserRole);

    const params = useParams();
    const id = params.userId;
    const [user, setUser] = useState(null);
    const [roles, setRoles] = useState([]);
    const [isFormChanged, setIsFormChanged] = useState(false);

    useEffect(() => {
        getUserById(id).then((loadedUser) => {
            setUser(loadedUser)
        });

        requestServer('fetchRoles').then((rolesRes) => {
            if (rolesRes.error) {
                return;
            }
            setRoles(rolesRes.res);
        })

    }, [id, requestServer]);

    console.log(currentUserRoleId, USER_ROLE_ID.admin)
    return (
        <>
            <H1>Редактировать профиль</H1>
            {user &&
                <form>
                    <Input label='Имя' type='text' value={user.name} name='user-name' placeholder="Заполните имя" />
                    <Input label='Email' type='email' value={user.email} name='user-email' />
                    {currentUserRoleId === USER_ROLE_ID.admin && (
                        <select name="user-role">
                            {roles.map((role) => <option key={role.id} value={role.id} selected={role.id === user.roleId}>{role.name}</option>
                            )}
                        </select>
                    )}

                    <Button className={`${styles.form__btn} main-btn`} disabled={!isFormChanged}>Сохранить</Button>

                </form>
            }
        </>
    )
}