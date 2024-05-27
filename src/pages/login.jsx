import styles from './pages.module.css';

import { LoginForm } from '../forms/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { useEffect } from 'react';
import { routes } from '../utils/routes';

export const LoginPage = () => {
    const { authorization } = useSelector(store => store.user)

    useEffect(() => {
        if (authorization) {
            <Navigate to={routes.myList} replace />
        }
    }, [authorization])


    return (
        <section className={styles.login}>
            <h2 className={styles.title}>SIGN UP</h2>
            <LoginForm />
        </section>
    )
}