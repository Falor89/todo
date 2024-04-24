import styles from './addForm.module.css';
import data from '../../../utils/data';
import { v4 as uuidv4 } from "uuid";


import { useEffect, useRef, useState } from 'react';

const AddForm = ({ todos, setTodos, onClose }) => {
    const [formChanged, setFormChanged] = useState({
        changed: false,
        error: false
    })

    const [inputState, setInputState] = useState({
        text: {
            value: '',
            disabled: true
        },
        title: {
            value: '',
            disabled: true
        }
    })

    const onChange = (e, inputName) => {
        let state = { ...inputState }
        state = {
            ...state,
            [inputName]: {
                ...state[inputName],
                value: e.target.value
            }
        }
        setInputState(state)
    }

    const addTodo = () => {
        setTodos([...todos, {
            title: inputState.title.value,
            text: inputState.text.value,
            isComplited: false,
            _id: uuidv4()
        }])
        setInputState()
        localStorage.setItem('todos', todos)
        onClose()
    }

    const cancel = () => {
        setInputState()
        onClose()
    }
    // const addTitleInputRef = useRef('')
    // const addTextInputRef = useRef('')

    // const addTodo = () => {
    //     setTodos([...todos, {
    //         title: addTitleInputRef.current.value,
    //         text: addTextInputRef.current.value,
    //         isComplited: false,
    //         _id: uuidv4()
    //     }])
    //     addTitleInputRef.current.value = '';
    //     addTextInputRef.current.value = '';
    //     onClose()
    // }

    // const onReject = () => {
    //     addTitleInputRef.current.value = '';
    //     addTextInputRef.current.value = '';
    //     onClose()
    // }


    return (
        <form className={styles.form}>
            <fieldset className={styles.fieldset}>
                <input className={styles.addInput}
                    type="text"
                    name='title'
                    placeholder='Заголовок'
                    value={inputState.title.value}
                    onChange={(e) => onChange(e, 'title')}
                />
                <input className={styles.addInput}
                    type='text'
                    name='text'
                    placeholder='Пояснение'
                    value={inputState.text.value}
                    onChange={(e) => onChange(e, 'text')}
                />
            </fieldset>
            <div>
                <button
                    type='button'
                    onClick={() => addTodo()}
                    className={styles.btnAdd}
                >
                    <span className={styles.btnText}>
                        Добавить
                    </span>
                </button>
                <button
                    type='button'
                    onClick={() => cancel()}
                    className={styles.btnReject}
                >
                    <span className={styles.btnText}>
                        Отменить
                    </span>
                </button>
            </div>
            {/* <fieldset className={styles.fieldset}>
                <input className={styles.addInput}
                    type="text"
                    name='title'
                    placeholder='Заголовок'
                    ref={addTitleInputRef}
                />
                <input className={styles.addInput}
                    type='text'
                    name='text'
                    placeholder='Пояснение'
                    ref={addTextInputRef}
                />
            </fieldset>
            <div>
                <button
                    type='button'
                    onClick={() => addTodo()}
                    className={styles.btnAdd}
                >Сохранить</button>
                <button
                    type='button'
                    onClick={() => onReject()}
                    className={styles.btnReject}
                >Отмена</button>
            </div> */}
        </form>
    )
}

export default AddForm;