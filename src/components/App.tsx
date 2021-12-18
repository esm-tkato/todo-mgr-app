import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap'

import TaskForm from './TaskForm'
import Tasks from './Tasks'
import { StateContext, DispatchContext } from '../contexts/AppContext'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Container fluid>
          <TaskForm />
          <Tasks />
        </Container>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
