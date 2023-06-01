import React from "react";
import { Col, Container, Row } from "reactstrap";

//import Components
import UpgradeAccountNotise from "./UpgradeAccountNotise";

import Widget from "./Widget";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import JobsOverview from "./JobsOverview";
import MyTasks from "./MyTasks";
import UpcomingActivities from "./UpcomingActivities";
import RecentJobPositions from "./RecentJobPositions";
import RecentlyApplied from "./RecentlyApplied";
import JobSources from "./JobSources";

const DashboardAnalytics = () => {
  document.title = "Analytics | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Candidate Dashboard" pageTitle="Dashboards" />
          <Row>
            <Col xxl={5}>
              <UpgradeAccountNotise />
              <Widget />
            </Col>
            <UpcomingActivities />
          </Row>
          <Row>
            <JobsOverview />
            <MyTasks />
          </Row>
          <Row>
            <RecentJobPositions />
            <RecentlyApplied />
            <JobSources />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardAnalytics;
