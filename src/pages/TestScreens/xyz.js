import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import Header from "./Header";
import classnames from "classnames";
import CodeMirror from "@uiw/react-codemirror";

const BasicSignIn = () => {
  document.title = "Basic SignIn | Velzon - React Admin & Dashboard Template";

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  const [arrowNavTab, setarrowNavTab] = useState("1");
  const arrowNavToggle = (tab) => {
    if (arrowNavTab !== tab) {
      setarrowNavTab(tab);
    }
  };
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          <Col md="2">
            <div className="sidebar">
              <Nav vertical className="sidebar-nav">
                <NavItem className="mr-2">
                  <NavLink href="#">
                    <i className="fas fa-home fa-lg"></i>{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="fs-16" href="#">
                    1
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="fs-16" href="#">
                    2
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="fs-16" href="#">
                    3
                  </NavLink>
                </NavItem>
                {/* Add more NavItems for additional questions */}
              </Nav>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="d-flex gap-2 mt-3 justify-content-end">
            <button type="button" className="btn btn-primary">
              Previous
            </button>

            <button type="button" className="btn btn-primary ml-2">
              Next
            </button>
          </Col>
        </Row>
        <Row>
          <Col md="5" className="question-card">
            <Card>
              <CardHeader className="fw-bold fs-16">Question 1</CardHeader>
              <CardBody className="question">
                {/* Add your question content here */}
                Write a statement to declare and initialize an array named
                denominations that contains exactly six elements of type int.
                Your declaration statement should initialize the elements of the
                array to the following values: 1, 5, 10, 25, 50, 100. (The value
                1 goes into the first element, the value 100 to the last.)
              </CardBody>
            </Card>
          </Col>
          <Col md="7">
            <Card className="code-editor-card">
              <CardHeader className="fw-bold fs-16">Code Editor</CardHeader>
              <CardBody>
                {" "}
                <CodeMirror height="450px" value="" onChange={onChange} />
              </CardBody>
            </Card>
            <Col xxl={12}>
              <Card>
                <CardBody>
                  <Nav
                    pills
                    className="nav nav-pills arrow-navtabs nav-success bg-light mb-3"
                  >
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: arrowNavTab === "1",
                        })}
                        onClick={() => {
                          arrowNavToggle("1");
                        }}
                      >
                        Test Results
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: arrowNavTab === "2",
                        })}
                        onClick={() => {
                          arrowNavToggle("2");
                        }}
                      >
                        Custom Input
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={arrowNavTab} className="text-muted">
                    <TabPane tabId="1" id="arrow-overview">
                      <h6>Give your text a good structure</h6>
                      <p className="mb-0">Contrary to popular belief</p>
                    </TabPane>
                    <TabPane tabId="2" id="arrow-profile">
                      <h6>Use a color palette</h6>
                      <p className="mb-0">Opposites attract</p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default BasicSignIn;