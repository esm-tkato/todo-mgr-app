type toDoItem = {
    id: number
    todo: string | undefined
    limit: string | undefined
}

type action = {
    type: string
    toDo: string
    limit: string
}

const todos = (state:toDoItem[], action: action) => {
    switch(action.type) {
        case 'CREATE_TODO':
            const toDoItem = { todo: action.toDo, limit: action.limit }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id: id, ...toDoItem }]
        case 'DELETE_TODO':
            return state
        case 'DELETE_ALL_TODOS':
            return []
        default:
            return state
    }
}

export default todos