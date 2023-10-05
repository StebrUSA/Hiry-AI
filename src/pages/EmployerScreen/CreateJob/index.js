import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
//Import Flatepicker
import Flatpickr from "react-flatpickr";
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
  SkillKeywords,
} from "../../../Components/Common2/Options";

//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createJob } from "../../../service/BackendHelper";

const CreateJob = () => {
  const [show, setShow] = useState(false);
  const [jobTypeArray, setJobTypeArray] = useState(JobTypesOptions);
  const [skillKeywords, setSkillKeywords] = useState(SkillKeywords);
  const [skillKeywordsPayload, setSkillKeywordsPayload] = useState("");
  const [jobTypeSkills, setJobTypeSkills] = useState([]);
  const [jobDescription, setJobDescription] = useState("");

  const descriptionDefaultValue = "It is required to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfillment in being involved in the design process for the next hot gadget."

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      title: "Front-End Developer" || "",
      lastDateToApply: "",
      location: "Delhi" || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("This Field Is Required"),
      location: Yup.string().required("This Field Is Required"),
      lastDateToApply: Yup.string().required("This Field Is Required"),
    }),
    onSubmit: (values) => {
      let payload = {
        title: values.title,
        date: values.lastDateToApply,
        location: values.location,
        keywords: skillKeywordsPayload,
        description: jobDescription || descriptionDefaultValue,
        requirements: "Job Requirements",
        functionality: "Test",
        skills: {},
        job_type: "Full Time"
      }

      // api call to create job
      createJob(payload)
        .then(resp => {
          console.log('resp:', resp);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });

  const handleKeywordsChange = (selectedOptions) => {
    if (selectedOptions.length === 0) {
      setSkillKeywords(SkillKeywords);
      return;
    }
    const newSelectedOptions =
      selectedOptions && selectedOptions.map((option) => option.label);
    const payloadVal = newSelectedOptions.join(', ');
    setSkillKeywordsPayload(payloadVal);
  }

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
      if (ele !== "Fulltime on W2") {
        const jobs = JobTypesOptions.filter((ele) => {
          return ele.value !== "Fulltime on W2";
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
        <Form onSubmit={validation.handleSubmit} action="#">
          <Container fluid>
            <BreadCrumb title="Create Job" pageTitle="Jobs" />
            <Row>
              <Col lg={8} md={6} sm={12} xs={12}>
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
                          <Label className="form-label" htmlFor="title-input">
                            Job Title <span className="text-danger">*</span>
                          </Label>
                          <Input
                            name="title"
                            type="text"
                            className="form-control"
                            id="job-title-input"
                            placeholder="Enter Job Title"
                            value={validation.values.title || ""}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.title &&
                                validation.errors.title
                                ? true
                                : false
                            }
                          />
                          {validation.errors.title && validation.touched.title ? (
                            <FormFeedback type="invalid">
                              {validation.errors.title}
                            </FormFeedback>
                          ) : null}
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
                            id="vacancy-Input"
                            placeholder="No. of vacancy"
                          // required
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
                            <Input
                              name="lastDateToApply"
                              type="date"
                              className="form-control"
                              id="job-title-input"
                              placeholder="Select A Date"
                              value={validation.values.lastDateToApply || null}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.lastDateToApply &&
                                  validation.errors.lastDateToApply
                                  ? true
                                  : false
                              }
                            />
                            {validation.errors.lastDateToApply && validation.touched.lastDateToApply ? (
                              <FormFeedback type="invalid">
                                {validation.errors.lastDateToApply}
                              </FormFeedback>
                            ) : null}
                            {/* <div className="input-group-text bg-primary border-primary text-white">
                              <i className="ri-calendar-2-line"></i>
                            </div> */}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <h6 className="card-title mt-4 mb-0">Location and Keywords</h6>
                    <hr style={{ color: "darkgrey" }}></hr>
                    <Row>
                      <Col lg={6}>
                        {/* <Location Joblocation="Job location" /> */}
                        <Label className="form-label" htmlFor="job-location-input">
                          Job Location
                          <span className="text-danger">*</span>
                        </Label>
                        <Input
                          name="location"
                          type="text"
                          className="form-control"
                          id="job-location-input"
                          placeholder="Enter Job Location"
                          value={validation.values.location || ""}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.location &&
                              validation.errors.location
                              ? true
                              : false
                          }
                        />
                        {validation.errors.location && validation.touched.location ? (
                          <FormFeedback type="invalid">
                            {validation.errors.location}
                          </FormFeedback>
                        ) : null}
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
                      </Col>
                      <Col lg={6}>
                        <div className="">
                          <h5 className="card-title mb-0"></h5>
                        </div>
                        <div style={{ marginTop: "4px" }} className="mb-3">
                          <Label
                            htmlFor="choices-categories-input"
                            className="form-label"
                          >
                            Keywords <span className="text-danger">*</span>
                          </Label>
                          <SelectComponent
                            isMulti="true"
                            options={skillKeywords || []}
                            handleChange={handleKeywordsChange}
                          />
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
                        data="<p>It is required to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfillment in being involved in the design process for the next hot gadget.</p>"
                        onReady={(editor) => { }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setJobDescription(data);
                          console.log({ event, editor, data });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        Job Requirements <span className="text-danger">*</span>
                      </Label>
                      <CKEditor
                        editor={ClassicEditor}
                        data="<p>Job Requirements</p>"
                        onReady={(editor) => { }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={4} md={6} sm={12} xs={12}>
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
              </Col>
            </Row>
            <div className="mb-4">
              <button className="btn btn-danger w-sm me-1">
                Delete
              </button>
              <button className="btn btn-secondary w-sm me-1">
                Draft
              </button>
              <button type="submit" className="btn btn-success w-sm">
                Create
              </button>
            </div>
          </Container>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default CreateJob;
