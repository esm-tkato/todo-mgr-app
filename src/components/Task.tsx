import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import { DELETE_TASK } from '../actions'
import AppContext, { appContextType } from '../contexts/AppContext'
import { task } from '../reducers'

type TaskProps = {
    key: number
    task: task
}

const Task = (props: TaskProps) => {
    const appContextValue: appContextType | undefined = useContext(AppContext)

    const id = props.task.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`タスク(id=${id})を本当に削除しても良いですか？`)
        if (result && appContextValue) appContextValue.dispatch({ type: DELETE_TASK, id: id})
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
