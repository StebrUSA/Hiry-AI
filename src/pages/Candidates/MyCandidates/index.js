import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import { jobCandidates } from "../../../common/data/appsJobs";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

const TimeZoneOptions = [
  { value: "all", label: "All" },
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "latseven", label: "Last 7 Days" },
  { value: "all", label: "Last 30 Days" },
  { value: "thismonth", label: "This Month" },
  { value: "thisyear", label: "This Year" },
];

const MyCandidateList = () => {
  const [candidatesData, setCandidatesData] = useState(jobCandidates);
  const [searchQuery, setSearchquery] = useState("");

  const handleSearchCandidate = (event) => {

    const query = event.target.value;
    setSearchquery(query);
    //chats is a array of object
    const searchList = jobCandidates.filter((item) => {
      return item.candidateName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  setCandidatesData(searchList);

  };
  document.title = "Candidate List View | Hiry -  Admin & Dashboard Template";
  const [isBookmarkClick, setIsBookmarkClick] = useState(false);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Candidates List" pageTitle="Candidates Lists" />

          <Row className="g-4 mb-4">
            <Col className="col-sm-auto">
              <div>
                <Link to="#" className="btn btn-success">
                  <i className="ri-add-line align-bottom me-1"></i> Add
                  Candidate
                </Link>
              </div>
            </Col>
            <Col className="col-sm">
              <div className="d-md-flex justify-content-sm-end gap-2">
                <div className="search-box ms-md-2 flex-shrink-0 mb-3 mb-md-0">
                  <Input
                    value={searchQuery}
                    type="text"
                    id="searchJob"
                    autoComplete="off"
                    onChange={handleSearchCandidate}
                    placeholder="Search for candidate..."
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>

                <select className="form-control w-md">
                  {TimeZoneOptions.map((filterValue, ind) => (
                    <option value={filterValue.value}>
                      {filterValue.label}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
          </Row>

          <Row className="gy-2 mb-2" id="candidate-list">
            {candidatesData.map((item, key) => (
              <Col className="col-lg-12" key={key}>
                <Card className="card mb-0">
                  <CardBody className="card-body">
                      <Row className="">
                    <div className="d-lg-flex align-items-center">
                        <Col lg={3} className="d-flex">
                        <div className="flex-shrink-0">
                        {item.nickname ? (
                          <div className="avatar-sm rounded">
                            <div className="avatar-title border bg-light text-primary rounded text-uppercase fs-16">
                              {item.nickname}
                            </div>
                          </div>
                        ) : (
                          <div className="avatar-sm rounded">
                            <img
                              src={item.userImg}
                              alt=""
                              className="member-img img-fluid d-block rounded"
                            ></img>
                          </div>
                        )}
                      </div>
                      <div className="ms-3">
                        <Link to="/pages-profile">
                          <h5 className="fs-16 mb-2">{item.candidateName}</h5>
                        </Link>
                        <p className="text-muted mb-0">{item.designation}</p>
                      </div>
                        </Col>
                        <Col lg={3}>
                          <Row className="gx-1">
                            <Col className="text-muted"> <i className="ri-map-pin-2-line text-primary align-bottom"></i>{" "}
                          {item.location}</Col>
                            <Col>
                            <i className="ri-time-line text-primary me-1 align-bottom"></i>{" "}
                          {item.type === "Part Time" ?
                            <span className="badge badge-soft-danger">{item.type}</span>
                            :
                            item.type === "Full Time" ?
                              <span className="badge badge-soft-success">{item.type}</span>
                              :
                              <span className="badge badge-soft-info">{item.type}</span>
                          }
                            </Col>
                          </Row>
                        <div className="d-flex gap-5 px-2 mt-0 text-muted">
                        <div className="">
                         
                        </div>
                        <div className="ms-2 border border-2">
                         
                        </div>
                      </div>
                        </Col>
                        <Col lg={3}>
                        <div className="d-flex flex-wrap gap-2 align-items-center mx-auto">
                        {/* <div className="badge text-bg-success">
                          <i className="mdi mdi-star me-1"></i>
                          {item.rating[0]}
                        </div> */}
                            
                        <div className="text-muted">{item.skills?.join(", ")}</div>
                      </div>
                        </Col>
                        <Col className="text-end" lg={3}>
                        <div>
                        <Link to="/candidate-detail" className="btn btn-soft-success me-1">
                          View Details
                        </Link>
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsBookmarkClick(!isBookmarkClick);
                          }}
                          className={
                            isBookmarkClick
                              ? "btn btn-ghost-danger btn-icon custom-toggle active"
                              : "btn btn-ghost-danger btn-icon custom-toggle"
                          }
                        >
                          {!isBookmarkClick ? (
                            <span className="icon-on">
                              <i className="ri-bookmark-line align-bottom"></i>
                            </span>
                          ) : (
                            <span className="icon-off">
                              <i className="ri-bookmark-3-fill align-bottom"></i>
                            </span>
                          )}
                        </Link>
                      </div>
                        </Col>
                    </div>
                      </Row>
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
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MyCandidateList;
