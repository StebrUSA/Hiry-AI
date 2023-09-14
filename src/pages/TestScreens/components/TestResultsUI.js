import React, { useEffect, useState } from "react";
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
import testCases from "../../../common/data/Testjson/testcases.json";
import correctCode from "../../../common/data/Testjson/answer.json";

const TestResultsUI = ({ isCodeEmpty, code }) => {
  const [isBottom, setIsBottom] = useState(false);
  const [TestCases, setTestCases] = useState(testCases);

  const toggleBottomCanvas = () => {
    setIsBottom(!isBottom);
  };
  const [outlineBorderNav, setoutlineBorderNav] = useState("1");
  const outlineBorderNavtoggle = (tab) => {
    if (outlineBorderNav !== tab) {
      setoutlineBorderNav(tab);
    }
  };

  const compareCodeWithCorrectCode = () => {
    // Get the correct JavaScript code from the JSON file
    const correctJavaScriptCode = correctCode.javascript_code;

    // Compare the provided code with the correct code
    if (code === correctJavaScriptCode) {
      return "Compiled Successfully";
    } else {
      return "Errors in the code.";
    }
  };

  const codeComparisonResult = compareCodeWithCorrectCode();
  return (
    <>
      <Row>
        <Col md={12} className="d-flex gap-2 mt-3 align-items-center ">
          <button
            onClick={() => {
              toggleBottomCanvas();
            }}
            type="button"
            className={`run-button btn text-white btn-dark ${
              isCodeEmpty ? "disabled" : ""
            }`}
          >
            Run Code
          </button>
          <Link
            to="/pages-testCompletion"
            type="button"
            className="submit-button btn text-white btn-dark"
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
          {codeComparisonResult}
          <span>
            <Alert
              className="alert mt-2"
              color={
                codeComparisonResult === "Compiled Successfully"
                  ? "success"
                  : "danger"
              }
            >
              All Available Test Cases Passed
            </Alert>
          </span>
        </OffcanvasHeader>
        {codeComparisonResult === "Compiled Successfully" ? (
          <OffcanvasBody>
            <Row>
              <Col xxl={12}>
                <Nav pills className="nav-custom-outline nav-dark mb-3">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: outlineBorderNav === "1",
                      })}
                      onClick={() => {
                        outlineBorderNavtoggle("1");
                      }}
                    >
                      Test Case 1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: outlineBorderNav === "2",
                      })}
                      onClick={() => {
                        outlineBorderNavtoggle("2");
                      }}
                    >
                      Test Case 2
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: outlineBorderNav === "3",
                      })}
                      onClick={() => {
                        outlineBorderNavtoggle("3");
                      }}
                    >
                      Test Case 3
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={outlineBorderNav} className="text-muted">
                  {TestCases.map((testCase, index) => (
                    <TabPane key={index} tabId={String(index + 1)}>
                      <h6>Input(stdin)</h6>
                      <p className="mb-0">{testCase.input}</p>
                      <h6 className="mt-3">Your Output(stout)</h6>
                      <p className="mb-0">{testCase.output}</p>
                      <h6 className="mt-3">Expected Output</h6>
                      <p className="mb-0">{testCase.expectedOutput}</p>
                    </TabPane>
                  ))}
                </TabContent>
              </Col>
            </Row>
          </OffcanvasBody>
        ) : (
          <OffcanvasBody>
            <Row>
              <Col xxl={12}>
                <Nav pills className="nav-custom-outline nav-dark mb-3">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: outlineBorderNav === "1",
                      })}
                      onClick={() => {
                        outlineBorderNavtoggle("1");
                      }}
                    >
                      Test Case 1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: outlineBorderNav === "2",
                      })}
                      onClick={() => {
                        outlineBorderNavtoggle("2");
                      }}
                    >
                      Test Case 2
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: outlineBorderNav === "3",
                      })}
                      onClick={() => {
                        outlineBorderNavtoggle("3");
                      }}
                    >
                      Test Case 3
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={outlineBorderNav} className="text-muted">
                  {TestCases.map((testCase, index) => (
                    <TabPane key={index} tabId={String(index + 1)}>
                      <h6>Failed-Syntax Error</h6>
                    </TabPane>
                  ))}
                </TabContent>
              </Col>
            </Row>
          </OffcanvasBody>
        )}
      </Offcanvas>
    </>
  );
};

export default TestResultsUI;
