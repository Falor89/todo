import { useForm } from 'react-hook-form'
import styles from './takskInput.module.css'
import { useState } from "react"

export const TaskInput = ({ value, type }) => {

    const { register, handleSubmit, formState: { error } } = useForm({
        defaultValues: {
            title: value,
        },
        mode: 'onSubmit'
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const changeClass = (type) => {
        switch (type) {
            case 'close': {
                return `${styles.taskInputClose}`
            }
                break;
            case 'done': {
                return `${styles.taskInputDone}`
            }
                break;
            default: {
                return `${styles.taskInput}`
            }
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.fieldset}>
                <input
                    className={changeClass(type)}
                    {...register('title', {
                        required: 'Поле не может быть пустым',
                        minLength: {
                            value: 1,
                            message: 'Поле должно быть более 1 символа в длину!'
                        }
                    })}
                />
            </fieldset>
        </form>

    )
}