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
import SelectComponent from "../../../../Components/Common2/SelectCustom";
import DropDownCustomComponent from "../../../../Components/Common2/DropDownCustom";
import { JobTypesOptions } from "../../../../Components/Common2/Options";

const JobSearchPreferences = ({ updateProgress }) => {
  const [selectedMulti2, setselectedMulti2] = useState(null);
  const [show, setShow] = useState(false);
  const [def, setdef] = useState(15);
  const [jobTypeArray, setJobTypeArray] = useState(JobTypesOptions);
  const [selectedMiles, setSelectedMiles] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleUpdate = () => {
    // Call the updateProgress function passed from the parent component
    updateProgress();
  };

  const handleOptionChange = (selectedOptions) => {
    if (selectedOptions.length === 0) {
      setShow(false);
      setJobTypeArray(JobTypesOptions);
      return;
    }
    setShow(true);
    const newSelectedOptions =
      selectedOptions && selectedOptions.map((option) => option.value);

    newSelectedOptions.forEach((ele) => {
      if (ele !== "fulltime") {
        const jobs = JobTypesOptions.filter((ele) => {
          return ele.value !== "fulltime";
        });
        setJobTypeArray(jobs);
      } else {
        setJobTypeArray([]);
      }
    });
  };
  const handleRadioChange = (event, radioId) => {
    const selectedValue = event.target.checked ? radioId : null;
    setSelectedRadio(selectedValue);
  };

  const isRadioSelected = (radioId) => selectedRadio === radioId;

  const AvailabilityOptions = [
    { value: "Immediate", label: "Immediate" },
    { value: "1 Week", label: "1 Week" },
    { value: "2 Weeks", label: "2 Weeks" },
  ];
  const milesOptions = [
    { value: "Choices 1", label: "" },
    { value: "Choices 2", label: "20 miles" },
    { value: "Choices 3", label: "30 miles" },
    { value: "Choices 4", label: "40 miles" },
    { value: "Choices 4", label: "50 miles" },
    { value: "Choices 4", label: "100 miles" },
  ];

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

  const handleSelectMiles = (item) => {
    setSelectedMiles(item);
  };

  function handleMulti2(selectedMulti2) {
    setselectedMulti2(selectedMulti2);
  }

  return (
    <React.Fragment>
      <Row>
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
              Work Authorization Status <span className="text-danger">*</span>
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
              <DropDownCustomComponent
                LabelName="Select availability"
                options={AvailabilityOptions}
                width="w-100"
                tagName="button"
                dropDownButtonClass="mdi mdi-chevron-down"
                className="btn btn-light form-control d-flex justify-content-between text-muted border bg-white"
              />
            </div>
          </div>
        </Col>
        <div className="border mt-4"></div>

        <h5 className="fs-18 mt-3 mb-3 mt-3">Location</h5>
        <Col lg={12}>
          <div className="form-check mb-4 mt-2 form-radio-success">
            <Input
              className="form-check-input"
              type="radio"
              name="formradiocolor1"
              id="formradioRight1"
              checked={isRadioSelected("formradioRight1")}
              onChange={(event) => handleRadioChange(event, "formradioRight1")}
            />
            <Label className="form-check-label" htmlFor="formCheck7">
              Looking out for a job anywhere in USA
            </Label>
          </div>
        </Col>
        <Col lg={12}>
          <div className="form-check mb-4 mt-2 form-radio-success">
            <Input
              className="form-check-input"
              type="radio"
              name="formradiocolor2"
              id="formradioRight2"
              checked={isRadioSelected("formradioRight2")}
              onChange={(event) => handleRadioChange(event, "formradioRight2")}
            />
            <Label className="form-check-label" htmlFor="formCheck7">
              Cannot go on-site,looking for remote only
            </Label>
          </div>
        </Col>
        <Col lg={6}>
          <div className="form-check form-radio-success mb-4 mt-2">
            <Input
              className="form-check-input"
              type="radio"
              name="formradiocolor3"
              id="formradioRight3"
              checked={isRadioSelected("formradioRight3")}
              onChange={(event) => handleRadioChange(event, "formradioRight3")}
            />
            <Label className="form-check-label" htmlFor="formradioRight7">
              I can work in multiple states
            </Label>
          </div>
        </Col>
        {isRadioSelected("formradioRight3") && (
          <Row>
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
          </Row>
        )}

        <Row>
          <Col lg={6}>
            <div className="form-check form-radio-success mb-4 mt-2">
              <Input
                className="form-check-input"
                type="radio"
                name="formradiocolor3"
                id="formradioRight3"
                checked={isRadioSelected("formradioRight4")}
                onChange={(event) =>
                  handleRadioChange(event, "formradioRight4")
                }
              />
              <Label className="form-check-label" htmlFor="formradioRight7 ">
                Cannot relocate, get me jobs near me
              </Label>
            </div>
          </Col>
        </Row>
        {isRadioSelected("formradioRight4") && (
          <Row>
            <div>
              <ButtonGroup>
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="button"
                    className="btn btn-primary"
                    style={{ width: "200px" }}
                  >
                    <span style={{ marginRight: "5px" }}>
                      {selectedMiles ? selectedMiles.label : "Select an option"}{" "}
                    </span>
                    <i className="mdi mdi-chevron-down"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    {milesOptions.map((option) => (
                      <DropdownItem
                        key={option.value}
                        onClick={() => handleSelectMiles(option)}
                      >
                        {option.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </ButtonGroup>
            </div>
          </Row>
        )}

        <Col lg={6}>
          <div>
            <Label
              htmlFor="choices-multiple-remove-button"
              className="form-label mt-3"
            >
              % Travel can do as a part of job
            </Label>

            <Slider
              value={def}
              min={1}
              max={100}
              orientation="horizontal"
              onChange={(value) => {
                setdef(value);
              }}
              className="custom-slider"
            >
              {" "}
            </Slider>
            <span>{def}%</span>
          </div>
        </Col>
        <Row>
          <div className="border mt-4"></div>

          <h5 className="fs-18 mt-3 mb-4 mt-4">Compensation</h5>
        </Row>
        <Col lg={6}>
          <div className="mb-3">
            <Label
              htmlFor="choices-categories-input"
              className="form-label mb-2"
            >
              Job Type <span className="text-danger">*</span>
            </Label>
            <SelectComponent
              isMulti="true"
              options={jobTypeArray || []}
              handleChange={handleOptionChange}
            />
            {show && (
              <Row className="mt-3">
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
            )}
          </div>
        </Col>

        <Col lg={12}>
          <div className="hstack gap-2 justify-content-end">
            <button
              type="button"
              onClick={handleUpdate}
              className="btn btn-primary"
            >
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
