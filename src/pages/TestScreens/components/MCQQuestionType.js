import React from "react";
import { Input, Col, Label } from "reactstrap";

const MCQQuestionType = () => {
  return (
    <>
      <Col md={12}>
        <div className="form-check form-check-secondary mb-4">
          <Input className="form-check-input" type="checkbox" id="formCheck7" />
          <Label className="form-check-label" for="formCheck7">
            React.js can increase the application's performance with Virtual
            DOM.
          </Label>
        </div>
        <div className="form-check form-check-secondary mb-4">
          <Input className="form-check-input" type="checkbox" id="formCheck7" />
          <Label className="form-check-label" for="formCheck7">
            React.js is easy to integrate with other frameworks such as Angular,
            BackboneJS since it is only a view library.
          </Label>
        </div>
        <div className="form-check form-check-secondary mb-4">
          <Input className="form-check-input" type="checkbox" id="formCheck7" />
          <Label className="form-check-label" for="formCheck7">
            React.js can render both on client and server side.
          </Label>
        </div>
        <div className="form-check form-check-secondary mb-4">
          <Input className="form-check-input" type="checkbox" id="formCheck7" />
          <Label className="form-check-label" for="formCheck7">
            All of the above
          </Label>
        </div>
      </Col>
    </>
  );
};

export default MCQQuestionType;
