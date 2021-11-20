import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap'

import TaskForm from './TaskForm'
import Tasks from './Tasks'

import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <Container fluid>
      <TaskForm state={state} dispatch={dispatch} />
      <Tasks state={state} dispatch={dispatch} />
    </Container>
  )
}

export default App
