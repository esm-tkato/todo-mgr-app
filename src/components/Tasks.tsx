import React, { useContext, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

import Task from './Task'
import { StateContext } from '../contexts/AppContext'
import { task } from '../reducers'
import { INIT_TASK } from '../actions'
import { DispatchContext } from '../contexts/AppContext'
import { action } from '../reducers'

const Tasks = () => {
    const dispatchValue: React.Dispatch<action> | undefined = useContext(DispatchContext)
    useEffect(() => {
        async function fetchToDos() {
            if (dispatchValue) await dispatchValue({ type: INIT_TASK})
        }
        fetchToDos()
    }, [dispatchValue])

    const stateValue: task[] | undefined = useContext(StateContext)
    console.log('stateValue:', stateValue)

    return (
        <>
        <h4 style={{margin: 10}}>タスク一覧</h4>
        <Container fluid>
          <Row>
            <Col>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>ToDo</th>
                <th>期限</th>
                <th>削除</th>
                </tr>
            </thead>
            <tbody>
                { stateValue && stateValue.map((task, index) => (<Task key={index} task={task} />))}
            </tbody>
            </Table>
            </Col>
          </Row>
        </Container>
        </>
    )
}

export default Tasks