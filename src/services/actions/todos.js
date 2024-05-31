

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const ADD_NEW_GROUP = 'ADD_NEW_GROUP'

export const ADD_NEW_GROUP_TASK = 'ADD_NEW_GROUP_TASK'
export const TOGGLE_GROUP_TASK = 'TOGGLE_GROUP_TASK'

export const CHANGE_NAME_GROUP_TASK = 'CHANGE_NAME_GROUP_TASK'
export const CHANGE_NAME_TODO_ITEM = 'CHANGE_NAME_TODO_ITEM'

export const DELETE_GROUP_TASK = 'DELETE_GROUP_TASK'
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM'

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

export function changeNameTodo(id, taskId, value) {
    return function (dispatch) {
        id ?
            dispatch({
                type: CHANGE_NAME_GROUP_TASK,
                id: id,
                taskId: taskId,
                title: value
            })
            :
            dispatch({
                type: CHANGE_NAME_TODO_ITEM,
                id: taskId,
                title: value
            })
    }
}

export function deleteTodo(id, todoId) {
    return function (dispatch) {
        console.log({
            id: todoId,
            taskId: id
        })
        todoId ?
            dispatch({
                type: DELETE_GROUP_TASK,
                id: todoId,
                taskId: id
            })
            :
            dispatch({
                type: DELETE_TODO_ITEM,
                id: id
            })
    }
}