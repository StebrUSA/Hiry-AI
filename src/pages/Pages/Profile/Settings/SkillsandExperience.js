import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import {
  Col,
  Form,
  Input,
  Label,
  Row,
  Table,
  ButtonGroup,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const SkillsandExperience = () => {
  const SingleOptions1 = [
    { value: "React", label: "React" },
    { value: "Javascript", label: "Javascript" },
    { value: "Node JS", label: "Node JS" },
    { value: "Redux", label: "Redux" },
    { value: "Jest", label: "Jest" },
  ];

  const SingleOptions2 = [
    { value: "UI/UX Centric Approach", label: "UI/UX Centric Approach" },
    { value: "Responsive Design", label: "Responsive Design" },
    { value: "HTML5", label: "HTML5" },
    { value: "Agile", label: "Agile" },
    { value: "Bootstrap", label: "Bootstrap" },
  ];
  const categories = [
    { value: "Designning", label: "Designing" },
    { value: "Developement", label: "Development" },
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

  const [selectedMulti, setselectedMulti] = useState([]);
  const [tealCounter, settealCounter] = useState(5);
  const [selectedMulti1, setselectedMulti1] = useState([]);
  const [selectedYears1, setselectedYears1] = useState(null);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [selectedYears2, setselectedYears2] = useState(null);

  function countUP(id, prev_data_attr) {
    id(prev_data_attr + 1);
  }

  function countDown(id, prev_data_attr) {
    id(prev_data_attr - 1);
  }

  const handleMulti = (selectedMulti) => {
    setselectedMulti(selectedMulti);
  };
  const handleMulti1 = (selectedMulti1) => {
    setselectedMulti1(selectedMulti1);
  };

  const handleSelectCategory = (option) => {
    setselectedCategory(option);
  };
  const handleYears1 = (item) => {
    setselectedYears1(item);
  };
  const handleYears2 = (item) => {
    setselectedYears2(item);
  };
  return (
    <React.Fragment>
      <div id="newlink">
        <div id="1">
          <Row>
            <div className="bg-secondary fs-16 col-md-4 text-white  border p-2 px-3 mb-4">
              Skills
            </div>

            <Col lg={12}>
              <div className="mb-2 mt-3">
                <Label
                  htmlFor="choices-categories-input"
                  className="form-label"
                >
                  Categories
                </Label>
              </div>
              <ButtonGroup>
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="button"
                    className="btn btn-primary"
                    style={{ width: "200px" }}
                  >
                    <span style={{ marginRight: "5px" }}>
                      {selectedCategory
                        ? selectedCategory.label
                        : "Select an option"}{" "}
                    </span>
                    <i className="mdi mdi-chevron-down"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    {categories.map((option) => (
                      <DropdownItem
                        key={option.value}
                        onClick={() => handleSelectCategory(option)}
                      >
                        {option.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </ButtonGroup>
            </Col>
            <Col lg={6}>
              <div className="mt-3">
                <Label htmlFor="choices-text-input" className="form-label">
                  Core Skills
                </Label>
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={(selectedMulti) => {
                    handleMulti(selectedMulti);
                  }}
                  options={SingleOptions1}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <Label htmlFor="choices-text-input" className="form-label mt-3">
                  Additional Skills
                </Label>
                <Select
                  value={selectedMulti1}
                  isMulti={true}
                  onChange={() => {
                    handleMulti1();
                  }}
                  options={SingleOptions2}
                />
              </div>
            </Col>

            {selectedMulti.length > 0 && (
              <div className="live-preview">
                <div className="table-responsive mt-4">
                  <Table
                    className="table-bordered border-secondary  align-middle mb-0"
                    style={{ width: "600px" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">Skills</th>
                        <th scope="col">No of Years of Experience</th>
                        <th scope="col">Rating out of 10</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedMulti.map((skill, index) => (
                        <tr>
                          <td className="fw-medium">{skill.label}</td>
                          <td>
                            {" "}
                            <Input
                              type="text"
                              className="form-control ml-20  smaller-input"
                              id="jobtitle"
                            />
                          </td>
                          <td>
                            <div className="input-step step-info">
                              <button
                                type="button"
                                className="minus"
                                onClick={() => {
                                  countUP(settealCounter, tealCounter);
                                }}
                              >
                                –
                              </button>
                              <Input
                                type="number"
                                className="product-quantity"
                                value={tealCounter}
                                min="0"
                                max="10"
                                readOnly
                              />
                              <button
                                type="button"
                                className="plus"
                                onClick={() => {
                                  countUP(settealCounter, tealCounter);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            )}
            {/*table with experience and rating*/}
            <div className="border mt-4"></div>
            <Row>
              <div className="bg-warning  fs-16 col-md-4 text-white border p-2 px-3 mt-3 mb-4">
                Professional Experiences (40hrs/Week)
              </div>
            </Row>
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
                    <ButtonGroup>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          tag="button"
                          className="btn btn-primary"
                          style={{ width: "200px" }}
                        >
                          <span style={{ marginRight: "5px" }}>
                            {selectedYears1
                              ? selectedYears1.label
                              : "Select an option"}{" "}
                          </span>
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          {yearsOptions1.map((option) => (
                            <DropdownItem
                              key={option.value}
                              onClick={() => handleYears1(option)}
                            >
                              {option.label}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </ButtonGroup>
                  </Col>

                  <div className="col-auto align-self-center">to</div>

                  <Col lg={5}>
                    <ButtonGroup>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          tag="button"
                          className="btn btn-primary"
                          style={{ width: "200px" }}
                        >
                          <span style={{ marginRight: "5px" }}>
                            {selectedYears2
                              ? selectedYears2.label
                              : "Select an option"}{" "}
                          </span>
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          {yearsOptions2.map((option) => (
                            <DropdownItem
                              key={option.value}
                              onClick={() => handleYears2(option)}
                            >
                              {option.label}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </ButtonGroup>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={12}>
              <div className="mb-4 pb-2">
                <Label
                  htmlFor="exampleFormControlTextarea"
                  className="form-label"
                >
                  Job Description
                </Label>
                <textarea
                  type="textarea"
                  className="form-control"
                  id="exampleFormControlTextarea"
                  rows="3"
                ></textarea>
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
    </React.Fragment>
  );
};

export default SkillsandExperience;
