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
  Table,
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
import { Checkbox } from "../../Forms/CheckboxAndRadio/CheckboxAndRadioCode";

const CreateJob = () => {
  const SingleOptions = [
    { value: "web-development", label: "web development" },
    { value: "communication", label: "Communication" },
    { value: "javascript", label: "javascript" },
    { value: "problem solving", label: "Problem Solving" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },

  ];
  const CategoryOptions = [
    { value: "", label: "Select Category" },
    { value: "designing", label: "Designing" },
    { value: "development", label: "Development" },
    { value: "AccountFinance", label: "Account & Finance" },
    { value: "purchasingmanager", label: "Purchasing Manager" },
    { value: "digitalmarketting", label: "Digital Marketting" },

  ];

  const ExperienceOptions = [
    { value: "", label: "Select Experience" },
    { value: "zero", label: "0-1 yrs" },
    { value: "one", label: "1-2 yrs" },
    { value: "two", label: "2-3 yrs" },
    { value: "three", label: "3-4 yrs" },
    { value: "five", label: "More Than 5" },

  ];

  const JobTypesOptions = [
    { value: "", label: "Select Job Type" },
    { value: "parttime", label: "Part Time" },
    { value: "fulltime", label: "Full time" },
    { value: "contract", label: "Contract" },
  ];
  const LocationOptions = [
    { value: "", label: "Select Location" },
    { value: "onsite", label: "Onsite" },
    { value: "hybrid", label: "Hybrid" },
    { value: "remote", label: "Remote" },
  ];

  const TeamLeadoptions = [
    { value: "DarlineWilliams", label: "Darline Williams" },
    { value: "SylviaWright", label: "Sylvia Wright" },
    { value: "EllenSmith", label: "Ellen Smith" },
    { value: "JeffreySalazar", label: "Jeffrey Salazar" },
    { value: "MarkWilliams", label: "Mark Williams" },
  ];

  const SingleOptions1 = [
    { id: 1, value: "React", label: "React" },
    { id: 3, value: "Javascript", label: "Javascript" },
    { id: 4, value: "Node JS", label: "Node JS" },
    { id: 5, value: "Redux", label: "Redux" },
    { id: 6, value: "Jest", label: "Jest" },
  ];

  const SingleOptions2 = [
    { value: "UI/UX Centric Approach", label: "UI/UX Centric Approach" },
    { value: "Responsive Design", label: "Responsive Design" },
    { value: "HTML5", label: "HTML5" },
    { value: "Agile", label: "Agile" },
    { value: "Bootstrap", label: "Bootstrap" },
  ];
  const [selectedMulti, setselectedMulti] = useState([]);
  const [selectedMulti1, setselectedMulti1] = useState([]);
  const [tealCounter, settealCounter] = useState(5);

  const handleMulti = (selectedMulti) => {
    setselectedMulti(selectedMulti);
  };
  const handleMulti1 = (selectedMulti1) => {
    setselectedMulti1(selectedMulti1);
  };

  function countUP(id, prev_data_attr) {
    id(prev_data_attr + 1);
  }

  function countDown(id, prev_data_attr) {
    id(prev_data_attr - 1);
  }

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
                  <div>
                    <h4 className="fw-100 fs-5">Location</h4>
                    <div style={{backgroundColor:"#ecf9ff",height:'40px',lineHeight:'40px'}} className="border text-black rounded-3">
                      <p style={{verticalAlign:'middle',marginLeft:"0.5rem"}}>
                        Candidates are 140% more likely to apply when you include a city. Location is also required for some jobs borads.
                      </p>
                    </div>
                    <Row className="mt-2">
                      <Col lg={10}>
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="job-title-input">
                            Job Location {" "}
                            <span className="text-danger">*</span>
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="job-title-input"
                            placeholder="Enter Job Location"
                          />
                        </div>
                      </Col>
                      <Col lg={2}>
                        <div style={{display:"flex",justifyContent:"space-around",marginTop:"32px"}} className="">
                          <input
                            type="checkbox"
                            className=""
                            id=""
                          />
                          <div style={{backgroundColor:"#e9ecef"}} className="rounded-pill p-1">FULLY REMOTE</div>
                        </div>
                      </Col>
                    </Row>
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
                  {/* <div className="mb-3">
                    <Label className="form-label" htmlFor="job-title-input">
                      Annual salary
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="job-ctc-input"
                      placeholder="Enter Annual Salary"
                    />
                  </div> */}
                  <Row>
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
                  </Row>
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
                              <tr key={index}>
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
                                        countDown(settealCounter, tealCounter);
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
                  <Row className="mt-3">
                    {/* <Col lg={4}>
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
                          {ExperienceOptions.map((item, index) => (
                            <option key={index} value={item.value}>{item.label}</option>
                          ))}
                        </select>
                      </div>
                    </Col> */}
                    <Col lg={6}>
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
                          {JobTypesOptions.map((item, index) => (
                            <option key={index} value={item.value}>{item.label}</option>
                          ))}
                        </select>
                      </div>
                    </Col>
                    <Col lg={6}>
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
                          {LocationOptions.map((item, index) => (
                            <option key={index} value={item.value}>{item.label}</option>
                          ))}
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
                    <Col lg={12}>
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
                          {CategoryOptions.map((item, index) => {
                            return <option key={index} value={item.value}>{item.label}</option>
                          })}
                        </select>
                      </div>
                    </Col>
                    {/* <Col lg={6}>
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
                    </Col> */}
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
              {/* <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Job</h5>
                </div>
                <CardBody>
                  <div className="mb-3">
                    <Label
                      htmlFor="choices-categories-input"
                      className="form-label"
                    >
                      Job Type {" "}
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
              </div> */}
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
                      {TeamLeadoptions.map((item, index) => {
                        return <option key={index} value={item.value}>{item.label}</option>
                      })}
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
