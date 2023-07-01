import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./Header";
import TestSider from "./TestSider";
import TestContent from "./TestContent";
import TestFooter from "./TestFooter";

const InstructionScreen = () => {
  document.title = "Basic SignIn | Velzon - React Admin & Dashboard Template";

  const [activeQuestion, setActiveQuestion] = useState(0); // State variable for active question

  const handleNavigationItemClick = (questionIndex) => {
    setActiveQuestion(questionIndex);
  };

  // Define the navigation data
  const navigationData = [
    {
      heading: "React",
      problems: [
        { text: "Problem 1", type: "coding" },
        { text: "Problem 2", type: "MCQ" },
        { text: "Problem 3", type: "coding" },
      ],
    },
    {
      heading: "Javascript",
      problems: [
        { text: "Problem 1", type: "coding" },
        { text: "Problem 2", type: "coding" },
      ],
    },
    {
      heading: "Html and Css",
      problems: [
        { text: "Problem 1", type: "coding" },
        { text: "Problem 2", type: "coding" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="main-container">
        <Header />
        <Container className="test-container" fluid>
          <Row className="g-0">
            <Col xxl={1} xl={1} lg={1} md={1} className="test-section">
              <TestSider
                navigationData={navigationData}
                activeQuestion={activeQuestion}
                handleNavigationItemClick={handleNavigationItemClick}
              />
            </Col>
            <Col xxl={11} lg={11} md={11} sm={11} className="m-0 test-section">
              <TestContent
                navigationData={navigationData}
                activeQuestion={activeQuestion}
              />
            </Col>
          </Row>
        </Container>
        <TestFooter />
      </div>
    </React.Fragment>
  );
};

export default InstructionScreen;
