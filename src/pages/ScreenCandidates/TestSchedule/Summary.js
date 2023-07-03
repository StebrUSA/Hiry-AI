import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Input, Label, Col, Row } from "reactstrap";

import {
  CoreSkillOptions,
  AdditionalSkills,
} from "../../../Components/Common2/Options";
//Multiselect
import Select from "react-select";
import makeAnimated from "react-select/animated";
import SelectComponent from "../../../Components/Common2/SelectCustom";

const animatedComponents = makeAnimated();

const Summary = () => {
  const [selectedAdditionalskills, setSelectedAdditionalskills] = useState([]);
  const [selectedCoreSkills, setSelectedCoreSkills] = useState([]);
  const GroupOptions = [
    {
      label: "Front End Developer",
      options: [
        { label: "Tanya", value: "Tanya" },
        { label: "Akanksha", value: "Akanksha" },
        { label: "Payal", value: "Payal" },
      ],
    },
    {
      label: "Backend Developer",
      options: [
        { label: "Dinesh", value: "Dinesh" },
        { label: "Vamsi", value: "Vamsi" },
        { label: "Raymond", value: "Raymond" },
      ],
    },
    {
      label: "Automation  Tester",
      options: [
        { label: "bhuvana", value: "bhuvana" },
        { label: "Mani", value: "Mani" },
        { label: "Rashi", value: "Rashi" },
      ],
    },
    {
      label: "Business Analyst",
      options: [
        { label: "michelle", value: "michelle" },
        { label: "henry", value: "henry" },
        { label: "Michigan", value: "Michigan" },
      ],
    },
    {
      label: "Designer",
      options: [
        { label: "Madrid", value: "Madrid" },
        { label: "Barcelona", value: "Barcelona" },
        { label: "Malaga", value: "Malaga" },
      ],
    },
    {
      label: "CA",
      options: [
        { label: "Montreal", value: "Montreal" },
        { label: "Toronto", value: "Toronto" },
        { label: "Vancouver", value: "Vancouver" },
      ],
    },
  ];
  const [selectedMulti3, setselectedMulti3] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isExpertSelected, setIsExpertSelected] = useState(false);

  const handleRadioChange = (event) => {
    const radioId = event.target.id;
    setSelectedRadio(radioId);
    setIsExpertSelected(radioId === "expertradio");
  };
  function handleMulti3(selectedMulti3) {
    setselectedMulti3(selectedMulti3);
  }

  const handleCoreSkills = (selectedCoreSkills) => {
    setSelectedCoreSkills(selectedCoreSkills);
  };

  const handleAdditionalskills = (selectedAdditionalskills) => {
    setSelectedAdditionalskills(selectedAdditionalskills);
  };

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div className="text-muted py-2">
            <h6 className="mb-3  fs-14 fw-semibold text-uppercase">
              How do you want your candidate to be screened?
              <span className="text-danger" style={{ marginLeft: "3px" }}>
                *
              </span>
            </h6>
            <div className="mt-4">
              <ul className="ps-3 list-unstyled vstack gap-2">
                <li>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="AIradio"
                      id="AIradio"
                      checked={selectedRadio === "AIradio"}
                      onChange={handleRadioChange}
                    />
                    <Label
                      className="form-check-label text-primary fs-14"
                      htmlFor="productTask"
                    >
                      Artificial Intelligence
                    </Label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="expertradio"
                      defaultValue=""
                      id="expertradio"
                      checked={selectedRadio === "expertradio"}
                      onChange={handleRadioChange}
                    />
                    <Label
                      className="form-check-label text-primary fs-14"
                      htmlFor="dashboardTask"
                    >
                      Screening Expert
                    </Label>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-top  mt-3">
              <div className="mb-4">
                {isExpertSelected ? (
                  <Row>
                    <Col lg={6}>
                      <div className="mb-2 mt-3 mb-lg-0">
                        <h6 className="mb-3 fw-semibold fs-14">
                          Select Candidate
                        </h6>
                        <SelectComponent options={GroupOptions} />
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col lg={6}>
                      <div className="mb-2 mt-3">
                        <h6 className="mb-3 fw-semibold fs-14">
                          Select Your Shorlisted Candidates
                        </h6>
                        <Select
                          value={selectedMulti3}
                          isMulti={true}
                          onChange={() => {
                            handleMulti3();
                          }}
                          options={GroupOptions}
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                        />
                      </div>
                    </Col>
                  </Row>
                )}
              </div>
              <Row>
                <Col xxl={6}>
                  <h6 className="mb-2 fw-semibold fs-14">Job Title</h6>
                  <Input type="text" className="form-control" id="job title" />
                </Col>

                <Col xxl={6}>
                  <h6 className="mb-2 fw-semibold fs-14">Client Name</h6>
                  <Input type="text" className="form-control" id="clientname" />
                </Col>
              </Row>

              {/* <Row
                <Col xxl={6}>
                  <div className="mt-4">
                    <h6 className="mb-3 fw-semibold fs-14">Core Skills</h6>

                    <Select
                      isMulti="true"
                      handleChange={handleCoreSkills}
                      options={CoreSkillOptions}
                    />
                  </div>
                </Col>
                <Col xxl={6}>
                  <div className="mt-4">
                    <h6 className="mb-3 fw-semibold fs-14">
                      Additional Skills
                    </h6>
                    <Select
                      isMulti={true}
                      handleChange={() => {
                        handleAdditionalskills;
                      }}
                      options={AdditionalSkills}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xxl={6}>
                  <h6 className="mb-3 mt-4 fw-semibold fs-14">
                    Level Of Expertise
                  </h6>
                  <Input
                    type="text"
                    className="form-control"
                    id="testname"
                    placeholder="Expertise Level for Screening Candidate"
                  />
                </Col>
                {isExpertSelected && (
                  <Col xxl={6}>
                    <h6 className="mb-3 mt-4 fw-semibold fs-14">
                      Name of the Screening Expert
                    </h6>
                    <Input
                      type="text"
                      className="form-control"
                      id="testname"
                      placeholder="The expert who will screen candidate"
                    />
                  </Col>
                )}
                </Row>*/}
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Summary;
