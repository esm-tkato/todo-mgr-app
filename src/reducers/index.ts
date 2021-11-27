import { CREATE_TASK, DELETE_TASK } from '../actions'

export type task = {
    id: number
    todo?: string
    limit?: string
}

export type action = {
    type: string
    id?: number
    toDo?: string
    limit?: string
}

const tasks = (state: task[], action: action) => {
    switch(action.type) {
        case CREATE_TASK:
            const taskItem = { todo: action.toDo, limit: action.limit }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id: id, ...taskItem }]
        case DELETE_TASK:
            return state.filter(task => task.id !== action.id)
        case 'DELETE_ALL_TASKS':
            return []
        default:
            return state
    }
}

export default tasks