import React from 'react'
import { Form,Col,Row,Button } from 'react-bootstrap'

 function SearchForm() {
  
  return (
    <Form className="mb-4">
    <Row className="align-items-end">
      <Form.Group as={Col}>
        <Form.Label>Job Description</Form.Label>
        <Form.Control name="description" type="text"  />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Location</Form.Label>
        <Form.Control  name="location" type="text" />
      </Form.Group>
      <Form.Group as={Col} xs="auto" className="ml-2">
        <Form.Check  name="full_time" id="full-time" label="Full Time Only " type="checkbox" className="mb-2" />
      </Form.Group>
      <Form.Group as={Col}>
      <Button variant="primary" active size="lg">Search</Button>{' '}
      </Form.Group>
    </Row>
      
  </Form>
  )
}
export default SearchForm;