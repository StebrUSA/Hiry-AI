import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import Header from "./components/Header";
import TestFooter from "./components/TestFooter";
import TestContent from "./components/TestContent";
import TestSider from "./components/TestSider";

const BasicSignIn = () => {
  document.title = "Basic SignIn | Velzon - React Admin & Dashboard Template";

  const onChange = React.useCallback((value) => {
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
      <div className="main-container">
        <Header />
        <Container className="test-container" fluid>
          <Row className="g-0">
            {/* Sidebar started */}
            <Col xxl={1} xl={1} lg={1} md={1} className="test-section">
              <TestSider />
            </Col>
            {/* Sidebar ended */}

            {/* Question and code editor */}
            <Col xxl={11} lg={11} md={11} sm={11} className="m-0 test-section">
              <TestContent />
            </Col>
          </Row>
        </Container>
        <TestFooter />
      </div>
    </React.Fragment>
  );
};

export default BasicSignIn;
