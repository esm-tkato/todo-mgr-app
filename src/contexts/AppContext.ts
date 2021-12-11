import { createContext } from 'react'
import { task, action } from '../reducers'

export type appContextType = {
    state: task[]
    dispatch: React.Dispatch<action>
}

const AppContext = createContext<appContextType | undefined>(undefined)

export default AppContext