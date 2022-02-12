import { CREATE_TASK, DELETE_TASK, INIT_TASK } from '../actions'
import axios from 'axios'

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
        case INIT_TASK:
            let todos: task[] = []
            axios.get('http://localhost:3001/todos')
            .then(response => {
              todos = response.data;
              console.log('todos(resonse):', todos)
            })
            console.log('todos:', todos)
            return todos
        
        case CREATE_TASK:
            const taskItem = { todo: action.toDo, limit: action.limit }
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
            axios.delete(`http://localhost:3001/todos/${action.id}`).then(response => {})
            return state.filter(task => task.id !== action.id)
        case 'DELETE_ALL_TASKS':
            return []
        default:
            return state
    }
}

export default tasks