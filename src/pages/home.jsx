import styles from './pages.module.css'

import { useDispatch, useSelector } from 'react-redux'

import { TodoGroup } from '../components/TodoGroup/TodoGroups'
import { TodoData } from '../components/TodoData/TodoData'

export const HomePage = () => {
    const dispatch = useDispatch()
    const { todos } = useSelector(store => store.todos)

    const todosEmpty = todos.filter((todo) => todo.isComplited === false)
    const todosDone = todos.filter((todo) => todo.isComplited === true)


    return (
        <section className={styles.main}>
            <TodoData
                todos={todosEmpty}
                inputType='close'
            />
            <TodoGroup />
            <TodoData
                todos={todosDone}
                inputType='done'
            />
        </section >
    )
}