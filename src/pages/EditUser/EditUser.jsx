import { H1, Button, ErrorPageContainer } from "../../components"
import styles from './edit-user.module.css';
import { Input } from "./components/Input/Input";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useServerRequest } from "../../hooks";
import { USER_ROLE_ID } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId, selectUserRole } from "../../selectors";
import { setUser } from "../../actions";

export const EditUser = () => {
    const requestServer = useServerRequest();
    const currentUserRoleId = useSelector(selectUserRole);
    const currentUserId = useSelector(selectUserId);

    const params = useParams();
    const id = params.userId;
    const [currentUser, setCurrentUser] = useState(null);
    const [roles, setRoles] = useState([]);
    const [isFormChanged, setIsFormChanged] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [selectedRoleId, setSelectedRoleId] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        requestServer('fetchUser', id).then((userRes) => {
            if (userRes.error) {
                setErrorMessage(userRes.error);
                return;
            }
            setCurrentUser(userRes.res)
        })

    }, [requestServer]);

    useEffect(() => {
        if (currentUserRoleId === USER_ROLE_ID.admin) {
            requestServer('fetchRoles').then((rolesRes) => {
                if (rolesRes.error) {
                    setErrorMessage(rolesRes.error);
                    return;
                }
                setRoles(rolesRes.res);
            });
        }
    }, requestServer)

    useEffect(() => {
        if (currentUser) {
            setSelectedRoleId(currentUser.roleId);
            setUserName(currentUser.name);
            setUserEmail(currentUser.email);
        }
    }, [currentUser]);


    // Change fields 


    const onRoleChange = ({ target }) => {
        setSelectedRoleId(Number(target.value));
        setIsFormChanged(true);

    }

    const onUserSave = (e) => {
        e.preventDefault();
        let newUserObject = { ...currentUser, name: userName, email: userEmail, roleId: selectedRoleId }
        requestServer('updateUser', newUserObject).then((res) => {
            setIsFormChanged(false);
        });

        if (currentUserId === newUserObject.id) {
            dispatch(setUser(newUserObject));
        }

    }


    return (
        <>
            <H1>Редактировать профиль</H1>
            <ErrorPageContainer error={errorMessage}>
                <form onSubmit={onUserSave}>
                    <Input label='Имя' type='text' value={userName} onChange={({ target }) => { setIsFormChanged(true); setUserName(target.value) }} name='user-name' placeholder="Заполните имя" />
                    <Input label='Email' type='email' value={userEmail} onChange={({ target }) => { setIsFormChanged(true); setUserEmail(target.value) }} name='user-email' />
                    {currentUserRoleId === USER_ROLE_ID.admin && (
                        <div className={styles.input__wrapper}>
                            <label className={styles.label}>Роль:</label>
                            <select name="user-role" value={selectedRoleId} onChange={onRoleChange}>
                                {roles.map((role) => {
                                    if (role.id !== USER_ROLE_ID.reader) {
                                        return <option key={role.id} value={role.id}>{role.name}</option>
                                    }
                                }
                                )}
                            </select>
                        </div>
                    )}

                    <Button className={`${styles.form__btn} main-btn`} disabled={!isFormChanged}>Сохранить</Button>

                </form>
            </ErrorPageContainer>
        </>
    )
}