import React from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Container } from "reactstrap";

import List from "./List";

const EventList = () => {
  document.title =
    "Hiring Events | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Hiring Events" pageTitle="Events" />
          <List />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EventList;
