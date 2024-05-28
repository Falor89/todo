import { data } from "../../utils/data";
import { v4 as uuidv4 } from 'uuid';
import {
    TOGGLE_TODO, ADD_NEW_GROUP, TOGGLE_GROUP_TASK, ADD_NEW_GROUP_TASK, CHANGE_NAME_GROUP_TASK,
    CHANGE_NAME_TODO_ITEM, DELETE_GROUP_TASK, DELETE_TODO_ITEM
} from "../actions/todos";

const initialState = {
    todos: data,
    groupTodos: [],
    isLoading: false,
    hasError: false
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TODO: {
            function toggle() {
                [...state.todos].find((todo) => todo._id === action.id).isComplited = ![...state.todos].find((todo) => todo._id === action.id).isComplited
                return [...state.todos]
            }
            return {
                ...state,
                todos: toggle()
            }
        }
        case ADD_NEW_GROUP: {

            return {
                ...state,
                groupTodos: [...state.groupTodos, {
                    title: 'Новая группа',
                    _id: uuidv4(),
                    tasks: [{
                        title: 'Новая задача',
                        isComplited: false,
                        _id: uuidv4()
                    }]
                }]
            }
        }

        case TOGGLE_GROUP_TASK: {
            function toggle() {
                [...state.groupTodos]
                    .find((item) => item._id === action.id).tasks.find((task) => task._id === action.taskId).isComplited = ![...state.groupTodos].find((item) => item._id === action.id).tasks.find((task) => task._id === action.taskId).isComplited
                return [...state.groupTodos]
            }
            return {
                ...state,
                groupTodos: toggle()
            }
        }

        case ADD_NEW_GROUP_TASK: {
            function addTask() {
                [...state.groupTodos]
                    .find((todo) => todo._id === action.todoId).tasks.push({
                        title: 'Новая задача',
                        isComplited: false,
                        _id: uuidv4()
                    })


                return [...state.groupTodos]
            }
            return {
                ...state,
                groupTodos: addTask()
            }
        }
        case CHANGE_NAME_GROUP_TASK: {
            function changeNameTask() {
                [...state.groupTodos]
                    .find((todo) => todo._id === action.id)
                    .tasks.find((task) => task._id === action.taskId).title = action.title
                return [...state.groupTodos]
            }
            return {
                ...state,
                groupTodos: changeNameTask()
            }
        }
        case CHANGE_NAME_TODO_ITEM: {
            function changeNameTodo() {
                [...state.todos].find((todo) => todo._id === action.id).title = action.title
                return [...state.todos]
            }
            return {
                ...state,
                todos: changeNameTodo()
            }
        }
        case DELETE_GROUP_TASK: {
            function deleteGroupTask() {
                const updateGroup = state.groupTodos.map((group) => {
                    if (group._id === action.id) {
                        const updateTasks = group.tasks.filter((task) => task._id !== action.taskId)
                        return { ...group, tasks: updateTasks }
                    }
                    return group
                })
                return updateGroup
            }
            return {
                ...state,
                groupTodos: deleteGroupTask()
            }
        }
        case DELETE_TODO_ITEM: {
            function deleteTodoItem() {
                [...state.todos].filter((todo) => todo._id !== action.id)
                return [...state.todos]
            }
            return {
                ...state,
                todos: [...state.todos].filter((todo) => todo._id !== action.id)
            }
        }
        default: {
            return state
        }
    }
}