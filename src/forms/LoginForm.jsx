import styles from './form.module.css'
import { useForm } from "react-hook-form"

import { FormButton } from '../ui/button/button'
import { login } from '../services/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { routes } from '../utils/routes'
import { useEffect } from 'react'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: { email: '', password: '' }, mode: 'onChange' })
    const { authorization } = useSelector(store => store.user)

    const onSubmit = (data) => {
        dispatch(login(data))
        console.log(data)
        reset()
    }

    useEffect(() => {
        if (authorization) {
            navigate(routes.myList)
        }
    }, [authorization])

    console.log(errors)
    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            <fieldset
                className={styles.fieldset}
            >
                <input
                    className={styles.input}
                    placeholder='Почта'
                    type="text"
                    {...register('email', {
                        required: 'Почта- обязательное поле',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            message: 'Введите корректную почту'
                        }
                    })}
                />
                {errors?.email && (<span className={styles.errorMessage}>{errors.email.message}</span>)}
                <input
                    className={styles.input}
                    placeholder='Пароль'
                    type="password"
                    {...register('password', {
                        required: 'Пароль- обязательное поле',
                        minLength: {
                            value: 6,
                            message: 'The password must be more than 6 characters long'
                        }
                    })}
                />
                {errors?.password && (<span className={styles.errorMessage}>{errors.password.message}</span>)}
            </fieldset>
            <div className={styles.btnContainer}>
                <FormButton htmlType="submit" title='Войти' />
                <FormButton htmlType='button' title='Зарегистрироваться' />
            </div>
        </form>
    )
}