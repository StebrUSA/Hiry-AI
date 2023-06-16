import { Table, Col, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import Select from "react-select";

const CoreSkillOptions = [
  { id: 1, value: "React", label: "React" },
  { id: 3, value: "Javascript", label: "Javascript" },
  { id: 4, value: "Node JS", label: "Node JS" },
  { id: 5, value: "Redux", label: "Redux" },
  { id: 6, value: "Jest", label: "Jest" },
  { id: 7, value: "html", label: "HTML" },
  { id: 8, value: "css", label: "CSS" },
  { id: 9, value: "angular", label: "Angular" },
  { id: 10, value: "jquery", label: "Jquery" },
  { id: 11, value: "java", label: "Java" },
  { id: 12, value: "python", label: "Python" },
];

const AdditionalSkills = [
  { value: "UI/UX Centric Approach", label: "UI/UX Centric Approach" },
  { value: "Responsive Design", label: "Responsive Design" },
  { value: "HTML5", label: "HTML5" },
  { value: "Agile", label: "Agile" },
  { value: "Bootstrap", label: "Bootstrap" },
  { value: "git", label: "Git" },
  { value: "jira", label: "Jira" },
  { value: "teams", label: "Teams" },
  { value: "slack", label: "Slack" },
  { value: "azure", label: "Azure" },
];

const SkillTable = () => {
  const [selectedAdditionalskills, setSelectedAdditionalskills] = useState([]);
  const [selectedCoreSkills, setSelectedCoreSkills] = useState([]);

  const handleCoreSkills = (selectedOptions) => {
    const selectedSkills = selectedOptions.map((option) => option.label);
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
            <Select
              className="form-control-CreateJob_input"
              isMulti={true}
              onChange={handleCoreSkills}
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
              className="form-control-CreateJob_input"
              value={selectedAdditionalskills}
              isMulti={true}
              onChange={() => {
                handleAdditionalskills();
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
              className="table-bordered border-secondary  align-middle mb-0"
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
