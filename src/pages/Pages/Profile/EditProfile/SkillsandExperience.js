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
import SkillTable from "../../../EmployerScreen/CreateJob/skill_experience_table";

const SkillsandExperience = () => {
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

  const [selectedYears1, setselectedYears1] = useState(null);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [selectedYears2, setselectedYears2] = useState(null);

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
            <div className="fs-20 fw-bold mt-2 mb-4">Skills</div>

            <Col lg={12}>
              <div className="mb-2 mt-2">
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
            <SkillTable />
            <div className="border mt-4"></div>
            <Row>
              <div className="fs-20 fw-bold mt-3 mb-4">
                Professional Experiences(40 hours/ week)
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

            <div className="hstack gap-2 mt-3 justify-content-end">
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
