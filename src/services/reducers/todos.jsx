import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from "../actions/todos";

const initialState = {
    todos: [],
    isError: false,
    isLoading: false,
}


export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST: {
            return { ...state, isLoading: true }
        }
        case GET_TODOS_SUCCESS: {
            return { ...state, isLoading: false, isError: false, todos: action.todos }
        }
        case GET_TODOS_ERROR: {
            return { ...state, isLoading: false, isError: true }
        }
        case TOGGLE_TODO: {
            return { ...state, todos: [...state.todos].find(item => item.id === action.id ? { item } : {}) }
        }
        default: {
            return state
        }
    }
}