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

  const [selectedMulti, setselectedMulti] = useState(null);

  const handleMulti = (selectedMulti) => {
    setselectedMulti(selectedMulti);
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
                        className="form-control"
                        data-choices
                        data-choices-search-false
                        name="experienceYear"
                        id="experienceYear"
                      >
                        <option defaultValue="">Select years</option>
                        <option value="Choice 1">2001</option>
                        <option value="Choice 2">2002</option>
                        <option value="Choice 3">2003</option>
                        <option value="Choice 4">2004</option>
                        <option value="Choice 5">2005</option>
                        <option value="Choice 6">2006</option>
                        <option value="Choice 7">2007</option>
                        <option value="Choice 8">2008</option>
                        <option value="Choice 9">2009</option>
                        <option value="Choice 10">2010</option>
                        <option value="Choice 11">2011</option>
                        <option value="Choice 12">2012</option>
                        <option value="Choice 13">2013</option>
                        <option value="Choice 14">2014</option>
                        <option value="Choice 15">2015</option>
                        <option value="Choice 16">2016</option>
                        <option value="Choice 17">2017</option>
                        <option value="Choice 18">2018</option>
                        <option value="Choice 19">2019</option>
                        <option value="Choice 20">2020</option>
                        <option value="Choice 21">2021</option>
                        <option value="Choice 22">2022</option>
                      </select>
                    </Col>

                    <div className="col-auto align-self-center">to</div>

                    <Col lg={5}>
                      <select
                        className="form-control"
                        data-choices
                        data-choices-search-false
                        name="choices-single-default2"
                      >
                        <option defaultValue="">Select years</option>
                        <option value="Choice 1">2001</option>
                        <option value="Choice 2">2002</option>
                        <option value="Choice 3">2003</option>
                        <option value="Choice 4">2004</option>
                        <option value="Choice 5">2005</option>
                        <option value="Choice 6">2006</option>
                        <option value="Choice 7">2007</option>
                        <option value="Choice 8">2008</option>
                        <option value="Choice 9">2009</option>
                        <option value="Choice 10">2010</option>
                        <option value="Choice 11">2011</option>
                        <option value="Choice 12">2012</option>
                        <option value="Choice 13">2013</option>
                        <option value="Choice 14">2014</option>
                        <option value="Choice 15">2015</option>
                        <option value="Choice 16">2016</option>
                        <option value="Choice 17">2017</option>
                        <option value="Choice 18">2018</option>
                        <option value="Choice 19">2019</option>
                        <option value="Choice 20">2020</option>
                        <option value="Choice 21">2021</option>
                        <option value="Choice 22">2022</option>
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
