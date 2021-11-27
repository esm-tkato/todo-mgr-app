import React from 'react'
import { Button } from 'react-bootstrap'

import { DELETE_TASK } from '../actions'

type TaskType = {
    id: number
    todo?: string
    limit?: string
}

type DispatchAction = {
    type: string
    id: number
}

type TaskProps = {
    dispatch: React.Dispatch<DispatchAction>
    task: TaskType
}

const Task = (props: TaskProps) => {
    const id = props.task.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`タスク(id=${id})を本当に削除しても良いですか？`)
        if (result) props.dispatch({ type: DELETE_TASK, id: id})
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{props.task.todo}</td>
            <td>{props.task.limit}</td>
            <td><Button variant="danger" type="button" onClick={handleClickDeleteButton}>削除</Button></td>
        </tr>
    )
}

export default Task
