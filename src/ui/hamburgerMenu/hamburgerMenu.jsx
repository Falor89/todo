import { useState } from 'react'
import styles from './hamburgerMenu.module.css'

export const HamburgerMenu = ({ id, todoId, onChange, type }) => {

    const changeClass = (type) => {
        switch (type) {
            case 'todo': {
                return `${styles.hamburgerButtonTodo}`
            }
                break;
            case 'task': {
                return `${styles.hamburgerButtonTask}`
            }
                break;
            default: {
                return `${styles.hamburgerButtonTask}`
            }

        }
    }
    return (
        <button
            className={changeClass(type)}
            type='button'
            onClick={() => onChange(type)}
        >
        </button>
    )
}