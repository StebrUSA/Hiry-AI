import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row, Table } from "reactstrap";

const Fees = () => {
  const EmployerFeesDetails = [
    {
      label: "Form I-129 Filing Fee",
      value: "$460 to $4,500",
    },
    {
      label: "ACWIA Fee",
      value:
        "$750 for employers with 26 or more employees and $1,500 for employers with 50 or more employees.",
    },
    {
      label: "Fraud Prevention and Detection Fee",
      value: "$500",
    },
    {
      label: "Public Law 114-113 Fee (if Applicable)",
      value: "$4,000",
    },
    {
      label: "Optional Premium Processing",
      value: "$2,500",
    },
  ];

  const CandidateFeesDetails = [
    {
      label: "Visa Application Fee",
      value:
        "Once the H-1B petition is approved, and if the candidate is outside the U.S., they will need to pay the visa application fee, which varies based on the candidate's nationality and the type of visa application they are submitting.",
    },
    {
      label: "Optional Premium Processing",
      value:
        "Though the premium processing fee is typically paid by the employer, in some cases, the candidate may choose to pay it if the employer is not willing to cover this cost.",
    },
  ];

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center mb-4">
            <h5 className="card-title flex-grow-1">For the Employer</h5>
          </div>
          <Row>
            <Col lg={12}>
              <div className="table-responsive table-card">
                <Table className="table-borderless align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Details</th>
                      <th scope="col">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EmployerFeesDetails.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm">
                              <div className="avatar-title bg-light text-secondary rounded fs-24">
                                <i className="ri-folder-zip-line"></i>
                              </div>
                            </div>
                            <div className="ms-3 flex-grow-1">
                              <h5 className="fs-14 mb-0">
                                <Link to="#" className="text-dark">
                                  {item.label}
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center mb-4">
            <h5 className="card-title flex-grow-1">For the Candidate</h5>
          </div>
          <Row>
            <Col lg={12}>
              <div className="table-responsive table-card">
                <Table className="table-borderless align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Details</th>
                      <th scope="col">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CandidateFeesDetails.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm">
                              <div className="avatar-title bg-light text-secondary rounded fs-24">
                                <i className="ri-folder-zip-line"></i>
                              </div>
                            </div>
                            <div className="ms-3 flex-grow-1">
                              <h5 className="fs-14 mb-0">
                                <Link to="#" className="text-dark">
                                  {item.label}
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Fees;
