import React, { MouseEvent, useReducer, useState } from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap'

import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [toDo, setToDo] = useState('')
  const [limit, setLimit] = useState('')

  const addToDo = (e: MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault()

    dispatch({
      type: 'CREATE_TODO',
      toDo,
      limit
    })

    setToDo('')
    setLimit('')
  }

  console.log({state})

  return (
    <Container fluid>
      <h4>タスク管理</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formInputText1">
          <Form.Label>ToDo</Form.Label>
          <Form.Control type="text" placeholder="Enter ToDo" value={toDo} onChange={e => setToDo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInputDate1">
          <Form.Label>期限</Form.Label>
          <Form.Control type="date" value={limit} onChange={e => setLimit(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addToDo}>
          ToDo追加
        </Button>
      </Form>

      <h4>ToDo一覧</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>ToDo</th>
            <th>期限</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    </Container>
  )
}

export default App
