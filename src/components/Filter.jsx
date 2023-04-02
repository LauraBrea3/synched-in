import React from 'react'
import Form from 'react-bootstrap/Form'

export default function Filter (props) {

    return (
        <Form>
            <Form.Label htmlFor="devLevel-select">Filter by developer level: </Form.Label>
            <Form.Select id="devLevel-select">
            <option value="">No filter</option>
            </Form.Select>
        </Form>
    )
}
