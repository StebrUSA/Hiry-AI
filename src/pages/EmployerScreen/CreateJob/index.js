import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  ButtonGroup,
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
  UncontrolledDropdown,
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
import SkillTable from "./skill_experience_table";
import SelectComponent from "../../../Components/Common2/SelectCustom";
import DropDownCustomComponent from "../../../Components/Common2/DropDownCustom";
import {
  SingleOptions,
  CategoryOptions,
  JobTypesOptions,
  KeyWordTypes,
  TeamLeadMembers,
} from "../../../Components/Common2/Options";
const CreateJob = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  //Dropzone file upload
  const [selectedFiles, setselectedFiles] = useState([]);
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
                      Job Title <span className="text-danger">*</span>
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
                    <div
                      style={{
                        backgroundColor: "#ecf9ff",
                        height: "40px",
                        lineHeight: "40px",
                      }}
                      className="border text-black rounded-3"
                    >
                      <p
                        style={{
                          verticalAlign: "middle",
                          marginLeft: "0.5rem",
                        }}
                      >
                        Candidates are 140% more likely to apply when you
                        include a city. Location is also required for some jobs
                        borads.
                      </p>
                    </div>
                    <Row className="mt-2">
                      <Col lg={10}>
                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="job-title-input"
                          >
                            Job Location <span className="text-danger">*</span>
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
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            marginTop: "32px",
                          }}
                        >
                          <input type="checkbox" id="remote" />
                          <div style={{ fontSize: "10px", marginLeft: "4px" }}>
                            FULLY REMOTE
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">
                      Job Description <span className="text-danger">*</span>
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
                  <div>
                    <h4 className="text-bold fw-600">
                      Skills Experience & Quality
                    </h4>
                    <Row className="mt-3">
                      <Col lg={12}>
                        <div className="mb-3 mb-lg-0">
                          <Label
                            htmlFor="choices-priority-input"
                            className="form-label"
                          >
                            Job Function <span className="text-danger">*</span>
                          </Label>
                          <SelectComponent
                            options={CategoryOptions}
                          />
                        </div>
                      </Col>
                    </Row>
                    <SkillTable />
                  </div>
                  <Row className="mt-3">
                     <Col lg={6}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          Keywords <span className="text-danger">*</span>
                        </Label>
                        <SelectComponent
                          isMulti={true}
                          options={KeyWordTypes}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          No. of Vancancy <span className="text-danger">*</span>
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
                  </Row>
                  <Row className="mt-3">
                    <Col lg={6}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-priority-input"
                          className="form-label"
                        >
                          Last Date of Apply{" "}
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
                    <Col lg={6}>
                      <div className="mb-3 mb-lg-0">
                        <Label
                          htmlFor="choices-status-input"
                          className="form-label"
                        >
                          Close Date <span className="text-danger">*</span>
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
                  <h5 className="card-title mb-0">Job</h5>
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
                      options={JobTypesOptions}
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
                    <br></br>
                    
                    <DropDownCustomComponent
                      LabelName="Select..."
                      members={TeamLeadMembers}
                      width="w-100"
                      tagName="button"
                      dropDownButtonClass='mdi mdi-chevron-down'
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
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateJob;
