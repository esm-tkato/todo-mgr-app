import React from 'react'
import { Table } from 'react-bootstrap'

import Task from './Task'

type task = {
    id: number
    todo?: string
    limit?: string
}

type DispatchAction = {
    type: string
    id: number
}

type TaskProps = {
    state: task[]
    dispatch: React.Dispatch<DispatchAction>
}

const Tasks = (props: TaskProps) => {
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
                { props.state.map((task, index) => (<Task key={index} task={task} dispatch={props.dispatch}/>))}
            </tbody>
            </Table>
        </>
    )
}

export default Tasks