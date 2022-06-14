import { createContext } from 'react'
import { TaskType, Action } from '../reducers'

export const StateContext = createContext<TaskType[] | undefined>(undefined)
export const DispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined)
