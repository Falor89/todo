import styles from './todoItem.module.css'
import { Check } from "../../ui/checkbox/checkB"
import { DeleteButton } from '../../ui/deleteButton/deleteButton'
import { HamburgerMenu } from '../../ui/hamburgerMenu/hamburgerMenu'
import { TodoInputTitle } from '../../ui/TodoInputTitle/TodoInputTitle'
import { useState } from 'react'

export const TodoItem = ({ todo, onChange, todoId }) => {
    const [name, setName] = useState({
        type: true,
        id: todo._id,
        todoId: todoId
    })
    const onClick = () => {
        setName({
            type: !name.type
        })
        console.log(name)
    }
    return (
        <li
            className={styles.todoItem}
            key={todo._id}
        >
            <Check
                isComplited={todo.isComplited}
                click={onChange}
                id={todo._id}
                taskId={todoId}
            />
            <TodoInputTitle
                todo={todo}
                todoId={todoId}
                disabled={name.type}
                change={onClick} />
            <DeleteButton
                id={todo._id}
                todoId={todoId}
            />
            <HamburgerMenu
                onChange={onClick}
                id={todo._id}
                todoId={todoId}
            />
        </li>
    )
}