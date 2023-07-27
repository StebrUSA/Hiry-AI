import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Input, Label, Modal, ModalHeader, Row } from "reactstrap";
import { Table } from "reactstrap";

const dataJob = [
  {
    value: "Front End",
    label: "front_end",
    skills: [
      { value: "React", label: "React", version: "18.0.1" },
      { value: "Problem Solving", label: "Problem Solving", version: "" },
      { value: "VueJS", label: "VueJS", version: "15.0.1" },
      { value: "MongoDB", label: "MongoDB", version: "12.1.3" }
    ],
    screeningEnabled: false,
  },
  {
    value: "Back End",
    label: "back_end",
    skills: [
      { value: "Spring", label: "Spring", version: "18.0.1" },
      { value: "Core Java", label: "Core Java", version: "11.0.1" },
      { value: "Hibernate", label: "Problem Solving", version: "" },
      { value: "Dotnet", label: "Dotnet", version: "12.0.1" },
    ],
    screeningEnabled: false,
  },
  {
    value: "Testing",
    label: "testing",
    skills: [
      { value: "Selenium", label: "Selenium", version: "18.0.1" },
      { value: "Automation", label: "Automation", version: "9.0.1" },
      { value: "Problem Solving", label: "Problem Solving", version: "" },
      { value: "Core Java", label: "Core Java", version: "10.0.1" },
    ],
    screeningEnabled: false,
  },
  {
    value: "MEAN",
    label: "MEAN",
    skills: [
      { value: "MongoDB", label: "MongoDB", version: "18.0.3" },
      { value: "AngularJS", label: "ReactJS", version: "" },
      { value: "Node", label: "Node", version: "16.0.1" },
      { value: "Express", label: "Express", version: "13.0.1" },
    ],
    screeningEnabled: false,
  },

]

