import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import { DELETE_TASK } from '../actions'
import { DispatchContext } from '../contexts/AppContext'
import { TaskType } from '../reducers'
import { Action } from '../reducers'

type TaskProps = {
    key: number
    task: TaskType
}

const Task = (props: TaskProps) => {
    const dispatchValue: React.Dispatch<Action> | undefined = useContext(DispatchContext)

    const id = props.task.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`タスク(id=${id})を本当に削除しても良いですか？`)
        if (result && dispatchValue) dispatchValue({ type: DELETE_TASK, payload: [{id: id, todo:'', limit: ''}]})
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
