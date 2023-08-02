import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Input, Row } from "reactstrap";
import NoData from "../../Components/Common2/NoData";
import illustarator from "../../assets/images/user-illustarator-1.png";
import { AddEditSkillDialog } from "./AddEditSkillDialog";
import { SkillsTable } from "./SkillManagementTable";

const SkillManagement = () => {
  const [showModal, setShowModal] = useState(false);

  const [jobFunctionArray, setJobFunctionArray] = useState([]);
  const [editJobFunctionObj, setEditJobFunctionObj] = useState();
  const [editMode, setEditMode] = useState('Create')

  // trigerred when add/edit happens and row data pushed into outer table data
  const handleSubmit = (updatedRow) => {
    if (editMode === 'Edit') {
      setJobFunctionArray((rows) =>
        rows.map((row) => (row.id === updatedRow.id ? updatedRow : row))
      );
    } else {
      setJobFunctionArray((rows) => _.concat(rows, [updatedRow]));
    }
  };

  // delete that obj from jobfunctionArray and update state
  const handleDeleteFromOuterTable = (jobIndex) => {
    const updatedJobFunctions = [...jobFunctionArray];
    updatedJobFunctions.splice(jobIndex, 1);
    setJobFunctionArray(updatedJobFunctions);
  };

  const handleEditFromOuterTable = (item) => {
    setEditJobFunctionObj(item);
    setEditMode('Edit')
    setShowModal(true);
  }

  const handleToggleChange = (index) => {
    const updatedArray = [...jobFunctionArray];
    if(updatedArray && updatedArray[index] && updatedArray[index].isScreeningEnabled){
      updatedArray[index].isScreeningEnabled = false;
    }
    else{
      updatedArray[index].isScreeningEnabled = true;
    }
    setJobFunctionArray(updatedArray);
  }

  return (
    <div style={{ marginTop: "5rem" }}>
      <h2 className="bg-soft-warning p-3 mb-0">Skill Management</h2>
      <div style={{ margin: "1rem" }}>
        <Row>
          <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
            <Link
              to="#"
              className="btn btn-success w-100"
              onClick={() => {
                setShowModal(true);
                setEditJobFunctionObj({})
                setEditMode('Create')
              }}
            >
              <i className="ri-add-line align-bottom me-1"></i> Add
            </Link>
          </Col>
          <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
            <div className="search-box">
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

        {jobFunctionArray.length > 0 ? (
          <>
            <div
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
              className="mt-4 table-responsive"
            >
              <SkillsTable
                data={jobFunctionArray || []}
                onDelete={handleDeleteFromOuterTable}
                onEdit={handleEditFromOuterTable}
                onToggle={handleToggleChange}
              />
            </div>
          </>
        ) : (
          <div
            style={{ height: "55vh" }}
            className="d-flex flex-row justify-content-center align-items-center"
          >
            <NoData
              image={illustarator}
              classForImage="mb-3"
              message="No Skills found. Add Job Category and skills from top to manage them here."
            />
          </div>
        )}
      </div>

      {showModal && (
        <AddEditSkillDialog
          selectedRow={editMode === 'Edit' ? editJobFunctionObj : {}}
          open={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
          editMode={editMode}
        />
      )}
    </div>
  );
};

export default SkillManagement;
