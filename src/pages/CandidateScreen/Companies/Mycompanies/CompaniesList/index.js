import React from "react";
import BreadCrumb from "../../../../../Components/Common/BreadCrumb";
import { Container } from "reactstrap";

import List from "./List";

const ProjectList = () => {
  document.title =
    "Project List | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Companies List for Jobs Applied"
            pageTitle="Companies"
          />
          <List />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ProjectList;
