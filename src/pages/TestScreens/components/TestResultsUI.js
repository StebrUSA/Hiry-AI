import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  Alert,
  NavItem,
  Nav,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

const TestResultsUI = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [topBorderTab, settopBorderTab] = useState("1");

  const topBordertoggle = (tab) => {
    if (topBorderTab !== tab) {
      settopBorderTab(tab);
    }
  };

  const toggleBottomCanvas = () => {
    setIsBottom(!isBottom);
  };

  return (
    <>
      <Row>
        <Col md={12} className="d-flex gap-2 mt-3 align-items-center ">
          <button
            onClick={toggleBottomCanvas}
            type="button"
            className="run-button btn btn-success"
          >
            Run Code
          </button>
          <Link
            to="/pages-testCompletion"
            type="button"
            className="submit-button btn btn-success"
          >
            Submit
          </Link>
        </Col>
      </Row>
      <Offcanvas
        isOpen={isBottom}
        direction="bottom"
        toggle={toggleBottomCanvas}
        id="offcanvasBottom"
        style={{ minHeight: "46vh" }}
      >
        <OffcanvasHeader
          toggle={toggleBottomCanvas}
          id="offcanvasBottomLabel"
          className="border-bottom"
        >
          Compiled Succesfully{" "}
          <span>
            <Alert className="alert mt-2" color="success">
              All Available Test Cases Passed
            </Alert>
          </span>
        </OffcanvasHeader>
        <OffcanvasBody>
          <Row>
            <Col xxl={12}>
              <Nav
                tabs
                className="nav nav-tabs nav-justified nav-border-top nav-border-top-info mb-3"
              >
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: topBorderTab === "1" })}
                    onClick={() => {
                      topBordertoggle("1");
                    }}
                  >
                    <i className="ri-question-answer-line align-middle me-1"></i>{" "}
                    Test Case 1
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: topBorderTab === "2" })}
                    onClick={() => {
                      topBordertoggle("2");
                    }}
                  >
                    <i className="ri-question-answer-line align-middle"></i>{" "}
                    Test Case 2
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: topBorderTab === "3" })}
                    onClick={() => {
                      topBordertoggle("3");
                    }}
                  >
                    <i className="ri-question-answer-line align-middle me-1"></i>
                    Test Case 3
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: topBorderTab === "4" })}
                    onClick={() => {
                      topBordertoggle("4");
                    }}
                  >
                    <i className="ri-question-answer-line align-middle me-1"></i>
                    Test Case 4
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={topBorderTab} className="text-muted">
                <TabPane tabId="1" id="nav-border-justified-home">
                  <h6>Input(stdin)</h6>
                  <p className="mb-0">1</p>
                  <h6 className="mt-3">Your Output(stout)</h6>
                  <p className="mb-0">1</p>
                  <h6 className="mt-3">Expected Output</h6>
                  <p className="mb-0">1</p>
                </TabPane>

                <TabPane tabId="2" id="nav-border-justified-profile">
                  <h6>Input(stdin)</h6>
                  <p className="mb-0">1</p>
                  <h6 className="mt-3">Your Output(stout)</h6>
                  <p className="mb-0">1</p>
                  <h6 className="mt-3">Expected Output</h6>
                  <p className="mb-0">1</p>
                </TabPane>

                <TabPane tabId="3" id="nav-border-justified-messages">
                  <h6>Input(stdin)</h6>
                  <p className="mb-0">1</p>
                  <h6 className="mt-3">Your Output(stout)</h6>
                  <p className="mb-0">1</p>
                  <h6 className="mt-3">Expected Output</h6>
                  <p className="mb-0">1</p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default TestResultsUI;
