import { v4 as uuidv4 } from 'uuid';

const TODOS = [
    {
        id: uuidv4(),
        todo:"Doing homework",
        isCompleted: false,
        isDeleted: false,
    },
    {
        id: uuidv4(),
        todo:"Go to sleep",
        isCompleted: false,
        isDeleted: false,
    },
    {
        id: uuidv4(),
        todo:"Play game",
        isCompleted: false,
        isDeleted: false,
    },
];

export default TODOS;