import { Table, Col, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import Select from "react-select";

import {
  CoreSkillOptions,
  AdditionalSkills,
} from "../../../Components/Common2/Options";
import SelectComponent from "../../../Components/Common2/SelectCustom";
const SkillTable = () => {
  const [selectedAdditionalskills, setSelectedAdditionalskills] = useState([]);
  const [selectedCoreSkills, setSelectedCoreSkills] = useState([]);

  const handleCoreSkills = (selectedOptions) => {
    const selectedSkills =
      selectedOptions && selectedOptions.map((option) => option.label);
    // Remove rows associated with deselected skills
    const newData = selectedCoreSkills.filter((item) =>
      selectedSkills.includes(item.skills)
    );
    // Add rows for newly selected skills
    selectedOptions.forEach((option) => {
      const isExisting = selectedCoreSkills.some(
        (item) => item.skills === option.label
      );
      if (!isExisting) {
        const newRow = { skills: option.value, experience: "", rating: 0 };
        newData.push(newRow);
      }
    });
    setSelectedCoreSkills(newData);
  };

  const handleAdditionalskills = (selectedAdditionalskills) => {
    setSelectedAdditionalskills(selectedAdditionalskills);
  };

  const handleRatingUpdate = (index, newRating) => {
    if (newRating >= 0 && newRating <= 10) {
      setSelectedCoreSkills((prevData) => {
        const newData = [...prevData];
        newData[index] = { ...newData[index], rating: newRating };
        return newData;
      });
    }
  };

  const handleExperienceInputChange = (index, experience) => {
    setSelectedCoreSkills((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], experience };
      return newData;
    });
  };

  return (
    <>
      <Row>
        <Col lg={6}>
          <div className="mt-3">
            <Label htmlFor="choices-text-input" className="form-label">
              Core Skills
            </Label>

            <SelectComponent
              isMulti="true"
              handleChange={handleCoreSkills}
              options={CoreSkillOptions}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div>
            <Label htmlFor="choices-text-input" className="form-label mt-3">
              Additional Skills
            </Label>
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
      {selectedCoreSkills.length > 0 && (
        <div className="live-preview">
          <div className="table-responsive mt-4">
            <Table
              className="table-bordered border-secondary align-middle mb-0"
              style={{ width: "600px" }}
            >
              <thead>
                <tr>
                  <th scope="col">Skills</th>
                  <th scope="col">No of Years of Experience</th>
                  <th scope="col">Rating out of 10</th>
                </tr>
              </thead>
              <tbody>
                {selectedCoreSkills.map((item, index) => (
                  <tr key={index}>
                    <td className="fw-medium">{item.skills}</td>
                    <td>
                      {" "}
                      <Input
                        type="text"
                        className="form-control ml-20  smaller-input"
                        id="jobtitle"
                        value={item.experience}
                        onChange={(e) =>
                          handleExperienceInputChange(index, e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <div className="input-step step-info">
                        <button
                          type="button"
                          className="minus"
                          onClick={() =>
                            handleRatingUpdate(index, item.rating - 1)
                          }
                        >
                          –
                        </button>
                        <Input
                          type="number"
                          className="product-quantity"
                          value={item.rating}
                          min="0"
                          max="10"
                          readOnly
                        />
                        <button
                          type="button"
                          className="plus"
                          onClick={() =>
                            handleRatingUpdate(index, item.rating + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillTable;
