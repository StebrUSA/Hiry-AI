import React from "react";
import { Col, Row } from "reactstrap";

const CodingQuestionFormat = () => {
  const n = 5;
  return (
    <>
      <div className="mt-2">
        Implement a function that returns an updated array with r right
        rotations on an array of integers a .
        <div className="fs-13 fw-bold mt-2">Example</div>
        <p className="text-muted mt-2">n = 24</p>
        <p className="text-muted">
          The number 24 is not a prime number,its divisors are [1,2,3,4]
        </p>
        <div className="fs-13 fw-bold mt-4">Function Description</div>
        <p className="text-muted mt-2">
          {" "}
          The number 24 is not a prime number,its divisors are [1,2,3,4]
        </p>
        <div className="fs-13 fw-bold mt-4">Constraints</div>
        <p className="text-muted mt-2">
          {" "}
          2 ≤ n ≤ n<sup>12</sup>{" "}
        </p>
        <div className="bg-light px-2 py-2 fw-semibold rounded-2 d-flex align-items-center">
          Input Format for Custom Testing
        </div>
        <div className="fs-13 fw-bold mt-3">Sample Case</div>
        <div className="fs-13 mt-2 text-decoration-underline">Input</div>
        <Row>
          <Col xl={3}>
            <div className=" mt-4">
              <h5 className="fs-14">STDIN</h5>
              <p className="text-muted">2</p>
            </div>
          </Col>

          <Col xl={3}>
            <div className="mt-4">
              <h5 className="fs-14">FUNCTION</h5>
              <p className="text-muted">n = 2</p>
            </div>
          </Col>
        </Row>
        <div className="fs-13 text-decoration-underline">Output</div>
        <p className="text-muted mt-2">2</p>
      </div>
    </>
  );
};

export default CodingQuestionFormat;
