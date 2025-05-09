import styles from '../Auth/auth.module.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Navigate } from 'react-router-dom';
import { server } from '../../bff/server';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';

import { H1, Input, Button, ErrorMessage } from '../../components'
import { setUser } from '../../actions';
import { USER_ROLE_ID } from '../../constants';
import { selectUserRole } from '../../selectors';
import { useResetForm } from '../../hooks';


const regFormSchema = yup.object().shape({
    email: yup.string()
        .required('Заполните поле Email')
        .email('Неверно заполнен email. Логин должен быть действительным email-адресом'),
    password: yup.string()
        .required('Заполните пароль')
        .matches(/^[\w#%]+$/, 'Неверно заполнен пароль. Допускаются буквы, цифры и знаки % и #.')
        .min(6, 'Неверно заполнен пароль. Минимум 6 символов')
        .max(30, 'Неверно заполнен пароль. Максимум 30 символаов'),
    passcheck: yup.string()
        .required('Заполните повтор пароля')
        .oneOf([yup.ref('password'), null], 'Пароли не совпадают')

});
export const Registartion = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            passcheck: ''
        },
        resolver: yupResolver(regFormSchema)
    })

    const [serverError, setServerError] = useState(null);
    const dispatch = useDispatch();

    const onSubmit = ({ email, password }) => {
        server.register(email, password).then(({ error, res }) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`);
            }
            dispatch(setUser(res));
        });
    }
    const formError = errors?.email?.message || errors?.password?.message || errors?.passcheck?.message;
    const errorMessage = formError || serverError;


    const roleId = useSelector(selectUserRole);
   

    useResetForm(reset);


    if (roleId !== USER_ROLE_ID.reader) {
        return <Navigate to="/profile" />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__box}>
                <H1>Регистрация</H1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputs__box}>
                        <Input type="email" placeholder='Email' {...register('email', {
                            onChange: () => setServerError(null),
                        })} />
                        <Input type="password" placeholder='Пароль' {...register('password', {
                            onChange: () => setServerError(null),
                        })} />
                        <Input type="password" placeholder='Повтор пароля' {...register('passcheck', {
                            onChange: () => setServerError(null),
                        })} />

                        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    </div>
                    <Button type="submit" disabled={!!formError}>Зарегистрироваться</Button>

                    <div className={styles.links}>
                        <Link className={styles.link} to='/login'>Уже есть аккуант? Войти</Link>
                    </div>
                </form>
            </div>
            <Link to='/' className={styles.back_to_site}>Вернуться на сайт</Link>


        </div>
    );
}
