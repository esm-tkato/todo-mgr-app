// import React, { useReducer, useEffect } from 'react'
import { useReducer } from 'react'
import { Container } from 'react-bootstrap'

import TaskForm from './TaskForm'
import Tasks from './Tasks'
import { StateContext, DispatchContext } from '../contexts/AppContext'
import reducer from '../reducers'
// import { INIT_TASK } from '../actions'
import { task } from '../reducers'
import axios from 'axios'

const App = () => {
  let todos: task[] = []
  function get_data() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/todos')
            .then(response => {
              let result: task[] = response.data;
              console.log('result):', result)
              resolve(result);
            })
            .catch(error => {
                reject(error);
            })
            .then(() => {
                // 特になし
            })
    })
  }
  async function get_tasks() {
    todos = await get_data() as task[];    
  }

  get_tasks();

  // const initialState = {
  //   state: todos
  // }
  const [state, dispatch] = useReducer(reducer, todos);

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
