import { createContext } from 'react'
import { task, action } from '../reducers'

export const StateContext = createContext<task[] | undefined>(undefined)
export const DispatchContext = createContext<React.Dispatch<action> | undefined>(undefined)
