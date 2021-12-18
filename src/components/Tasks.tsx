import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'

import Task from './Task'
import { StateContext } from '../contexts/AppContext'
import { task } from '../reducers'

const Tasks = () => {
    const stateValue: task[] | undefined = useContext(StateContext)
    // console.log(stateValue)

    return (
        <>
            <h4>タスク一覧</h4>
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
        </>
    )
}

export default Tasks