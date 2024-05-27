import { loginRequest } from "../../utils/api";

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

export function login(body) {
    return function (dispatch) {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        loginRequest(body)
            .then((data) => {
                dispatch({
                    type: USER_LOGIN_SUCCESS,
                    user: data.user,
                    accessToken: data.accessToken,
                })
            })
            .catch((err) => {
                dispatch({ USER_LOGIN_ERROR })
            })
    }
}