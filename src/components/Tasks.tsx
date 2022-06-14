import { useContext } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

import Task from './Task'
import { StateContext } from '../contexts/AppContext'
import { TaskType } from '../reducers'

const Tasks = () => {
    const stateValue: TaskType[] | undefined = useContext(StateContext)
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