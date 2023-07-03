import React from "react";
import { Container, Col, Row, Alert } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import SkillSuggestions from "./SkillSuggestions";
import Summary from "./Summary";
import TimeTracking from "./TimeTracking";
import AssignExpert from "./AssignExpert";

const TaskDetails = () => {
  document.title = "Tasks Details | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Tasks Details" pageTitle="Tasks" />
          <Row>
            <Col xxl={8}>
              <Summary />
              {/* <Comments />*/}
              <TimeTracking />
            </Col>
            <Col xxl={4}>
              <SkillSuggestions />
              <AssignExpert />
            </Col>
            <Col xxl={8}>
              <Alert className="alert mt-2" color="success">
                After Scheduling the Screening the candidate will get the
                details via email for confirmation
              </Alert>
              <div className="text-end mb-4 mt-4">
                <button type="submit" className="btn btn-danger w-sm me-1">
                  Schedule Test
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TaskDetails;
