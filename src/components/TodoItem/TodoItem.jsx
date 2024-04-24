import styles from './todoItem.module.css';
import { PiTrashLight as Trash } from "react-icons/pi";


import Check from '../../ui/checkbox/check';
import Modal from '../Modal/Modal';
import TodoDetails from '../TodoDetails/TodoDetails';

import { useState } from 'react';

const TodoItem = ({ todo, onChange, openModal, onDelete }) => {

    return (
        <li className={styles.listItem}
        >
            <Check
                isComplited={todo.isComplited}
                click={onChange}
                todo={todo}
            />
            <span
                className={styles.title}
                onClick={() => openModal(todo)}
            >{todo.title}</span>
            <Trash
                className={styles.trash}
                size={24}
                onClick={() => onDelete(todo._id)}
            />
        </li>
    )
}

export default TodoItem;