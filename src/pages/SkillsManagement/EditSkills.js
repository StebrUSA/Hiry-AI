import React, { useCallback, useState } from "react";
import { Form, Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Input, Label, Modal, ModalHeader, Row } from "reactstrap";
import avatar1 from "../../../src/assets/images/users/avatar-1.jpg";
import { FormGroup } from "reactstrap";

const EditSkills = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    jobCategory: '', relatedSkills: ''
  });

  const [jobFunctionArray, setJobFunctionArray] = useState([]);

  React.useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('jobFunctionArray');
    if (dataFromLocalStorage) {
      setJobFunctionArray(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobFunctionArray([...jobFunctionArray, formData]);
    // localStorage.setItem(jobFunctionArray, JSON.stringify(jobFunctionArray));
    let jobFunctionArrayCopy = [...jobFunctionArray]
    localStorage.setItem('jobFunctionArray', JSON.stringify(...jobFunctionArrayCopy, formData));
    setFormData({jobCategory: '', relatedSkills: ''})
    toggle();
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value });
  }

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
    <div style={{ marginLeft: "30px", marginTop: "4rem" }}>
      <Row className="align-items-center mt-4" style={{ padding: "1rem" }} >
        <div className="col-md mt-24 bg-soft-warning p-3">
          <h2>Skills Management</h2>
        </div>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
          <div className="mt-10">
            <Link
              to="#"
              className="btn btn-success w-100"
              onClick={() => {
                toggle();
              }}
            >
              <i className="ri-add-line align-bottom me-1"></i> Add Job Category
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

      {localStorage && <h4 className="mt-3">Job Categories</h4>}

      <div className="pb-5 mb-3">
        <Row className="mt-3">
          {jobFunctionArray?.map((ele, index) => {
            return (
              <Col xxl={3} xl={3} lg={3} md={6} sm={12} key={index}>
                {" "}
                <Card className="bg-soft-info">
                  <CardBody>
                    <div className="d-flex align-items-center">
                      <div style={{justifyContent: "space-between"}} className="d-flex flex-grow-1 ms-3 pt-2">
                        <div className="justify-content-between align-items-center">
                          <div className="align-items-center">
                            <div className="fs-16 text-capitalize">
                              {ele.jobCategory}
                            </div>
                            <div className="fs-16 text-muted text-capitalize">
                              {ele.relatedSkills}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex ms-10 align-items-center justify-content-between">
                          <div className="d-flex mb-3">
                            {" "}
                            <span className="fs-5">
                              <i
                                className="cursor-pointer ri-pencil-fill me-2"
                                onClick={() => handleEditJobCategory(ele, index)}
                              ></i>
                            </span>
                            <span
                              className={"avatar-title bg-white fs-5 text-dark"}
                            >
                              <i
                                onClick={() => handelDeleteJobCategory(index)}
                                className="cursor-pointer ri-delete-bin-line"
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>

      <Modal id="showModal" isOpen={modal} toggle={toggle} centered size="md">
        <ModalHeader className="bg-soft-info p-3" toggle={toggle}>
          Skills Management
        </ModalHeader>
        
        {/* <Form
          className="tablelist-form"
          onSubmit={handleSubmit}
        > */}
          <Row style={{ width: "95%", margin: "auto" }} className="py-3">
            <Col xxl={12} xl={12} lg={12}>
              <Label for="jobCategory">
                Job Category
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
              <Label for="relatedSkills">
                Related Skills
              </Label>
              <Input
                name="relatedSkills"
                type="text"
                id="relatedSkills"
                placeholder="Enter some related skills using comma between them"
                onChange={handleChange}
              />
              <div className="text-end" type="submit">
                <Button className="mt-3" onClick={handleSubmit} >
                  Submit
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
        {/* </Form> */}
      </Modal>

    </div>
  );
};

export default EditSkills;