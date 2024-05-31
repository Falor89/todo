import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from "../actions/user";

const initialState = {
    isLoading: false,
    hasError: false,
    authorization: false,
    user: {
        username: '',
        email: ''
    },
    accessToken: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                hasError: false,
            }
        }
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                authorization: true,
                isLoading: false,
                hasError: false,
                user: {
                    username: action.user.name,
                    email: action.user.email
                },
                accessToken: action.accessToken
            }
        }
        case USER_LOGIN_ERROR: {
            return {
                ...state,
                authorization: false,
                hasError: true,
            }
        }
        default:
            return state
    }
}