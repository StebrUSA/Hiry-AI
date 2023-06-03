import React, { useState } from "react";
import Select from "react-select";
import { Col, Form, Input, Label, Row } from "reactstrap";

const JobSearchPreferences = () => {
  const [selectedMulti2, setselectedMulti2] = useState(null);
  const [selectedJobCategory, setselectedJobCategory] = useState(null);

  const SingleOptions = [
    { value: "Choices 1", label: "Washington" },
    { value: "Choices 2", label: "Texas" },
    { value: "Choices 3", label: "California" },
    { value: "Choices 4", label: "Florida" },
    { value: "Choices 5", label: "New Jersey" },
  ];

  const JobCategory = [
    { value: "", label: "Select Job Category" },
    { value: "Choices1", label: "Accounting and Finance" },
    { value: "Choices2", label: "Development" },
    { value: "Choices3", label: "Designing" },
    { value: "Choices4", label: "Education and Training" },
    { value: "Choices5", label: "Marketing" },
  ];

  function handleMulti2(selectedMulti2) {
    setselectedMulti2(selectedMulti2);
  }

  function handlejobcategory(selectedJobCategory) {
    setselectedJobCategory(selectedJobCategory);
  }

  return (
    <React.Fragment>
      <Form>
        <Row>
          <Col lg={6}>
            <div className="form-check mt-4 form-check-secondary">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck7"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="formCheck7">
                Are you Authorized to Work in United States?
              </Label>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="visastatusInput" className="form-label">
                Visa Status
              </Label>
              <Input
                type="text"
                className="form-control"
                id="visastatusInput"
                placeholder="Enter your valid work authorization to work in US"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="skillsInput" className="form-label">
                Earliest Availability
              </Label>
              <select className="form-select mb-3">
                <option></option>
                <option value="Choices1">Immediate</option>
                <option value="Choices2">2 Week</option>
                <option value="Choices3">1 Month</option>
              </select>
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <Label
                htmlFor="choices-multiple-remove-button"
                className="form-label"
              >
                Select Relocation Preferences
              </Label>
              <Select
                value={selectedMulti2}
                isMulti={true}
                isClearable={true}
                onChange={() => {
                  handleMulti2();
                }}
                options={SingleOptions}
                className="custom-select"
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="form-check mb-4 mt-3 form-check-secondary">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck7"
              />
              <Label className="form-check-label" htmlFor="formCheck7">
                Looking out for Job Anywhere in USA
              </Label>
            </div>
          </Col>
          <Col lg={12}>
            <div className="form-check mb-4  form-check-secondary">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck7"
              />
              <Label className="form-check-label" htmlFor="formCheck7">
                Looking out for Only Remote jobs
              </Label>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="skillsInput" className="form-label">
                Job Type
              </Label>
              <select className="form-select mb-3">
                <option value="">Select Job Type</option>
                <option value="Choices1">Part-Time</option>
                <option value="Choices2">Full Time</option>
                <option value="Choices2">Contract</option>
                <option value="Choices2">Internship</option>
              </select>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="skillsInput" className="form-label">
                Job Category
              </Label>
              <select
                className="form-select mb-3"
                data-choices
                data-choices-search-false
                name="choices-single-default2"
                value={selectedJobCategory}
                onChange={() => {
                  handlejobcategory();
                }}
              >
                {JobCategory.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </Col>

          <Col lg={6}>
            <Label htmlFor="basic-url" className="form-label">
              Hourly Rate
            </Label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                $
              </span>
              <Input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
              <span className="input-group-text">/hr</span>
            </div>
          </Col>

          <Col lg={6}>
            <Label htmlFor="basic-url" className="form-label">
              Yearly Salary
            </Label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                $
              </span>
              <Input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
              <span className="input-group-text">K</span>
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

export default JobSearchPreferences;
