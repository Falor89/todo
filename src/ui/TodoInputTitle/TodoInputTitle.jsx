import { useForm } from 'react-hook-form'
import styles from './todoInputTitle.module.css'
import { useState } from "react"
import { changeNameTodo } from '../../services/actions/todos'
import { useDispatch } from 'react-redux'

export const TodoInputTitle = ({ todo, todoId, disabled, change }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(todo.title)
    const { register, handleSubmit, formState: { error }, reset } = useForm({ defaultValues: { title: todo.title }, mode: 'onChange' })

    const onSubmit = (data) => {
        if (data.title.length !== 0) {
            console.log(`${todoId} and ${todo._id} and ${data.title}`)
            dispatch(changeNameTodo(todoId, todo._id, data.title))
            change()
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}>
            <fieldset
                className={styles.fieldset}
            >
                <input
                    disabled={disabled}
                    className={styles.titleChangeInput}
                    type="text"
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