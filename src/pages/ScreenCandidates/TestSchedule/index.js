import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Alert,
  Card,
  CardBody,
  Label,
  Input,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import ConfirmationScheduleModal from "./ConfirmationScheduleModal";

import SkillSuggestions from "./SkillSuggestions";
import Summary from "./Summary";
import TimeTracking from "./TimeTracking";
import AssignExpert from "./AssignExpert";
//import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskDetails = () => {
  document.title =
    "Schedule  Screening Test| Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

  const [isExpertSelected, setIsExpertSelected] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("AIradio");
  const [deleteModal, setdeleteModal] = useState(false);
  const radioOptions = [
    { id: "AIradio", label: "Artificial Intelligence" },
    { id: "expertradio", label: "Screening Expert" },
  ];

  const handleRadioChange = (event) => {
    const radioId = event.target.id;
    setSelectedRadio(radioId);
    setIsExpertSelected(radioId === "expertradio");
  };
  const handleScheduleTest = () => {
    // Call the API or perform the necessary actions to schedule the test
    //...

    // Display toast notification
    setdeleteModal(true);
    // toast.success("Test scheduled successfully!");
  };

  const handleConfirmClick = () => {
    setdeleteModal(false);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Schedule Screening Test"
            pageTitle="Screen Candidates"
          />
          <Row>
            <Col xxl={8}>
              <Card>
                <CardBody>
                  <div className="py-2">
                    <h6 className="mb-3  fs-14 fw-semibold text-uppercase">
                      How do you want your candidate to be screened?
                      <span
                        className="text-danger"
                        style={{ marginLeft: "3px" }}
                      >
                        *
                      </span>
                    </h6>
                    <div className="mt-4">
                      <ul className="ps-3 list-unstyled vstack gap-2">
                        {radioOptions.map((option) => (
                          <li key={option.id}>
                            <div className="form-check">
                              <Input
                                className="form-check-input"
                                type="radio"
                                name="screeningRadio"
                                id={option.id}
                                checked={selectedRadio === option.id}
                                onChange={handleRadioChange}
                              />
                              <Label
                                className="form-check-label text-primary fs-14"
                                htmlFor={option.id}
                              >
                                {option.label}
                              </Label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Summary isExpertSelected={isExpertSelected} />
                  </div>
                </CardBody>
              </Card>
              {/* <Comments />*/}
              <TimeTracking isExpertSelected={isExpertSelected} />
            </Col>
            <Col xxl={4}>
              <SkillSuggestions />
              {isExpertSelected ? <AssignExpert /> : ""}
            </Col>
            <Col xxl={8}>
              <Alert className="alert mt-2" color="success">
                After Scheduling the Screening the candidate will get the
                details via email for confirmation
              </Alert>
              <div className="text-end mb-4 mt-4">
                <button
                  type="submit"
                  onClick={handleScheduleTest}
                  className="btn btn-danger w-sm me-1"
                >
                  Schedule Test
                </button>
              </div>
              <ConfirmationScheduleModal
                show={deleteModal}
                onConfirmClick={handleConfirmClick}
                onCloseClick={() => setdeleteModal(false)}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <ToastContainer />*/}
    </React.Fragment>
  );
};

export default TaskDetails;
