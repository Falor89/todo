const api = 'https://dummyjson.com/todos'

const parseResponse = (res, message = '') => {
    return res.ok ? res.json() : Promise.reject({
        error: res.status,
        message: message
    })
}

const getTodos = () => {
    return fetch(`${api}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(parseResponse)
}


export { getTodos }