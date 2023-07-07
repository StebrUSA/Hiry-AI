import React from "react";

import { Col, Form, Input, Label, Row } from "reactstrap";

const PersonalDetails = () => {
  return (
    <React.Fragment>
      <Form>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="firstnameInput" className="form-label">
                First Name
              </Label>
              <Input
                type="text"
                className="form-control"
                id="firstnameInput"
                placeholder="Enter your firstname"
                defaultValue="Dave"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="lastnameInput" className="form-label">
                Last Name
              </Label>
              <Input
                type="text"
                className="form-control"
                id="lastnameInput"
                placeholder="Enter your lastname"
                defaultValue="Adame"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="phonenumberInput" className="form-label">
                Phone Number
              </Label>
              <Input
                type="text"
                className="form-control"
                id="phonenumberInput"
                placeholder="Enter your phone number"
                defaultValue="+(1) 987 6543"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="emailInput" className="form-label">
                Email Address
              </Label>
              <Input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Enter your email"
                defaultValue="daveadame@Hiry.ai"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="passwordInput" className="form-label">
                Password
              </Label>
              <Input type="email" className="form-control" id="passwordInput" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="confirmpasswordInput" className="form-label">
                Confirm Password
              </Label>
              <Input
                type="email"
                className="form-control"
                id="confirmpasswordInput"
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="mb-3">
              <Label htmlFor="cityInput" className="form-label">
                City
              </Label>
              <Input
                type="text"
                className="form-control"
                minLength="5"
                maxLength="6"
                id="zipcodeInput"
                placeholder="Enter zipcode"
                defaultValue="Sunnywale"
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="mb-3">
              <Label htmlFor="stateInput" className="form-label">
                State
              </Label>
              <Input
                type="text"
                className="form-control"
                id="cityInput"
                placeholder="City"
                defaultValue="California"
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="mb-3">
              <Label htmlFor="countryInput" className="form-label">
                Country
              </Label>
              <Input
                type="text"
                className="form-control"
                id="countryInput"
                placeholder="Country"
                defaultValue="United States"
              />
            </div>
          </Col>

          <Col lg={3}>
            <div className="mb-3">
              <Label htmlFor="zipcodeInput" className="form-label">
                Zip Code
              </Label>
              <Input
                type="text"
                className="form-control"
                minLength="5"
                maxLength="6"
                id="zipcodeInput"
                placeholder="Enter zipcode"
                defaultValue="90011"
              />
            </div>
          </Col>

          <Col lg={12}>
            <div className="mb-4 pb-2">
              <Label
                htmlFor="exampleFormControlTextarea"
                className="form-label"
              >
                Description
              </Label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea"
                rows="5"
              ></textarea>
            </div>
          </Col>
          <Col lg={12}>
            <div className="hstack gap-2 justify-content-end">
              <button type="button" className="btn btn-primary">
                Update
              </button>
              <button type="button" className="btn btn-soft-success">
                Cancel
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default PersonalDetails;
