import { CREATE_TASK, DELETE_TASK, INIT_TASK } from '../actions'
import axios from 'axios'

export type TaskType = {
    id: number
    todo: string
    limit: string
}

export type Action = {
    type: string
    payload: TaskType[]
}

const tasks = (state: TaskType[], action: Action) => {
    switch(action.type) {
        case INIT_TASK:
            return action.payload;
        
        case CREATE_TASK:
            const taskItem = { todo: action.payload[0].todo, limit: action.payload[0].limit }
            const length = state.length
            const id = length === 0 ? 1 : Math.max(...state.map((p) => p.id)) + 1

            axios.post('http://localhost:3001/todos',{ id: id, ...taskItem }).then(response => {
            console.log(response)
            })
        
            return [...state, { id: id, ...taskItem }].sort(function(a, b) {
                a.limit = a.limit === undefined ? '' : a.limit
                b.limit = b.limit === undefined ? '' : b.limit
                return (a.limit < b.limit) ? -1 : 1;  //オブジェクトの昇順ソート
            })
        case DELETE_TASK:
            axios.delete(`http://localhost:3001/todos/${action.payload[0].id}`).then(response => {})
            return state.filter(task => task.id !== action.payload[0].id)
        case 'DELETE_ALL_TASKS':
            return []
        default:
            return state
    }
}

export default tasks