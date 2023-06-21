import React from 'react'
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import CodingQuestionType from './CodingQuestionType';

const TestContent = () => {
  return (
    <Row className='g-0'>
      <Col xl={3} xxl={3} sm={3} md={3} lg={3} className='test-section'>
        <Card style={{ height: 'inherit' }}>
          <CardHeader className="fw-bold fs-16">Question 1</CardHeader>
          <CardBody className="question">
            {/* Add your question content here */}
            Write a statement to declare and initialize an array named
            denominations that contains exactly six elements of type int.
            Your declaration statement should initialize the elements of the
            array to the following values: 1, 5, 10, 25, 50, 100. (The value
            1 goes into the first element, the value 100 to the last.)
          </CardBody>
        </Card>
      </Col>
      <Col xl={9} xxl={9} sm={9} md={9} lg={9} className='test-section'>
        <Card style={{ height: 'inherit' }}>
          <CardHeader className="fw-bold fs-16">Code Editor</CardHeader>
          <CardBody className="code-editor-card">
            {" "}

            {/* Integrate depending upon the question condition */}
            <CodingQuestionType />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default TestContent