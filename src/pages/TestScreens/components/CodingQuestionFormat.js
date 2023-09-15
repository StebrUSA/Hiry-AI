import React from "react";
import { Col, Row } from "reactstrap";
import mockData from "../../../common/data/Testjson/questionmockdata.json"; // Import the mock data from the JSON file

const CodingQuestionFormat = () => {
  // Access the data from the imported JSON
  const {
    question,
    sampleCase: { input, output },
  } = mockData;

  return (
    <>
      <div className="mt-2">
        {/* Use the imported data */}
        <div className="fs-13 fw-bold mt-2">Description</div>
        <p className="text-muted mt-2">{question.description}</p>

        <div className="fs-13 fw-bold mt-2">Example</div>
        <p className="text-muted mt-2">Input: {question.example.input}</p>
        <p className="text-muted">Output: {question.example.output}</p>

        <div className="fs-13 fw-bold mt-2">Function Description</div>
        <p className="text-muted mt-2">{question.functionDescription}</p>

        <div className="fs-13 fw-bold mt-2">Constraints</div>
        <p className="text-muted mt-2">{question.constraints}</p>

        <div className="bg-light px-2 py-2 fw-semibold rounded-2 d-flex align-items-center">
          {question.inputFormat}
        </div>

        <div className="fs-13 fw-bold mt-2">Sample Case</div>
        <div className="fs-13 mt-2 text-decoration-underline">Input</div>
        <Row>
          <Col xl={3}>
            <div className="mt-4">
              <h5 className="fs-14">STDIN</h5>
              <p className="text-muted">{input.STDIN}</p>
            </div>
          </Col>

          <Col xl={3}>
            <div className="mt-4">
              <h5 className="fs-14">FUNCTION</h5>
              <p className="text-muted">{input.FUNCTION}</p>
            </div>
          </Col>
        </Row>

        <div className="fs-13 text-decoration-underline">Output</div>
        <p className="text-muted mt-2">{output}</p>
      </div>
    </>
  );
};

export default CodingQuestionFormat;
