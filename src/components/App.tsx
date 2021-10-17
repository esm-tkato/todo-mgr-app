import React from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap'

const App = () => {
  return (
    <Container fluid>
      <h4>タスク管理</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formInputText1">
          <Form.Label>ToDo</Form.Label>
          <Form.Control type="text" placeholder="Enter ToDo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInputDate1">
          <Form.Label>期限</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <h4>ToDo一覧</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>ToDo</th>
            <th>期限</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    </Container>
  )
}

export default App
