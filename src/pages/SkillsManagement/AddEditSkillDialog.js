import {
  Button,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { v4 as uuid } from 'uuid';

const relatedSkillsInitialState = {
  skillName: "",
  skillVersion: "",
};

const jobFunctionInitial = {
  jobCategory: "",
  skills: [],
  isScreeningEnabled: false,
};

const tableBodyStyle = {
  display: 'block',
  width: '100%',
  maxHeight: '250px',
  overflowY: 'auto'
}

export const AddEditSkillDialog = ({
  selectedRow,
  open,
  onClose = () => {},
  onSubmit = () => {},
  editMode
}) => {
  const [relatedSkillsArray, setRelatedSkillsArray] = useState([]);
  const [currentJob, setCurrentJob] = useState(jobFunctionInitial);
  const [currentRelatedSkill, setCurrentRelatedSkill] = useState(
    relatedSkillsInitialState
  );

  useEffect(() => {
    if (editMode === 'Edit') {
      setCurrentJob({ jobCategory: selectedRow?.jobCategory })
      setRelatedSkillsArray([...selectedRow?.skills])
    }

  }, [editMode, selectedRow, open])

  const handleJobCategoryChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setCurrentJob({ ...currentJob, [name]: value });
  };

  const handleRelatedSkillChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setCurrentRelatedSkill({
      ...currentRelatedSkill,
      [name]: value,
    });
  };

  const handleDeleteSkill = (index) => {
    const updatedArray = relatedSkillsArray.filter((ele, key) => {
      return index !== key;
    });
    setRelatedSkillsArray(updatedArray);
    setCurrentJob({
      ...currentJob,
      skills: updatedArray,
    });
  };

  const addRelatedSkill = () => {
    if (currentJob && currentJob.jobCategory && currentRelatedSkill && currentRelatedSkill.skillName) {
      const updatedSkillsArray = [...relatedSkillsArray, currentRelatedSkill]
      setRelatedSkillsArray(updatedSkillsArray);
      setCurrentJob({
        ...currentJob,
        skills: updatedSkillsArray,
      });
      setCurrentRelatedSkill(relatedSkillsInitialState); // Reset the related skill input fields
    } else { }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (currentJob && currentJob.jobCategory && currentJob.skills?.length > 0) {
      if (editMode === 'Edit') {
        onSubmit({ id: selectedRow.id, isScreeningEnabled: selectedRow.isScreeningEnabled, ...currentJob });
      } else {
        onSubmit({ ...currentJob, id: uuid() });
      }
      setCurrentJob(jobFunctionInitial); // Reset the job input fields
      onClose();
    } else { }
  };

  const handleClose = () => {
    onClose();
    setCurrentJob(jobFunctionInitial);
  };

  return (
    <Modal
      id="showModal"
      isOpen={open}
      toggle={handleClose}
      style={{ width: "40rem" }}
    >
      <ModalHeader className="bg-soft-info p-3">Skill Management</ModalHeader>
      <ModalBody>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} xs={12} sm={12}>
            <Label for="jobCategory">
              Job Category <span className="text-danger">*</span>
            </Label>
            <Input
              name="jobCategory"
              type="text"
              id="jobCategory"
              placeholder="Enter job category"
              value={currentJob.jobCategory}
              onChange={handleJobCategoryChange}
            />
          </Col>
        </Row>

        <h4 className="bg-light py-2 text-muted fw-medium mb-3 mt-4">
          Related Skills and Version
        </h4>

        <Row>
          <Col xl={6} lg={6}>
            <Label for="relatedSkill">
              Related Skill <span className="text-danger">*</span>
            </Label>
            <Input
              name="skillName"
              type="text"
              id="relatedSkill"
              placeholder="Enter name"
              value={currentRelatedSkill.skillName}
              onChange={handleRelatedSkillChange}
            />
          </Col>
          <Col xl={4} lg={4}>
            <Label for="version">
              Version <span className="text-muted"> (optional)</span>
            </Label>
            <Input
              name="skillVersion"
              type="text"
              id="version"
              placeholder="Enter version"
              value={currentRelatedSkill.skillVersion}
              onChange={handleRelatedSkillChange}
            />
          </Col>
          <Col className="mt-4" xl={2} lg={2}>
            <div style={{ marginTop: "3px" }}>
              <Button onClick={addRelatedSkill}>Add</Button>
            </div>
          </Col>
        </Row>

        {relatedSkillsArray.length > 0 && (
          <>
            <div className="mt-4">
              <Table
                className="table table-hover table-centered align-middle mb-0"
                style={{tableLayout: 'fixed', borderCollapse: 'collapse'}}
              >
                <thead className="bg-light text-muted">
                  <tr style={{display:'block'}}>
                    <th width="60%" scope="col">Skill</th>
                    <th width="30%" scope="col">Version</th>
                    <th width="10%" scope="col">Action</th>
                  </tr>
                </thead>
                <tbody style={{...tableBodyStyle}}>
                  {relatedSkillsArray.map((item, index) => (
                    <tr key={index} style={{display:'flex'}}>
                      <td width="60%"
                        scope="col"
                        className="fw-medium"
                      >
                        {item.skillName}
                      </td>
                      <td width="30%"
                        className="fw-medium"
                        scope="col"
                      >
                        {item.skillVersion}
                      </td>
                      <td width="10%" scope="col">
                        <div className="text-center">
                          <span className="fs-5 text-dark">
                            <i
                              className="cursor-pointer ri-delete-bin-line"
                              onClick={() => handleDeleteSkill(index)}
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
        )}

        <div className="text-end mt-4">
          <Button type="submit" onClick={handleSave}>
            Save
          </Button>
          <Button className="ms-3" color="soft-success" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
};
