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
                    placeholder='Email'
                    type="text"
                    {...register('email', {
                        required: 'Email is require field!',
                    })}
                />
                {errors?.email && (<span className={styles.errorMessage}>{errors.email.message}</span>)}
                <input
                    className={styles.input}
                    placeholder='Password'
                    type="password"
                    {...register('password', {
                        required: 'Password is require field!',
                        minLength: {
                            value: 6,
                            message: 'The password must be more than 6 characters long'
                        }
                    })}
                />
                {errors?.password && (<span className={styles.errorMessage}>{errors.password.message}</span>)}
            </fieldset>
            <div className={styles.btnContainer}>
                <FormButton htmlType="submit" title='Login' />
                <FormButton htmlType='button' title='Create Account' />
            </div>
        </form>
    )
}