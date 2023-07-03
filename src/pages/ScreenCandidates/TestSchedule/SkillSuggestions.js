import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Table, Input } from "reactstrap";
import { skillSuggestions } from "../../../common/data/skillSuggestions";

const FeaturedCompanies = () => {
  const [skills, setSkills] = useState(skillSuggestions);

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1">Suggested Skills</h4>
          <div className="flex-shrink-0">
            <Link to="#" className="btn btn-soft-primary btn-sm">
              Add New Skills
            </Link>
          </div>
        </CardHeader>

        <CardBody>
          <div className="table-responsive table-card">
            <Table className="table table-centered table-hover align-middle table-nowrap mb-0">
              <tbody>
                {skills.map((company, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-xs me-2 flex-shrink-0">
                          <div
                            className={
                              "avatar-title bg-soft-" +
                              company.bgColor +
                              " rounded"
                            }
                          >
                            <img src={company.img} alt="" height="16" />
                          </div>
                        </div>
                        <h6 className="mb-0">{company.lable}</h6>
                      </div>
                    </td>
                    <td>Version : 16.8</td>

                    <td>
                      {" "}
                      <i
                        className="ri-delete-bin-5-line  text-muted me-2"
                        onClick={() => deleteSkill(index)}
                        style={{ cursor: "pointer" }}
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
