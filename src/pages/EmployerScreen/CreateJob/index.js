import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
//Import Flatepicker
import Flatpickr from "react-flatpickr";
// import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Location from "./location";

//Import Images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import SkillTable from "./skill_experience_table";
import SelectComponent from "../../../Components/Common2/SelectCustom";
import DropDownCustomComponent from "../../../Components/Common2/DropDownCustom";
import {
  CategoryOptions,
  JobTypesOptions,
  TeamLeadMembers,
} from "../../../Components/Common2/Options";

const CreateJob = () => {
  const [show, setShow] = useState(false);
  const [jobTypeArray, setJobTypeArray] = useState(JobTypesOptions);
  const [jobTypeSkills, setJobTypeSkills] = useState([]);
  const Tagline = "Candidates are 140% more likely to apply when you include a city,Location is also required for some jobs boards."
  
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

  const handleJobFunc = (selectedJobFunc) => {
    setJobTypeSkills(selectedJobFunc.skillsArray);
  };

  document.title = "Create Job | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Create Job" pageTitle="Jobs" />
          <Row>
            <Col lg={8}>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">
                    Share some basic details about the role
                  </h5>
                </CardHeader>

                <CardBody>
                  <Row>
                    <Col xxl={6}>
                      {" "}
                      <div className="mb-2">
                        <Label className="form-label" htmlFor="job-title-input">
                          Job Title <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="job-title-input"
                          placeholder="Enter Job title"
                          required={true}
                        />
                      </div>
                    </Col>
                    <Col xxl={3}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          No. of Positions{" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="number"
                          className="form-control"
                          id="vancancy-Input"
                          placeholder="No. of vancancy"
                          required
                        />
                      </div>
                    </Col>
                    <Col xxl={3}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          Last Date of Apply{" "}
                          <span className="text-danger">*</span>
                        </Label>

                        <div className="input-group">
                          <Flatpickr
                            className="form-control"
                            id="datepicker-publish-input"
                            placeholder="Select a date"
                            options={{
                              altInput: true,
                              altFormat: "F j, Y",
                              mode: "single",
                              dateFormat: "d.m.y",
                            }}
                          />
                          <div className="input-group-text bg-primary border-primary text-white">
                            <i className="ri-calendar-2-line"></i>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Location</h5>
                </CardHeader>
                <CardBody>
                  <Location tagline={Tagline} Joblocation="Job location"/>
                  <Row>
                    <Col lg={12}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input type="checkbox" id="remote" />
                        <div style={{ fontSize: "14px", marginLeft: "8px" }}>
                          FULLY REMOTE
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">
                    {" "}
                    Tell us more about the job
                  </h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-4">
                    <Label className="form-label">
                      Job Description <span className="text-danger">*</span>
                    </Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Job description</p>"
                      onReady={(editor) => { }}
                    />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">
                      Job Requirements <span className="text-danger">*</span>
                    </Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Job requirements</p>"
                      onReady={(editor) => { }}
                    />
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">
                    Skills Experience & Quality
                  </h5>
                </CardHeader>

                <CardBody>
                  <Row className="">
                    <Col lg={12}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          Job Function <span className="text-danger">*</span>
                        </Label>
                        <Select
                          onChange={handleJobFunc}
                          options={CategoryOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <SkillTable featuredSkills={jobTypeSkills || []} />
                </CardBody>
              </Card>
              <div className="text-end mb-4">
                <button type="submit" className="btn btn-danger w-sm me-1">
                  Delete
                </button>
                <button type="submit" className="btn btn-secondary w-sm me-1">
                  Draft
                </button>
                <button type="submit" className="btn btn-success w-sm">
                  Create
                </button>
              </div>
            </Col>
            <Col lg={4}>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Members/Recruiter</h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-3">
                    <Label htmlFor="choices-lead-input" className="form-label">
                      Team Lead
                    </Label>
                    <br></br>

                    <DropDownCustomComponent
                      LabelName="Select..."
                      options={TeamLeadMembers}
                      width="w-100"
                      tagName="button"
                      dropDownButtonClass="mdi mdi-chevron-down"
                      className="btn btn-light form-control d-flex justify-content-between text-muted border bg-white"
                    />
                  </div>

                  <div>
                    <Label className="form-label">Team Members</Label>
                    <div className="avatar-group">
                      <Link
                        to="#"
                        className="avatar-group-item"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        title="Brent Gonzalez"
                      >
                        <div className="avatar-xs">
                          <img
                            src={avatar3}
                            alt=""
                            className="rounded-circle img-fluid"
                          />
                        </div>
                      </Link>
                      <Link
                        to="#"
                        className="avatar-group-item"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        title="Sylvia Wright"
                      >
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-secondary">
                            S
                          </div>
                        </div>
                      </Link>
                      <Link
                        to="#"
                        className="avatar-group-item"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        title="Ellen Smith"
                      >
                        <div className="avatar-xs">
                          <img
                            src={avatar4}
                            alt=""
                            className="rounded-circle img-fluid"
                          />
                        </div>
                      </Link>
                      <Link
                        to="#"
                        className="avatar-group-item"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        title="Add Members"
                      >
                        <div
                          className="avatar-xs"
                          data-bs-toggle="modal"
                          data-bs-target="#inviteMembersModal"
                        >
                          <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                            +
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Compensation</h5>
                </div>
                <CardBody>
                  <div className="mb-3">
                    <Label
                      htmlFor="choices-categories-input"
                      className="form-label"
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
                            <span
                              className="input-group-text"
                              id="basic-addon3"
                            >
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
                            <span
                              className="input-group-text"
                              id="basic-addon3"
                            >
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
                </CardBody>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateJob;
