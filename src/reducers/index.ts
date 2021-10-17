const todos = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_TODO':
            const todo = { todo: action.todo, limit: action.limit }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id: id, ...todo }]
        case 'DELETE_TODO':
            return state
        case 'DELETE_ALL_TODOS':
            return []
        default:
            return state
    }
}

export default todos