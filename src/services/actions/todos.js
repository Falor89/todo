

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const ADD_NEW_GROUP = 'ADD_NEW_GROUP'

export const ADD_NEW_GROUP_TASK = 'ADD_NEW_GROUP_TASK'
export const TOGGLE_GROUP_TASK = 'TOGGLE_GROUP_TASK'

export function toggleTodo(id) {
    return function (dispatch) {
        dispatch({
            type: TOGGLE_TODO,
            id: id
        })
    }
}

export function addNewGroup(group) {
    return function (dispatch) {
        dispatch({
            type: ADD_NEW_GROUP,
        })
        console.log(group)
    }
}

export function toggleGroupTask(id, taskId) {
    return function (dispatch) {
        dispatch({
            type: TOGGLE_GROUP_TASK,
            id: taskId,
            taskId: id,
        })
    }
}

export function addNewGroupTask(id) {
    return function (dispatch) {
        dispatch({
            type: ADD_NEW_GROUP_TASK,
            todoId: id
        })
        console.log(id)
    }
}
