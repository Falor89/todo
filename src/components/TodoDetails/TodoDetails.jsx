import styles from './tododetails.module.css'

import ChangeFrom from '../forms/ChangeForm/ChangeForm';

import { useState } from 'react';


const TodoDetails = ({ todo, onClose }) => {
    const [state, setState] = useState(false)

    const change = () => {
        setState(!state)
        console.log(state)
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{todo.title}</h2>
            <p className={styles.text}>{todo.text}</p>
            {
                state && (
                    <ChangeFrom todo={todo} close={setState} onClose={onClose} />
                )
            }
            <button
                type='button'
                className={state ? styles.btnDisabled : styles.btnAdd}
                onClick={() => change()}
                disabled={state}
            >
                <span className={styles.btnText}>
                    Изменить
                </span>
            </button>
        </div>
    )
}

export default TodoDetails;