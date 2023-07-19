import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

import { Col, Form, Input, Label, Row } from "reactstrap";
import { CategoryOptions } from "../../../../Components/Common2/Options";
import SkillTable from "../../../EmployerScreen/CreateJob/skill_experience_table";

const SkillsandExperience = ({ updateProgress }) => {
  const [jobTypeSkills, setJobTypeSkills] = useState([]);

  const handleUpdate = () => {
    // Call the updateProgress function passed from the parent component
    updateProgress();
  };

  const handleJobFunc = (selectedJobFunc) => {
    setJobTypeSkills(selectedJobFunc.skillsArray);
  };

  return (
    <React.Fragment>
      <div id="newlink">
        <div id="1">
          <h5 className="fs-18 mt-2 mb-2">Skills</h5>
          <Row>
            <Col lg={12}>
              <div className="mb-3 mt-2">
                <Label htmlFor="choices-priority-input" className="form-label">
                  Job Function <span className="text-danger">*</span>
                </Label>
                <Select onChange={handleJobFunc} options={CategoryOptions} />
              </div>
            </Col>
          </Row>
          <SkillTable featuredSkills={jobTypeSkills || []} />
          <div className="border mt-4"></div>
          <Row>
            <h5 className="fs-18 mt-3 mb-2">Professional Experiences</h5>

            <Col lg={6}>
              <div className="mb-3 mt-3">
                <Label htmlFor="jobtitle" className="form-label">
                  Designation
                </Label>
                <Input type="text" className="form-control" id="jobtitle" />
              </div>
            </Col>
          </Row>
          <Row>
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

                <div className="input-group">
                  <Flatpickr
                    className="form-control border-1 dash-filter-picker"
                    options={{
                      mode: "range",
                      dateFormat: "d M, Y",
                    }}
                  />
                  <div className="input-group-text bg-primary border-primary text-white">
                    <i className="ri-calendar-2-line"></i>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="hstack gap-2 mt-3 justify-content-end">
            <button
              type="submit"
              onClick={handleUpdate}
              className="btn btn-primary"
            >
              Update
            </button>
            <Link className="btn btn-success">Add New</Link>
          </div>
        </div>
      </div>
      <div id="newForm" style={{ display: "none" }}></div>
    </React.Fragment>
  );
};

export default SkillsandExperience;
