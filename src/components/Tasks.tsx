import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'

import Task from './Task'
import AppContext, { appContextType } from '../contexts/AppContext'

const Tasks = () => {
    const appContextValue: appContextType | undefined = useContext(AppContext)

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
                { appContextValue && appContextValue.state.map((task, index) => (<Task key={index} task={task} />))}
            </tbody>
            </Table>
        </>
    )
}

export default Tasks