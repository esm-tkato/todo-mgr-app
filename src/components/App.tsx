import React, { useReducer, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import TaskForm from './TaskForm'
import Tasks from './Tasks'
import { StateContext, DispatchContext } from '../contexts/AppContext'
import reducer from '../reducers'
import { INIT_TASK } from '../actions'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  // useEffect(() => {
  //   dispatch({ type: INIT_TASK})
  // }, [])

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
