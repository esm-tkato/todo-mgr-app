import React, { MouseEvent, useContext, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import { CREATE_TASK } from '../actions'
import { DispatchContext } from '../contexts/AppContext'
import { action } from '../reducers'

const TaskForm = () => {
    const dispatchValue: React.Dispatch<action> | undefined = useContext(DispatchContext)
    const [toDo, setToDo] = useState('')
    const [limit, setLimit] = useState('')
  
    const addToDo = (e: MouseEvent<HTMLButtonElement> ) => {
      e.preventDefault()
  
      if (dispatchValue) {dispatchValue({
        type: CREATE_TASK,
        toDo,
        limit
      })}
  
      setToDo('')
      setLimit('')
    }
  
    const unCreatable = toDo === '' || limit === ''
  
    return (
        <>
            <h4 style={{margin: 10}}>タスク管理</h4>
            <Form>
            <Container fluid>
            <Row>
            <Form.Group className="mb-3" controlId="formInputText1">
                <Form.Label>ToDo</Form.Label>
                <Form.Control type="text" placeholder="Enter ToDo" value={toDo} onChange={e => setToDo(e.target.value)} />
            </Form.Group>
            </Row>
            <Row>
            <Col md={3}>
            <Form.Group className="mb-3" controlId="formInputDate1">
                <Form.Label>期限</Form.Label>
                <Form.Control type="date" value={limit} onChange={e => setLimit(e.target.value)} />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={3}>
            <Button variant="primary" type="button" onClick={addToDo} disabled={unCreatable}>
                タスク追加
            </Button>
            </Col>
            </Row>
            </Container>
            </Form>
        </>
    )
}

export default TaskForm