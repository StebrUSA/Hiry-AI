import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Form, Input, Row } from "reactstrap";
import Flatpickr from "react-flatpickr";
import { jobGrid } from "../../../../common/data/appsJobs";
import { JobTypesOptions } from "../../../../Components/Common2/Options";
import DropDownCustomComponent from "../../../../Components/Common2/DropDownCustom";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";

const JobMarket = () => {
  document.title = "Job Grid | Hiry -  Admin & Dashboard Template";
  const [jobsData, setJobsdata] = useState(jobGrid);
  const [searchJob, setSearchjob] = useState("");

  const handleSearchCandidate = (event) => {
    const query = event.target.value;
    setSearchjob(query);
    //chats is a array of object
    const searchList = jobGrid.filter((item) => {
      return (
        item.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.companyName.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
    setJobsdata(searchList);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <BreadCrumb title="Job Grid Lists" pageTitle="Jobs" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody className="bg-soft-light">
                  <Form>
                    <Row className="g-3">
                      <Col xxl={5} sm={12}>
                        <div className="search-box">
                          <Input
                            type="text"
                            value={searchJob}
                            className="form-control search bg-light border-light"
                            id="searchJob"
                            autoComplete="off"
                            onChange={handleSearchCandidate}
                            placeholder="Search for jobs or companies..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </Col>

                      <Col xxl={3} sm={4}>
                        <div className="input-group">
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
                          <div className="input-group-text bg-primary border-primary text-white">
                            <i className="ri-calendar-2-line"></i>
                          </div>
                        </div>
                      </Col>

                      <Col xxl={2} sm={4}>
                        <div className="input-light">
                          <DropDownCustomComponent
                            LabelName="Select job type"
                            options={JobTypesOptions}
                            width="w-100"
                            tagName="button"
                            dropDownButtonClass="mdi mdi-chevron-down"
                            className="btn btn-light form-control d-flex justify-content-between text-muted border bg-white"
                          />
                        </div>
                      </Col>

                      <Col xxl={2} sm={4}>
                        <div className="input-light">
                          <select
                            className="form-control"
                            data-choices
                            data-choices-search-false
                            name="choices-single-default"
                            id="idStatus"
                          >
                            <option value="all" defaultValue>
                              All
                            </option>
                            <option value="Active">Active</option>
                            <option value="New">New</option>
                            <option value="Close">Close</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="d-flex align-items-center mb-4">
                <div className="flex-grow-1">
                  <p className="text-muted fs-14 mb-0">
                    Result: <span id="total-result">7</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row id="job-list">
            <Col xxl={4} md={6} id="job-widget">
              <Card className="card-height-100 bg-info bg-job">
                <CardBody className="p-5">
                  <h2 className="lh-base text-white">
                    Hiry invites young professionals for an intership!
                  </h2>
                  <p className="text-white-75 mt-4 mb-5 fs-14">
                    Don't miss your opportunity to improve your skills!
                  </p>
                  <div className="text-center">
                    <button type="button" className="btn btn-light">
                      View More{" "}
                      <i className="ri-arrow-right-line align-bottom"></i>
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            {jobsData.map((item, key) => (
              <Col xxl={4} md={6} key={key}>
                <Card className="card-height-100">
                  <CardBody>
                    <button
                      type="button"
                      className="btn btn-icon btn-soft-primary float-end"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <i className="mdi mdi-cards-heart fs-16"></i>
                    </button>
                    <div className="avatar-sm mb-4">
                      <div className="avatar-title bg-light rounded">
                        <img
                          src={item.companyLogo}
                          alt=""
                          className="avatar-xxs"
                        />
                      </div>
                    </div>
                    <Link to="#">
                      <h5>{item.jobTitle}</h5>
                    </Link>
                    <p className="text-muted">{item.companyName} </p>
                    <div className="d-flex gap-4 mb-3">
                      <div>
                        <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                        {item.location}
                      </div>
                      <div>
                        <i className="ri-time-line text-primary me-1 align-bottom"></i>{" "}
                        {item.postDate}
                      </div>
                    </div>
                    <p className="text-muted">{item.description}</p>
                    <div className="hstack gap-2">
                      {item.requirement.map((subItem, key) => (
                        <React.Fragment key={key}>
                          {subItem === "Full Time" ? (
                            <span className="badge badge-soft-success">
                              {subItem}
                            </span>
                          ) : subItem === "Freelance" ? (
                            <span className="badge badge-soft-primary">
                              {subItem}
                            </span>
                          ) : (
                            <span className="badge badge-soft-danger">
                              {subItem}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="mt-4 hstack gap-2">
                      <Link to="#" className="btn btn-soft-primary w-100">
                        Apply Job
                      </Link>
                      <Link
                        to="/apps-job-details"
                        className="btn btn-soft-success w-100"
                      >
                        Overview
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="g-0 justify-content-end mb-4" id="pagination-element">
            <Col sm={6}>
              <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                <div className="page-item">
                  <Link to="" className="page-link" id="page-prev">
                    Previous
                  </Link>
                </div>
                <span id="page-num" className="pagination"></span>
                <div className="page-item">
                  <Link to="" className="page-link" id="page-next">
                    Next
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobMarket;
