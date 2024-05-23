import { v4 as uuidv4 } from "uuid";
import { getTodos } from "../../utils/api";


export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';


export function loadingTodos() {
    return function (dispatch) {
        dispatch({
            type: GET_TODOS_REQUEST
        })
        fetch('https://dummyjson.com/todos')
            .then((res) => {
                if (res && res.success) {
                    res.json()
                }
            })
            .then((res) => {
                dispatch({
                    type: GET_TODOS_SUCCESS,
                    todos: res.todos
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_TODOS_ERROR
                })
            })
    }
}

export function loadTodos() {
    return function (dispatch) {
        dispatch({
            type: GET_TODOS_REQUEST
        })
        getTodos().then((res) => {
            dispatch({
                type: GET_TODOS_SUCCESS,
                todos: res.todos
            })
        })
            .catch((err) => {
                dispatch({
                    type: GET_TODOS_ERROR,
                })
            })
    }
}