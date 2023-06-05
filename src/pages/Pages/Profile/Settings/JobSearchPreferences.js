import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  Col,
  Form,
  Input,
  Label,
  Row,
  ButtonGroup,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const JobSearchPreferences = () => {
  const [selectedMulti2, setselectedMulti2] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const [custom_val, setcustom_val] = useState(5);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const AvailabilityOptions = [
    { value: "Choices 1", label: "" },
    { value: "Choices 2", label: "Immediate" },
    { value: "Choices 3", label: "1 Week" },
    { value: "Choices 4", label: "2 Weeks" },
  ];
  const labels = {
    1: "20 mi",
    2: "30 mi ",
    3: "40 mi",
    4: "50 mi ",
    5: "100 mi",
  };
  const labelStyle = {
    width: `${100 / Object.keys(labels).length}%`,
  };
  const JobTypeOptions = [
    { value: "Choices 1", label: "" },
    { value: "Choices 2", label: "Contract to my Employer/Company(C2C)" },
    { value: "Choices 3", label: "FullTime" },
    { value: "Choices 4", label: "Contract on W2" },
  ];
  const SingleOptions = [
    { value: "Choices 1", label: "Washington" },
    { value: "Choices 2", label: "Texas" },
    { value: "Choices 3", label: "California" },
    { value: "Choices 4", label: "Florida" },
    { value: "Choices 5", label: "New Jersey" },
  ];

  function handleMulti2(selectedMulti2) {
    setselectedMulti2(selectedMulti2);
  }

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log(selectedOption);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <React.Fragment>
      <Row>
        <div className="bg-secondary fs-16 col-md-3 text-white  border p-2 px-3 mb-4">
          Work Authorization
        </div>
        <Col lg={12}>
          <div className="form-check mt-3 form-check-success">
            <Input
              className="form-check-input"
              type="checkbox"
              id="formCheck7"
              defaultChecked
            />
            <Label className="form-check-label" htmlFor="formCheck7">
              Are you a US citizen or an individual who is authorized to work in
              USA?
            </Label>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mb-3 mt-4">
            <Label htmlFor="visastatusInput" className="form-label">
              Work Authorization Status
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
          <div className="mb-3 mt-4">
            <Label htmlFor="skillsInput" className="form-label">
              Earliest Availability
            </Label>
            <div>
              <ButtonGroup>
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="button"
                    className="btn btn-primary"
                    style={{ width: "200px" }}
                  >
                    <span style={{ marginRight: "5px" }}>
                      {selectedItem ? selectedItem.label : "Select an option"}{" "}
                    </span>
                    <i className="mdi mdi-chevron-down"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    {AvailabilityOptions.map((option) => (
                      <DropdownItem
                        key={option.value}
                        onClick={() => handleSelect(option)}
                      >
                        {option.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </ButtonGroup>
            </div>
          </div>
        </Col>

        <div className="bg-warning  fs-16 col-md-3 text-white border p-2 px-3 mt-3 mb-4">
          Location
        </div>

        <Col lg={12}>
          <div className="form-check mb-4 mt-3 form-check-success">
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
          <div className="form-check mb-4 mt-2 form-check-success">
            <Input
              className="form-check-input"
              type="checkbox"
              id="formCheck7"
            />
            <Label className="form-check-label" htmlFor="formCheck7">
              Cannot go on-site,looking for remote only
            </Label>
          </div>
        </Col>
        <Col lg={6}>
          <div className="form-check mb-4 mt-2 form-check-success">
            <Input
              className="form-check-input"
              type="checkbox"
              id="formCheck7"
            />
            <Label className="form-check-label" htmlFor="formCheck7">
              I can work in multiple states
            </Label>
          </div>
        </Col>
        <Col lg={6}>
          <div>
            <Label
              htmlFor="choices-multiple-remove-button"
              className="form-label mb-3"
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
        <Col lg={6}>
          <div className="form-check mb-4 mt-2 form-check-success">
            <Input
              className="form-check-input"
              type="checkbox"
              id="formCheck7"
            />
            <Label className="form-check-label" htmlFor="formCheck7">
              Cannot relocate, get me jobs near me
            </Label>
          </div>
        </Col>

        <Col lg={6}>
          <div>
            <Label
              htmlFor="choices-multiple-remove-button"
              className="form-label mt-3"
            >
              Select the Radius
            </Label>
            <Slider
              value={custom_val}
              min={1}
              max={5}
              labels={labels}
              orientation="horizontal"
              onChange={(value) => {
                setcustom_val(value);
              }}
            />
          </div>
        </Col>
        <Row>
          <div className="bg-danger  fs-16 col-md-3 text-white border p-2 px-3 mt-4 mb-4">
            Compensation
          </div>
        </Row>
        <Col lg={6}>
          <div className="mb-3 mt-3">
            <Label htmlFor="skillsInput" className="form-label">
              Job Type
            </Label>
            <select
              className="form-select"
              data-choices
              data-choices-search-false
              name="choices-single-default2"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {JobTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </Col>

        <Row>
          <Col lg={6}>
            <Label htmlFor="basic-url" className="form-label">
              Hourly Rate
            </Label>
            <div className="input-group mb-3 mt-2">
              <span className="input-group-text" id="basic-addon3">
                $
              </span>
              <Input
                type="text"
                className="form-control"
                id="hourlyRateInput"
                aria-describedby="basic-addon3"
              />
              <span className="input-group-text">/hr</span>
            </div>
          </Col>

          <Col lg={6}>
            <Label htmlFor="basic-url" className="form-label">
              Yearly Salary
            </Label>
            <div className="input-group mb-3 mt-2">
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
        </Row>

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
    </React.Fragment>
  );
};

export default JobSearchPreferences;
