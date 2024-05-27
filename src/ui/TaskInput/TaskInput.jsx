import styles from './takskInput.module.css'
import { useState } from "react"

export const TaskInput = ({ value, type }) => {
    const [title, setTitle] = useState({ value })

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
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
        <>
            <input
                className={changeClass(type)}
                value={title.value}
                onChange={onChange}
            />
        </>
    )
}