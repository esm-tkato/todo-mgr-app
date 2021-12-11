import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap'

import TaskForm from './TaskForm'
import Tasks from './Tasks'
import AppContext, { appContextType } from '../contexts/AppContext'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const appContextValue: appContextType = {
    state: state,
    dispatch: dispatch
  }

  return (
    <AppContext.Provider value={appContextValue}>
      <Container fluid>
        <TaskForm />
        <Tasks />
      </Container>
    </AppContext.Provider>
  )
}

export default App
