const parseResponse = (res, message = '') => {
    return res.ok ? res.json() : Promise.reject({
        error: res.status,
        message: message
    })
}


const loginRequest = (body) => {
    return fetch('https://norma.nomoreparties.space/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(parseResponse)
}


export { loginRequest }