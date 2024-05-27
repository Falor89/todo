import { data } from "../../utils/data";
import { v4 as uuidv4 } from 'uuid';
import { TOGGLE_TODO, ADD_NEW_GROUP, TOGGLE_GROUP_TASK, ADD_NEW_GROUP_TASK } from "../actions/todos";

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
        default: {
            return state
        }
    }
}