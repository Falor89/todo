import styles from './pages.module.css'


import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data } from '../utils/data'
import { Check } from '../ui/checkbox/checkB'
import { addNewGroup, toggleTodo } from '../services/actions/todos'
import { TodoItem } from '../components/TodoItem/TodoItem'
import { TodoGroup } from '../components/TodoGroup/TodoGroups'

export const HomePage = () => {
    const dispatch = useDispatch()
    const { todos, groupTodos } = useSelector(store => store.todos)

    const onChange = (id) => {
        dispatch(toggleTodo(id))
    }

    return (
        <section className={styles.main}>
            {console.log(groupTodos)}
            <ul className={styles.todoList}>
                {
                    todos.map((todo) => {
                        if (todo.isComplited === false) {
                            return <TodoItem
                                todo={todo}
                                onChange={onChange}
                            />
                        }
                    })
                }
            </ul>
            <TodoGroup />
            <ul className={styles.todoList}>

                {
                    todos.map((todo) => {
                        if (todo.isComplited === true) {
                            return <TodoItem
                                todo={todo}
                                onChange={onChange}
                            />
                        }
                    })
                }
            </ul>
        </section >
    )
}