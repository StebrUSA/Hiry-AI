import React from 'react'
import { Row, Col } from "reactstrap"

const TestFooter = () => {
    return (
        <Row className='bg-dark test-footer g-0'>
            <Col xxl={12} xl={12} sm={12} lg={12} md={12} className="d-flex gap-2 align-items-center justify-content-end">
                <button type="button" className="btn btn-primary me-2">
                    Previous
                </button>
                <button type="button" className="btn btn-primary me-2">
                    Next
                </button>
                <button type="button" className="btn btn-primary me-2">
                    Submit
                </button>
            </Col>
        </Row>
    )
}

export default TestFooter;