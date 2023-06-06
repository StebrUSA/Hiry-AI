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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
//Import Flatepicker
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Dropzone from "react-dropzone";

//Import Images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

const CreateJob = () => {
  const SingleOptions = [
    { value: "web-development", label: "web development" },
    { value: "communication", label: "Communication" },
    { value: "javascript", label: "javascript" },
    { value: "problem solving", label: "Problem Solving" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },

  ];

  const [selectedMulti, setselectedMulti] = useState(null);

  const handleMulti = (selectedMulti) => {
    setselectedMulti(selectedMulti);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  //Dropzone file upload
  const [selectedFiles, setselectedFiles] = useState([]);

  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  };

  /**
   * Formats the size
   */
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
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
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="job-title-input">
                      Job Title {" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="job-title-input"
                      placeholder="Enter Job title"
                    />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">Job Description {" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Job description</p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                    // onChange={(editor) => {
                    //     editor.getData();
                    // }}
                    />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="job-title-input">
                      Annual salary
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="job-ctc-input"
                      placeholder="Enter Annual Salary"
                    />
                  </div>
                  <Row>
                    <Col lg={4}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          Experience {" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <select
                          className="form-select"
                          data-choices
                          data-choices-search-false
                          id="choices-priority-input"
                        >
                          <option defaultValue="">Select Experience</option>
                          <option defaultValue="part-time">0-1 yrs</option>
                          <option value="full-time">1-2 yrs</option>
                          <option value="contract">2-3 yrs</option>
                          <option value="contract">3-4 yrs</option>
                          <option value="contract">More Than 5</option>
                        </select>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          Job Type {" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <select
                          className="form-select"
                          data-choices
                          data-choices-search-false
                          id="choices-priority-input"
                        >
                          <option defaultValue="">Select Job Type</option>
                          <option defaultValue="part-time">Part Time</option>
                          <option value="full-time">Full Time</option>
                          <option value="contract">Contract</option>
                        </select>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-status-input"
                          className="form-label"
                        >
                          Workplace type {" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <select
                          className="form-select"
                          data-choices
                          data-choices-search-false
                          id="choices-status-input"
                        >
                          <option defaultValue="">Select Location</option>
                          <option defaultValue="onsite">Onsite</option>
                          <option value="hybrid">Hybrid</option>
                          <option value="remote">Remote</option>

                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={4}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          No. of Vancancy {" "}
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
                    <Col lg={4}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          Last Date of Apply {" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          placeholder="Select a date"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "multiple",
                            dateFormat: "d.m.y",
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-status-input"
                          className="form-label"
                        >
                          Close Date {" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          placeholder="Select a date"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "multiple",
                            dateFormat: "d.m.y",
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={6}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          Job Category {" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <select
                          className="form-select"
                          data-choices
                          data-choices-search-false
                          id="choices-categories-input"
                        >
                          <option defaultValue="">Select Category</option>
                          <option defaultValue="Designing">Designing</option>
                          <option value="Development">Development</option>
                          <option value="Accountfinance">Account & Finance</option>
                          <option value="purchasingmanager">Purchasing Manager</option>
                          <option value="digitalmanager">Digital marketing</option>

                        </select>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-status-input"
                          className="form-label"
                        >
                          Skills {" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <Select
                          value={selectedMulti}
                          isMulti={true}
                          onChange={() => {
                            handleMulti();
                          }}
                          options={SingleOptions}
                        />
                      </div>
                    </Col>
                  </Row>
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
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Company Details</h5>
                </div>
                <CardBody>
                  <div className="mb-3">
                    <Label
                      htmlFor="choices-categories-input"
                      className="form-label"
                    >
                      {/* Categories */}
                      Company name {" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      disabled
                      value={"Facebook"}
                      className="form-control"
                      id="job-company-name"
                      placeholder="Enter Company Name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="choices-text-input" className="form-label">
                      Job Loaction {" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      disabled
                      value={"Delhi"}
                      className="form-control"
                      id="job-location-name"
                      placeholder="Enter Job Location"
                    />
                  </div>
                </CardBody>
              </div>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Members</h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-3">
                    <Label htmlFor="choices-lead-input" className="form-label">
                      Team Lead
                    </Label>
                    <select
                      className="form-select"
                      data-choices
                      data-choices-search-false
                      id="choices-lead-input"
                    >
                      <option defaultValue="Brent Gonzalez">
                        Brent Gonzalez
                      </option>
                      <option value="Darline Williams">Darline Williams</option>
                      <option value="Sylvia Wright">Sylvia Wright</option>
                      <option value="Ellen Smith">Ellen Smith</option>
                      <option value="Jeffrey Salazar">Jeffrey Salazar</option>
                      <option value="Mark Williams">Mark Williams</option>
                    </select>
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
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateJob;
