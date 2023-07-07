import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Alert,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import InstructionHeader from "./components/InstructionHeader";

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

        <Row className="align-items-center justify-content-center">
          <Col md={8} lg={8} xl={8}>
            <Card className="mt-5">
              <CardBody className="p-5">
                <div className="text-center mt-2">
                  <h5 className="text-primary fs-20">Instructions</h5>
                  <div className="d-flex gap-4 justify-content-center">
                    <p className="text-muted">Test Duration: 30 minutes</p>
                    <p className="text-muted">No of Questions: 8</p>
                  </div>
                </div>

                <Alert
                  className="alert-borderless alert-warning mt-3 text-center mb-2 mx-2"
                  role="alert"
                >
                  Please Follow the Instructions
                </Alert>
                <div className="p-2">
                  <ol className="numbered-list mt-3">
                    <li className="mt-3">
                      This is a timed test.Please make sure you are not
                      interrupted during the test, as e timer cannot be paused
                      once started
                    </li>
                    <li className="mt-3">
                      Please make sure you have stable internet connection
                    </li>
                    <li className="mt-3">
                      We recommend you to try sample test for a couple of
                      minutes,before taking the main test
                    </li>
                  </ol>
                  <div className="text-center gap-3 justify-content-center d-flex mt-5">
                    <Link
                      to="/pages-InstructionScreen"
                      className="btn btn-success continue"
                      type="submit"
                    >
                      Continue
                    </Link>
                    <button
                      className="btn btn-success ml-3 sample-test"
                      type="submit"
                    >
                      Try Sample Test
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>

            <div className="mt-4 d-flex gap-4 justify-content-center text-center">
              <Link
                to="/"
                className="fw-bold text-primary text-decoration-underline"
              >
                {" "}
                Platform Help
              </Link>{" "}
              <Link
                to="/"
                className="fw-bold text-primary text-decoration-underline"
              >
                Execution Environment{" "}
              </Link>{" "}
              <Link
                to="/"
                className="fw-bold text-primary text-decoration-underline"
              >
                {" "}
                FAQ's
              </Link>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InstructionScreen;
