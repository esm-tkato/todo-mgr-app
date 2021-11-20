import React, { MouseEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

type task = {
    id: number
    todo?: string
    limit?: string
}

type DispatchAction = {
    type: string
    toDo: string
    limit: string
}

type TaskProps = {
    state: task[]
    dispatch: React.Dispatch<DispatchAction>
}

const TaskForm = (props: TaskProps) => {
    const [toDo, setToDo] = useState('')
    const [limit, setLimit] = useState('')
  
    const addToDo = (e: MouseEvent<HTMLButtonElement> ) => {
      e.preventDefault()
  
      props.dispatch({
        type: 'CREATE_TASK',
        toDo,
        limit
      })
  
      setToDo('')
      setLimit('')
    }
  
    const unCreatable = toDo === '' || limit === ''
  
    return (
        <>
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
            <Button variant="primary" type="button" onClick={addToDo} disabled={unCreatable}>
                タスク追加
            </Button>
            </Form>
        </>
    )
}

export default TaskForm