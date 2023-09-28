import { Table, Col, Input, Label, Row } from "reactstrap";
import React, { useEffect, useState } from "react";
import Select from "react-select";

import {
  CoreSkillOptions,
  AdditionalSkills,
} from "../../../Components/Common2/Options";

const SkillTable = ({ featuredSkills = [] }) => {
  const [selectedAdditionalskills, setSelectedAdditionalskills] = useState([]);
  const [selectedCoreSkills, setSelectedCoreSkills] = useState([]);
  const [skillsExpList, setSkillsExpList] = useState([]);
  const [selectedExpList, setSelectedExpList] = useState([]);

  useEffect(() => {
    const mappedSkills = featuredSkills.map((item) => {
      return { skills: item.value, experience: "", rating: 0 };
    });
    setSkillsExpList(mappedSkills);
    setSelectedCoreSkills(featuredSkills);
    setSelectedExpList(mappedSkills);
    setSelectedAdditionalskills("");
  }, [featuredSkills]);

  const handleCoreSkills = (selectedOptions) => {
    const remSkill =
      (selectedAdditionalskills.length > 0 &&
        selectedAdditionalskills.map((item) => {
          return { skills: item.value, experience: "", rating: 0 };
        })) ||
      [];
    const selectedSkills =
      selectedOptions && selectedOptions.map((option) => option.value);
    // Remove rows associated with deselected skills
    const newData = skillsExpList.filter((item) =>
      selectedSkills.includes(item.skills)
    );
    // setSkillsExpList(newData);
    setSelectedCoreSkills(selectedOptions);
    // Add rows for newly selected skills
    selectedOptions.forEach((option) => {
      const isExisting = skillsExpList.some(
        (item) => item.skills === option.value
      );
      if (!isExisting) {
        const newRow = { skills: option.value, experience: "", rating: 0 };
        newData.push(newRow);
      }
    });
    setSelectedExpList(newData);
    setSkillsExpList([...newData, ...remSkill]);
  };

  const handleAdditionalskills = (additionalOptions) => {
    const arr = additionalOptions.map((item) => {
      return { skills: item.value, experience: "", rating: 0 };
    });
    setSelectedAdditionalskills(additionalOptions);
    setSkillsExpList([...selectedExpList, ...arr]);
  };

  const handleRatingUpdate = (index, newRating) => {
    if (newRating >= 0 && newRating <= 10) {
      setSkillsExpList((prevData) => {
        const newData = [...prevData];
        newData[index] = { ...newData[index], rating: newRating };
        return newData;
      });
    }
  };

  const handleExperienceInputChange = (index, experience) => {
    setSkillsExpList((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], experience };
      return newData;
    });
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="mt-3">
            <Label htmlFor="choices-text-input" className="form-label">
              Core Skills
            </Label>
            <Select
              isMulti={true}
              onChange={handleCoreSkills}
              value={selectedCoreSkills || []}
              options={featuredSkills || []}
            />
          </div>
        </Col>
        <Col lg={12}>
          <div>
            <Label htmlFor="choices-text-input" className="form-label mt-3">
              Additional Skills
            </Label>
            <Select
              isMulti={true}
              value={selectedAdditionalskills}
              onChange={handleAdditionalskills}
              options={AdditionalSkills}
            />
          </div>
        </Col>
      </Row>
      {skillsExpList.length > 0 && (
        <div className="live-preview">
          <div className="table-responsive mt-4">
            <Table
              className="table-bordered border-secondary align-middle mb-0"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th scope="col">Skills</th>
                  <th scope="col">No of Years of Experience</th>
                  <th scope="col">Rating out of 10</th>
                </tr>
              </thead>
              <tbody>
                {skillsExpList.map((item, index) => (
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
