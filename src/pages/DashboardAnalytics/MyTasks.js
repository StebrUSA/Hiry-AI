import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { myTasks } from "../../common/data/analytics";

const ActiveProjects = () => {
  return (
    <React.Fragment>
      <Col xl={5}>
        <Card>
          <CardHeader className="d-flex align-items-center">
            <h4 className="card-title flex-grow-1 mb-0">My Tasks</h4>
            <div className="flex-shrink-0">
              <UncontrolledDropdown className="card-header-dropdown">
                <DropdownToggle
                  className="text-reset dropdown-btn"
                  tag="a"
                  role="button"
                >
                  <span className="text-muted">
                    All Tasks <i className="mdi mdi-chevron-down ms-1"></i>
                  </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem>All Tasks</DropdownItem>
                  <DropdownItem>Completed </DropdownItem>
                  <DropdownItem>Inprogress</DropdownItem>
                  <DropdownItem>Pending</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>
          <CardBody>
            <div className="table-responsive table-card">
              <table className="table table-nowrap table-centered align-middle">
                <thead className="bg-light text-muted">
                  <tr>
                    <th scope="col">Project Name</th>

                    <th scope="col">Progress</th>

                    <th scope="col">Status</th>
                    <th scope="col" style={{ width: "10%" }}>
                      Due Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {(myTasks || []).map((item, key) => (
                    <tr key={key}>
                      <td className="fw-medium">{item.projectName}</td>

                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-1 text-muted fs-13">
                            {item.percentage}
                          </div>
                          <div
                            className="progress progress-sm  flex-grow-1"
                            style={{ width: "68%" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: item.percentage }}
                              aria-valuenow="53"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className={"badge badge-soft-" + item.badgeClass}>
                          {item.badge}
                        </span>
                      </td>
                      <td className="text-muted">{item.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="align-items-center mt-xl-4 mt-4 justify-content-between d-flex">
              <div className="flex-shrink-0">
                <div className="text-muted">
                  Showing <span className="fw-semibold">8</span> of{" "}
                  <span className="fw-semibold">25</span> Results
                </div>
              </div>
              <ul className="pagination pagination-separated pagination-sm mb-0">
                <li className="page-item disabled">
                  <Link to="#" className="page-link">
                    ←
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="#" className="page-link">
                    1
                  </Link>
                </li>
                <li className="page-item active">
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
                    →
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default ActiveProjects;
