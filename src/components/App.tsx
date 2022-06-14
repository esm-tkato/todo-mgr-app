import { useReducer, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import TaskForm from './TaskForm'
import Tasks from './Tasks'
import { StateContext, DispatchContext } from '../contexts/AppContext'
import reducer from '../reducers'
import { INIT_TASK } from '../actions'
import axios from 'axios'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    //http getリクエストをurlを書く
    axios.get('http://localhost:3001/todos')
    //リクエストに成功した場合
    .then(res =>{
    //dispatch関数を呼び、type:には'FETCH_SUCCESS'、payloadには受け取ったデータを代入する
      dispatch({type: INIT_TASK, payload: res.data})
    })
  }, [])

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
