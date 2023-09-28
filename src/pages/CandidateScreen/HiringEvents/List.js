import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import { EventsList } from "../../../common/data/hiringevents";
//Import Icons
import FeatherIcon from "feather-icons-react";

const List = () => {
  return (
    <React.Fragment>
      <Row className="g-4 mb-3">
        <div className="col-sm-auto">
          <div>
            <Link to="/apps-projects-create" className="btn btn-success">
              <i className="ri-add-line align-bottom me-1"></i> Add New
            </Link>
          </div>
        </div>
        <div className="col-sm-3 ms-auto">
          <div className="d-flex justify-content-sm-end gap-2">
            <div className="search-box ms-2 col-sm-7">
              <Input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <i className="ri-search-line search-icon"></i>
            </div>

            <select
              className="form-control w-md"
              data-choices
              data-choices-search-false
            >
              <option value="All">All</option>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="Last Year">Last Year</option>
              <option value="This Month">This Month</option>
              <option value="Today">Today</option>
              <option value="Yesterday" defaultValue>
                Yesterday
              </option>
            </select>
          </div>
        </div>
      </Row>

      <div className="row">
        {(EventsList || []).map((item, index) => (
          <React.Fragment key={index}>
            <Col xxl={3} sm={6} className="project-card">
              <Card>
                <CardBody>
                  <div
                    className={`p-3 mt-n3 mx-n3 bg-${item.cardHeaderClass} rounded-top`}
                  >
                    <div className="d-flex gap-1 align-items-center justify-content-end my-n2">
                      <button
                        type="button"
                        className={`btn avatar-xs mt-n1 p-0 favourite-btn ${item.ratingClass}`}
                        onClick={(e) => activebtn(e.target)}
                      >
                        <span className="avatar-title bg-transparent fs-15">
                          <i className="ri-star-fill"></i>
                        </span>
                      </button>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          tag="button"
                          className="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15"
                        >
                          <FeatherIcon
                            icon="more-horizontal"
                            className="icon-sm"
                          />
                        </DropdownToggle>

                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem href="/apps-projects-overview">
                            <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                            View
                          </DropdownItem>
                          <DropdownItem href="/apps-projects-create">
                            <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                            Edit
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem
                            href="#"
                            onClick={() => onClickData(item)}
                            data-bs-toggle="modal"
                            data-bs-target="#removeProjectModal"
                          >
                            <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                            Remove
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="text-center pb-3">
                      <img src={item.img} alt="" height="32" />
                      <div className="mt-2">
                        <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <div className="py-3">
                    <h5 className="fs-14 mb-3">
                      <Link to="/my-companies" className="text-dark">
                        {item.label}
                      </Link>
                    </h5>
                    <h6 className="fs-12 text-muted mb-3">
                      The H-1B visa is a non-immigrant visa category in the
                      United States that allows U.S. employers to temporarily
                      employ foreign workers in specialty occupations.
                    </h6>
                    <Row className="gy-3">
                      <Col xs={6}>
                        <div>
                          <p className="mb-1">Status</p>
                          <div
                            className={
                              "fs-12 badge badge-soft-" + item.statusClass
                            }
                          >
                            {item.status}
                          </div>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div>
                          <p className="mb-1">Event Duration</p>
                          <h5 className="fs-12 text-muted">
                            {item.eventduration}
                          </h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div></div>
                </CardBody>
              </Card>
            </Col>
          </React.Fragment>
        ))}
      </div>
      <Row className="g-0 text-center text-sm-start align-items-center mb-4">
        <Col sm={6}>
          <div>
            <p className="mb-sm-0 text-muted">
              Showing <span className="fw-semibold">1</span> to{" "}
              <span className="fw-semibold">10</span> of{" "}
              <span className="fw-semibold text-decoration-underline">12</span>{" "}
              entries
            </p>
          </div>
        </Col>

        <Col sm={6}>
          <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
            <li className="page-item disabled">
              <Link to="#" className="page-link">
                Previous
              </Link>
            </li>
            <li className="page-item active">
              <Link to="#" className="page-link">
                1
              </Link>
            </li>
            <li className="page-item ">
              <Link to="#" className="page-link">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link to="#" className="page-link">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link to="#" className="page-link">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link to="#" className="page-link">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link to="#" className="page-link">
                Next
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default List;
