import styles from './todoItem.module.css'
import { Check } from "../../ui/checkbox/checkB"
import { DeleteButton } from '../../ui/deleteButton/deleteButton'
import { HamburgerMenu } from '../../ui/hamburgerMenu/hamburgerMenu'

export const TodoItem = ({ todo, onChange, todoId }) => {
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
            <span
                className={styles.title}
            >{todo.title}</span>
            <DeleteButton />
            <HamburgerMenu />
        </li>
    )
}