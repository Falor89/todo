import { v4 as uuidv4 } from "uuid";

const data = [
    {
        title: 'Learn HTML',
        text: 'Tags',
        isComplited: true,
        _id: uuidv4(),
    },
    {
        title: 'Learn CSS3',
        text: 'Grid, Flexbox',
        isComplited: false,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: true,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: false,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: false,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: false,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: false,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: false,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: false,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: false,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: false,
        _id: uuidv4(),
    },
    {
        title: 'Learn JavaScript',
        text: 'Array, object',
        isComplited: false,
        _id: uuidv4(),
    },
]

function getData() {
    return data
}

export { getData, data }