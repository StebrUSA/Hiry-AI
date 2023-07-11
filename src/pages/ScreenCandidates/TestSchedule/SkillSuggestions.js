import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Table, Input } from "reactstrap";
import { skillSuggestions } from "../../../common/data/skillSuggestions";
import AddSkillModal from "./AddSkillModal";

const FeaturedCompanies = () => {
  const [skills, setSkills] = useState([]);
  const [addSkillModal, setAddSkillModal] = useState(false);

  useEffect(() => {
    setSkills(skillSuggestions.slice(0, 5));
  }, []);

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const addNewSkills = () => {
    setAddSkillModal(true);
  };

  const handleAddClick = (selectedSkills) => {
    selectedSkills.forEach((selectedSkill) => {
      const skillExists = skills.some(
        (skill) => skill.lable === selectedSkill.lable
      );

      if (!skillExists) {
        const updatedSkills = [...skills, selectedSkill];
        setSkills(updatedSkills);
      }
    });
    setAddSkillModal(false);
  };

  return (
    <React.Fragment>
      <Card>
        <CardHeader className="align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1">Suggested Skills</h4>
          <div className="flex-shrink-0">
            <Link
              to="#"
              type="button"
              onClick={addNewSkills}
              className="btn btn-soft-primary btn-sm"
            >
              Add New Skills
            </Link>
            <AddSkillModal
              show={addSkillModal}
              onAddClick={handleAddClick}
              onCloseClick={() => setAddSkillModal(false)}
            />
          </div>
        </CardHeader>

        <CardBody>
          <div className="table-responsive table-card">
            <Table className="table table-centered table-hover align-middle table-nowrap mb-0">
              <thead className="bg-light text-muted">
                <tr>
                  <th scope="col">Company</th>
                  <th scope="col">Version</th>
                  <th scope="col">Skill Level</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-xs me-2 flex-shrink-0">
                          <div
                            className={
                              "avatar-title bg-soft-" +
                              skill.bgColor +
                              " rounded"
                            }
                          >
                            <img src={skill.img} alt="" height="25" />
                          </div>
                        </div>
                        <h6 className="mb-0">{skill.lable}</h6>
                      </div>
                    </td>
                    <td>{skill.version}</td>
                    <td>
                      <input
                        type="text"
                        className="form-control skillinput"
                        id="Skill level"
                      />
                    </td>
                    <td>
                      <i
                        className="ri-delete-bin-5-line cursor-pointer text-muted me-2"
                        onClick={() => deleteSkill(index)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default FeaturedCompanies;