const EditSkills = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    jobCategory: '', relatedSkillsArray: []
  });

  const [relatedSkillsFormData, setRelatedSkillsFormData] = useState({
    relatedSkill: '', version: ''
  });

  const [jobFunctionArray, setJobFunctionArray] = useState(dataJob);
  const [relatedSkillsArray, setRelatedSkillsArray] = useState([]);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

  const handleOnClick = (e) => {
    e.preventDefault();
    setRelatedSkillsArray([...relatedSkillsArray, relatedSkillsFormData]);
    setRelatedSkillsFormData({ relatedSkill: '', version: '' })
  }

  const handleSave = (e) => {
    e.preventDefault();
    setJobFunctionArray(dataJob);
    setFormData({ jobCategory: '', relatedSkillsArray: [] })
    toggle();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    setRelatedSkillsFormData({ ...relatedSkillsFormData, [name]: value });
    setFormData({ ...formData, relatedSkillsArray: [...relatedSkillsArray] });
  }

  const handelDeleteSkill = (index) => {
    const updatedArray = relatedSkillsArray.filter((ele, key) => {
      return index !== key;
    });
    setRelatedSkillsArray(updatedArray);
  };

  const handelDeleteJobCategory = (index) => {
    const updateTeamMembers = jobFunctionArray.filter((ele, key) => {
      return index !== key;
    });
    setJobFunctionArray(updateTeamMembers);
  };

  const handleEditJobCategory = (e) => {
    console.log("inside on click!!")
  }

  return (
    <div style={{ marginLeft: "0px", marginTop: "4rem" }}>
      <Row className="align-items-center mt-4" style={{ padding: "1rem" }} >
        <div className="col-md mt-24 bg-soft-warning p-3" style={{ marginLeft: "0px" }} >
          <h2>Skills Management</h2>
        </div>
      </Row>
      <Row style={{ marginTop: "1rem", marginLeft: "0.3rem", marginRight: "0.3rem" }}>
        <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
          <div className="mt-10">
            <Link
              to="#"
              className="btn btn-success w-100"
              onClick={() => {
                toggle();
              }}
            >
              <i className="ri-add-line align-bottom me-1"></i> Add
            </Link>
          </div>
        </Col>
        <Col xxl={10} xl={6} lg={6} md={8} sm={10}>
          <div className="search-box mb-3" style={{ marginLeft: "0px" }}>
            <Input
              type="text"
              id="searchSkill"
              autoComplete="off"
              placeholder="Search for Job Category..."
            />
            <i className="ri-search-line search-icon"></i>
          </div>
        </Col>
      </Row>

      {jobFunctionArray.length &&
        <>
          <div style={{ width: "60%", justifyContent: "center", alignItems: "center", margin: "auto" }} className="table-responsive mt-4">
            <Table className="table-hover table-nowrap bg-white mb-0">
              <thead className="bg-light text-muted">
                <tr style={{ fontSize: "18px" }}>
                  <th style={{ padding: "12px" }} scope="col">Job Category</th>
                  <th scope="col">Skill | Version</th>
                  <th scope="col">Screening Enabled</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "16px" }}>
                {dataJob.map((item, index) => (
                  <tr key={index}>
                    <td width="25%" style={{ padding: "1.1rem" }} className="fw-medium">{item.value}</td>
                    <td width="20%">
                      {item?.skills?.map((cur, idx) => (
                        <>
                          {cur.version ?
                            <li>{cur.value} | {cur.version}</li>
                            : <li>{cur.value}</li>
                          }
                        </>
                      ))}
                    </td>
                    <td width="20%">NO</td>
                    <td width="5%">
                      <div className="d-flex ms-10 align-items-center">
                        <div className="form-check form-switch fs-5">
                          <Input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" defaultChecked="" />
                        </div>
                        <div style={{ marginLeft: "10px" }} className="d-flex mt-3 mb-3">
                          <span className="fs-4">
                            <i
                              className="cursor-pointer ri-pencil-fill me-2"
                            ></i>
                          </span>
                          <span
                            className={"avatar-title bg-white fs-4 text-dark"}
                          >
                            <i
                              className="cursor-pointer ri-delete-bin-line"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      }

      <Modal id="showModal" isOpen={modal} toggle={toggle} style={{ width: "40rem" }} >
        <ModalHeader className="bg-soft-info p-3" toggle={toggle}>
          Skills Management
        </ModalHeader>

        <Row style={{ width: "95%", margin: "auto" }} className="py-3">
          <Col xxl={12} xl={12} lg={12}>
            <Label for="jobCategory">
              Job Category <span className="text-danger">*</span>
            </Label>
            <Input
              name="jobCategory"
              type="text"
              id="jobCategory"
              placeholder="Enter job category"
              value={formData.jobCategory}
              onChange={handleChange}
            />
            <br></br>
            <div className="">
              <Label className="text-muted" for="relatedSkillsAndVersion">
                Related Skills and Version
              </Label>
            </div>
            <Row>
              <Col xl={6} lg={6}>
                <Label for="relatedSkill">
                  Related Skill <span className="text-danger">*</span>
                </Label>
                <Input
                  name="relatedSkill"
                  type="text"
                  id="relatedSkill"
                  placeholder="Enter related skill"
                  onChange={handleSkillsChange}
                />
              </Col>
              <Col xl={4} lg={4}>
                <Label for="version">
                  Version <span className="text-muted"> (optional)</span>
                </Label>
                <Input
                  name="version"
                  type="text"
                  id="version"
                  placeholder="Enter version"
                  onChange={handleSkillsChange}
                />
              </Col>
              <Col className="mt-4" xl={2} lg={2}>
                <div style={{ marginTop: "3px" }}>
                  <Button onClick={handleOnClick}>Add</Button>
                </div>
              </Col>
            </Row>

            {relatedSkillsArray.length > 0 &&
              <>
                <div className="mt-4">
                  <Table
                    className="table table-hover table-centered align-middle mb-0"
                    style={{ width: "100%" }}
                  >
                    <thead className="bg-light text-muted">
                      <tr>
                        <th scope="col">Skill</th>
                        <th scope="col">Version</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {relatedSkillsArray.map((item, index) => (
                        <tr key={index}>
                          <td style={{ width: "20rem" }} className="fw-medium">{item.relatedSkill}</td>
                          <td style={{ width: "16rem" }}>{item.version}</td>
                          <td style={{ width: "4rem" }}>
                            <div className="step-info">
                              <span className="avatar-title bg-white fs-5 text-dark">
                                <i
                                  className="cursor-pointer ri-delete-bin-line me-2 ms-2"
                                  style={{ marginLeft: "1rem" }}
                                  onClick={() => handelDeleteSkill(index)}
                                ></i>
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </>
            }

            <div className="text-end" type="submit">
              <Button className="mt-3" onClick={handleSave} >
                Save
              </Button>
              <Button
                className="mt-3 ms-3"
                color="soft-success"
                onClick={() => setModal(false)}
              >
                Cancel
              </Button>
            </div>

          </Col>
        </Row>
      </Modal>

    </div>
  );
};

export default EditSkills;