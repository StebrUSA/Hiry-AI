import React, { useState } from "react";

import { Input, Col, Row, Label } from "reactstrap";

//Multiselect
import Select from "react-select";
import makeAnimated from "react-select/animated";
import SelectComponent from "../../../Components/Common2/SelectCustom";
import DropDownCustomComponent from "../../../Components/Common2/DropDownCustom";
import { CategoryOptions } from "../../../Components/Common2/Options";

const animatedComponents = makeAnimated();

const Summary = ({ isExpertSelected }) => {
  const selectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white", // Set the background color to white
      border: "1px solid #ced4da", // Adding a border to make it more visible
    }),
  };

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

  function handleMulti3(selectedMulti3) {
    setselectedMulti3(selectedMulti3);
  }

  return (
    <React.Fragment>
      <div className="pt-3 border-top  mt-3">
        <div className="mb-4">
          {isExpertSelected ? (
            <Row>
              <Col lg={6}>
                <div className="mb-2 mt-3">
                  <h6 className="mb-3 fw-semibold fs-14">Select Candidate</h6>
                  <SelectComponent
                    options={GroupOptions}
                    styles={selectStyles}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-2 mt-3">
                  <h6 className="mb-3 fw-semibold fs-14">
                    Select Job Function
                  </h6>
                  <DropDownCustomComponent
                    LabelName="Select..."
                    options={CategoryOptions}
                    width="w-100"
                    tagName="button"
                    dropDownButtonClass="mdi mdi-chevron-down"
                    className="btn btn-light form-control d-flex justify-content-between text-muted border bg-white"
                  />
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
                    styles={selectStyles}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-2 mt-3">
                  <h6 className="mb-3 fw-semibold fs-14">
                    Select Job Function
                  </h6>
                  <DropDownCustomComponent
                    LabelName="Select..."
                    options={CategoryOptions}
                    width="w-100"
                    tagName="button"
                    dropDownButtonClass="mdi mdi-chevron-down"
                    className="btn btn-light form-control d-flex justify-content-between text-muted border bg-white"
                  />
                </div>
              </Col>
            </Row>
          )}
        </div>
        <div className="py-2">
          <Row>
            <Col xxl={6}>
              <h6 className="mb-2 fw-semibold fs-14">Test Title</h6>
              <Input type="text" className="form-control" id="job title" />
            </Col>

            <Col xxl={6}>
              <h6 className="mb-2 fw-semibold fs-14">Client Name</h6>
              <Input type="text" className="form-control" id="clientname" />
            </Col>
            {isExpertSelected ? (
              <Col xxl={6}>
                <h6 className="mb-2 mt-4 fw-semibold fs-14">
                  Zoom / Microsoft Webex Link
                </h6>
                <Input
                  type="text"
                  className="form-control"
                  id="interview link"
                />
              </Col>
            ) : (
              ""
            )}
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Summary;
