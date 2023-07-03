import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  Card,
  CardBody,
  CardFooter,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { jobCandidates } from "../../../common/data/appsJobs";

const TimeZoneOptions = [
  { value: "all", label: "All" },
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "latseven", label: "Last 7 Days" },
  { value: "all", label: "Last 30 Days" },
  { value: "thismonth", label: "This Month" },
  { value: "thisyear", label: "This Year" },
];

const TalentPools = () => {
  document.title =
    "Candidates Talent Pool | Velzon -  Admin & Dashboard Template";
    
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className="container-fluid">
          <BreadCrumb title="Talent Pool" pageTitle="Candidates Grid" />

          <Row className="g-4 mb-4">
            <Col xxl={2} lg={2} className="col-sm-auto">
              <div className="lh-lg">
                <Link to="#" className="btn btn-primary">
                  <i className="ri-add-line align-bottom me-1"></i> Add
                  Candidate
                </Link>
              </div>
            </Col>
            <Col className="col-sm">
              <div className="d-md-flex justify-content-sm-end gap-2">
                <div className="search-box ms-md-2 flex-shrink-0 mb-3 mb-md-0">
                  <Input
                    type="text"
                    id="searchJob"
                    autoComplete="off"
                    placeholder="Search for candidate..."
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>
                <select className="form-control w-md">
                  {TimeZoneOptions.map((filterValue, ind) => (
                    <option key={ind} value={filterValue.value}>
                      {filterValue.label}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
          </Row>

          <Row className="gy-2 mb-2" id="candidate-list">
            {jobCandidates.map((item, key) => (
              <Col xxl={4} md={6} key={key}>
                <Card>
                  <CardBody>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        {item.nickname ? (
                          <div className="avatar-lg rounded">
                            <div className="avatar-title border bg-light text-primary rounded text-uppercase fs-24">
                              {item.nickname}
                            </div>
                          </div>
                        ) : (
                          <div className="avatar-lg rounded">
                            <img
                              src={item.userImg}
                              alt=""
                              className="member-img img-fluid d-block rounded"
                            ></img>
                          </div>
                        )}
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <a href="/pages-profile">
                          <h5 className="fs-16 mb-1">{item.candidateName}</h5>
                        </a>

                        <p className="text-muted mb-1">
                          {item.designation}

                          <span className="float-end">
                            <span>
                              <i
                                id="TooltipTwitter"
                                className="ri-twitter-fill text-primary me-1 h-100 align-bottom cursor-pointer"
                                data-bs-placement="top"
                                data-bs-toggle="tooltip"
                                title="www.twitter.com"
                              ></i>
                            </span>
                            <span>
                              <i
                                id="TooltipLinkedin"
                                className=" ri-linkedin-fill text-primary me-1 align-bottom cursor-pointer"
                                data-bs-placement="top"
                                data-bs-toggle="tooltip"
                                title="www.linkedin.com"
                              ></i>
                            </span>
                            <span>
                              <i
                                id="TooltipGmail"
                                className=" ri-google-fill text-primary me-1 align-bottom cursor-pointer"
                                data-bs-placement="top"
                                data-bs-toggle="tooltip"
                                title="www.gmail.com"
                              ></i>
                            </span>
                          </span>
                        </p>

                        <div className="text-muted mb-1">
                          <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                          {item.location}
                        </div>

                        <div className="row">
                          {item.skills?.length > 0 &&
                            item.skills.slice(0, 4).map((value, ind) => {
                              return (
                                <div
                                  class="d-flex col-md-12 col-lg-12 col-xxl-6 col-xl-6 col-sm-12"
                                  key={ind}
                                >
                                  <div class="flex-shrink-0">
                                    <i class="ri-checkbox-circle-fill text-success"></i>
                                  </div>
                                  <div class="flex-grow-1 ms-2 text-muted">
                                    {value}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                        <div className="text-muted">
                          <i
                            className={`ri-map-pin-user-line me-1 align-bottom ${
                              item.relocate ? "text-success" : "text-danger"
                            }`}
                          ></i>
                          {item.relocate ? (
                            <span
                              className="cursor-pointer"
                              data-bs-placement="bottom"
                              data-bs-toggle="tooltip"
                              title="TX, PA, VA, NY, WI"
                            >
                              {"Willing to relocate"}
                            </span>
                          ) : (
                            <span>{"Not willing to relocate"}</span>
                          )}
                        </div>
                      </li>

                      <li class="list-inline-item">
                        <div className="text-muted">
                          <i className="ri-calendar-line text-primary me-1 align-bottom"></i>{" "}
                          <span>3 years exp</span>
                        </div>
                      </li>

                      <li class="list-inline-item">
                        <div>
                          {item.type === "Part Time" ? (
                            <span className="badge badge-soft-danger">
                              {item.type}
                            </span>
                          ) : item.type === "Full Time" ? (
                            <span className="badge badge-soft-success">
                              {item.type}
                            </span>
                          ) : (
                            <span className="badge badge-soft-info">
                              {item.type}
                            </span>
                          )}
                        </div>
                      </li>
                    </ul>
                  </CardFooter>
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
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TalentPools;
