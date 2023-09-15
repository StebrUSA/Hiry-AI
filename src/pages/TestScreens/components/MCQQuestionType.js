import React from "react";
import { Input, Col, Label, Row } from "reactstrap";
import { Link } from "react-router-dom";

const MCQQuestionType = () => {
  return (
    <>
      <Col md={12}>
        <div className="form-check form-check-secondary mb-4">
          <Input className="form-check-input" type="checkbox" id="formCheck7" />
          <Label className="form-check-label" for="formCheck7">
            To update the component's state and re-render the component.
          </Label>
        </div>
        <div className="form-check form-check-secondary mb-4">
          <Input className="form-check-input" type="checkbox" id="formCheck7" />
          <Label className="form-check-label" for="formCheck7">
            To change the component's class name.
          </Label>
        </div>
        <div className="form-check form-check-secondary mb-4">
          <Input className="form-check-input" type="checkbox" id="formCheck7" />
          <Label className="form-check-label" for="formCheck7">
            To update the component's props.
          </Label>
        </div>
        <div className="form-check form-check-secondary mb-4">
          <Input className="form-check-input" type="checkbox" id="formCheck7" />
          <Label className="form-check-label" for="formCheck7">
            All of the above
          </Label>
        </div>
      </Col>
      <Row>
        <Col md={12}>
          <Link
            to="/pages-testCompletion"
            type="button"
            className="submit-button btn text-white btn-dark"
          >
            Submit
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default MCQQuestionType;
