import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Alert } from "reactstrap";
import InstructionHeader from "./InstructionHeader";

const InstructionScreen = () => {
  return (
    <>
      <InstructionHeader />

      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center mt-sm-5 mb-4">
              <p className="mt-3 fs-16 fw-semibold">
                Premium Admin & Dashboard Template
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mt-5 pt-5 mb-4 justify-content-center">
          <Col lg={6}>
            <Card>
              <div className="p-lg-5 p-4 text-center">
                <div className="avatar-lg mx-auto mt-2">
                  <div className="avatar-title bg-light text-success display-3 rounded-circle">
                    <i className="ri-checkbox-circle-fill"></i>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <h4>Well done !</h4>
                  <p className="text-muted mx-4">
                    You have successfully completed the test
                  </p>
                  <div className="mt-4">
                    <Link to="/" className="btn btn-success w-80">
                      Back to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InstructionScreen;
