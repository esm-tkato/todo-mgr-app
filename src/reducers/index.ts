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
            const id = length === 0 ? 1 : Math.max(...state.map((p) => p.id)) + 1
        
            return [...state, { id: id, ...taskItem }].sort(function(a, b) {
                a.limit = a.limit === undefined ? '' : a.limit
                b.limit = b.limit === undefined ? '' : b.limit
                return (a.limit < b.limit) ? -1 : 1;  //オブジェクトの昇順ソート
            })
        case DELETE_TASK:
            return state.filter(task => task.id !== action.id)
        case 'DELETE_ALL_TASKS':
            return []
        default:
            return state
    }
}

export default tasks