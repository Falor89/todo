import styles from './todoContainer.module.css';

import data from '../../utils/data';
import TodoItem from '../TodoItem/TodoItem';
import Modal from '../Modal/Modal';
import AddForm from '../forms/AddForm/AddForm';
import TodoDetails from '../TodoDetails/TodoDetails';

import { useEffect, useState } from 'react';



const TodoContainer = () => {
    const [todos, setTodos] = useState(data)
    const [addModal, setAddModal] = useState(false)
    const [todoDetails, setTodoDetails] = useState(false)
    const [detailsModal, setDetailsModal] = useState({})
    const someTodos = todos.filter(todo => todo.isComplited)

    const checkboxChange = (id) => {
        const current = [...todos].find((item) => item._id === id)
        current.isComplited = !current.isComplited
        setTodos([...todos])
    }

    const openModal = () => {
        setAddModal(true)
    }

    const closeModal = () => {
        setAddModal(false)
        setTodoDetails(false)
    }

    const openModalDetails = (item) => {
        setTodoDetails(true)
        setDetailsModal(item)
    }

    const onDelete = (id) => {
        setTodos([...todos].filter((todo) => todo._id !== id))
    }

    const deleteAll = () => {
        setTodos([...todos].filter((todo) => !todo.isComplited))
    }

    useEffect(() => {
        localStorage.getItem('todos')
    }, [todos])
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Tasks</h2>
            <ul className={styles.list}>
                {
                    todos.length < 1 ?
                        <span className={styles.hideText}>Здесь будут ваши задачи</span>
                        :
                        todos.map((todo) => (
                            <TodoItem todo={todo}
                                onChange={checkboxChange}
                                key={todo._id}
                                openModal={openModalDetails}
                                onDelete={onDelete}
                            />
                        ))
                }
            </ul>
            <div className={styles.buttonContainer}>
                <button
                    className={styles.btnAdd}
                    onClick={() => openModal()}
                >
                    <span className={styles.btnText}>
                        Добавить ToDo
                    </span>
                </button>
                {
                    someTodos.length >= 2 &&
                    <button
                        className={styles.btnAdd}
                        onClick={() => deleteAll()}
                    >
                        <span className={styles.btnText}>
                            Удалить выбранные
                        </span>
                    </button>
                }
            </div>
            {
                addModal && (
                    <Modal onClose={closeModal} title='Добавить Todo'>
                        <AddForm todos={todos} setTodos={setTodos} onClose={closeModal} />
                    </Modal>
                )
            }
            {
                todoDetails && (
                    <Modal onClose={closeModal} title='Todo'>
                        <TodoDetails todo={detailsModal} onClose={closeModal} />
                    </Modal>
                )
            }
        </section>
    )
}

export default TodoContainer