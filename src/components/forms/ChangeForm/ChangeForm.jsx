import styles from './changeForm.module.css';

import { useState } from 'react';

const ChangeFrom = ({ todo, close, onClose }) => {
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

    const cancel = () => {
        setInputState()
        close(false)
    }

    const changeTodo = () => {
        todo.title = inputState.title.value;
        todo.text = inputState.text.value
        inputState.title.value = ''
        inputState.text.value = ''
        onClose()
    }
    return (
        <form className={styles.form}>
            <fieldset className={styles.fieldset}>
                <input className={styles.addInput}
                    type="text"
                    name='title'
                    placeholder='Заголовок'
                    onChange={(e) => onChange(e, 'title')}
                    value={inputState.title.value}

                />
                <input className={styles.addInput}
                    type='text'
                    name='text'
                    placeholder='Пояснение'
                    onChange={(e) => onChange(e, 'text')}
                    value={inputState.text.value}
                />
            </fieldset>
            <div>
                <button
                    type='button'
                    className={styles.btnAdd}
                    onClick={() => changeTodo()}
                >
                    <span className={styles.btnText}>
                        Сохранить
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
        </form>
    )
}

export default ChangeFrom;