import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import { Col, Form, Input, Label, Row } from "reactstrap";

const SkillsandExperience = () => {
  const SingleOptions1 = [
    { value: "Watches", label: "Watches" },
    { value: "Headset", label: "Headset" },
    { value: "Sweatshirt", label: "Sweatshirt" },
    { value: "20% off", label: "20% off" },
    { value: "4 star", label: "4 star" },
  ];

  const yearsOptions1 = [
    { value: "", label: "Select Years" },
    { value: "Choices1", label: "2000" },
    { value: "Choices2", label: "2001" },
    { value: "Choices3", label: "2002" },
    { value: "Choices4", label: "2003" },
    { value: "Choices5", label: "2004" },
  ];
  const yearsOptions2 = [
    { value: "", label: "Select Years" },
    { value: "Choices1", label: "2005" },
    { value: "Choices2", label: "2006" },
    { value: "Choices3", label: "2007" },
    { value: "Choices4", label: "2008" },
    { value: "Choices5", label: "2009" },
  ];

  const [selectedMulti, setselectedMulti] = useState(null);
  const [selectedYears1, setselectedYears1] = useState(null);
  const [selectedYears2, setselectedYears2] = useState(null);

  const handleMulti = (selectedMulti) => {
    setselectedMulti(selectedMulti);
  };

  const handleYears1 = (selectedYears1) => {
    setselectedYears1(selectedYears1);
  };
  const handleYears2 = (selectedYears2) => {
    setselectedYears2(selectedYears2);
  };
  return (
    <React.Fragment>
      <Form>
        <div id="newlink">
          <div id="1">
            <Row>
              <Col lg={8}>
                <div>
                  <div className="mb-3 ">
                    <Label
                      htmlFor="choices-categories-input"
                      className="form-label"
                    >
                      Categories
                    </Label>
                    <select
                      className="form-select"
                      data-choices
                      data-choices-search-false
                      id="choices-categories-input"
                    >
                      <option defaultValue="Designing">Designing</option>
                      <option value="Development">Development</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="choices-text-input" className="form-label">
                      Skills
                    </Label>
                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={() => {
                        handleMulti();
                      }}
                      options={SingleOptions1}
                    />
                  </div>
                </div>
              </Col>
              <h5 className="mb-3 mt-4">Experiences</h5>
              <Col lg={8}>
                <div className="mb-3 mt-3">
                  <Label htmlFor="jobtitle" className="form-label">
                    Designation
                  </Label>
                  <Input type="text" className="form-control" id="jobtitle" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3 mt-3">
                  <Label htmlFor="companyName" className="form-label">
                    Company Name
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="companyName"
                    placeholder="Company name"
                    defaultValue="Themesbrand"
                  />
                </div>
              </Col>

              <Col lg={6}>
                <div className="mb-3 mt-3">
                  <label htmlFor="experienceYear" className="form-label">
                    Experience Years
                  </label>
                  <Row>
                    <Col lg={5}>
                      <select
                        className="form-select"
                        data-choices
                        data-choices-search-false
                        name="choices-single-default2"
                        value={selectedYears1}
                        onChange={() => {
                          handleYears1();
                        }}
                      >
                        {yearsOptions1.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Col>

                    <div className="col-auto align-self-center">to</div>

                    <Col lg={5}>
                      <select
                        className="form-select"
                        data-choices
                        data-choices-search-false
                        name="choices-single-default2"
                        value={selectedYears2}
                        onChange={() => {
                          handleYears2();
                        }}
                      >
                        {yearsOptions2.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col lg={12}>
                <div className="mb-3">
                  <Label htmlFor="jobDescription" className="form-label">
                    Job Description
                  </Label>
                  <Input
                    type="teaxtarea"
                    className="form-control"
                    id="jobDescription"
                    rows="6"
                    placeholder="Enter description"
                    defaultValue="You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites."
                  />
                </div>
              </Col>

              <div className="hstack gap-2 justify-content-end">
                <button type="submit" className="btn btn-success">
                  Update
                </button>
                <Link className="btn btn-primary">Add New</Link>
              </div>
            </Row>
          </div>
        </div>
        <div id="newForm" style={{ display: "none" }}></div>
      </Form>
    </React.Fragment>
  );
};

export default SkillsandExperience;
