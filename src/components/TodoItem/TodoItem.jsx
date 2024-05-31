import styles from './todoItem.module.css'
import { Check } from "../../ui/checkbox/checkB"
import { DeleteButton } from '../../ui/deleteButton/deleteButton'
import { HamburgerMenu } from '../../ui/hamburgerMenu/hamburgerMenu'
import { TodoInputTitle } from '../../ui/TodoInputTitle/TodoInputTitle'
import { useState } from 'react'
import { PopupMini } from '../PopupMini/PopupMini'

export const TodoItem = ({ todo, onChange, todoId }) => {
    const [popupState, setPopupState] = useState(false)
    const [name, setName] = useState({
        type: true,
        id: todo._id,
        todoId: todoId
    })
    const changeTitle = () => {
        setName({
            type: !name.type
        })
        //console.log(name)
    }
    const openPopup = () => {
        setPopupState(!popupState)
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
                change={changeTitle} />
            <DeleteButton
                id={todo._id}
                todoId={todoId}
            />
            <HamburgerMenu
                onChange={openPopup}
                id={todo._id}
                todoId={todoId}
                type='task'
            />
            <PopupMini
                state={popupState}
                changeName={changeTitle}
            />
        </li>
    )
}