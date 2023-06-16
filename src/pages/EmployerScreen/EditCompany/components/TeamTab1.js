import React, { useState } from "react";
import { Input, Label, Row, Card, CardBody, Col, Button } from "reactstrap";

//import images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
const TeamTab1 = () => {
  const [teamMemberAdded, setTeamMemberAdded] = useState([]);
  const [nameOfTeamMember, setNameOfTeamMember] = useState("");
  const [designationOfTeamMember, setDesignationOfTeamMember] = useState("");

  //  Button Hnadle for teamMember
  const handleNameChange = (e) => {
    setNameOfTeamMember(e.target.value);
  };
  const handleDesignationChange = (e) => {
    setDesignationOfTeamMember(e.target.value);
  };
  const handelDeleteTeamMember = (index) => {
    const updateTeamMembers = teamMemberAdded.filter((ele, key) => {
      return index !== key;
    });
    setTeamMemberAdded(updateTeamMembers);
  };
  return (
    <>
      <Row>
        <Col xxl={4}></Col>
        <Col xxl={4}>
          <Card>
            <CardBody>
              <div className="text-center">
                <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                  <img
                    src={avatar1}
                    className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                    alt="user-profile"
                  />
                  <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                    <Input
                      id="profile-img-file-input"
                      type="file"
                      className="profile-img-file-input"
                    />
                    <Label
                      htmlFor="profile-img-file-input"
                      className="profile-photo-edit avatar-xs"
                    >
                      <span className="avatar-title rounded-circle bg-light text-body">
                        <i className="ri-camera-fill"></i>
                      </span>
                    </Label>
                  </div>
                </div>
              </div>
              <br></br>
              <Label htmlFor="firstnameInput" className="form-label">
                Name
              </Label>
              <Input
                onChange={handleNameChange}
                value={nameOfTeamMember}
                type="text"
                className="form-control"
                id="firstnameInput"
                placeholder="Enter your Name"
                defaultValue="George"
              />

              <Label htmlFor="DesignationInput" className="form-label mt-2">
                Designation
              </Label>
              <Input
                onChange={handleDesignationChange}
                type="text"
                value={designationOfTeamMember}
                className="form-control"
                id="DesignationInput"
                placeholder="Enter your Designation"
                defaultValue="Engineer"
              />

              <Button
                className="mt-3"
                color="primary"
                onClick={() => {
                  if (
                    nameOfTeamMember.length === 0 ||
                    designationOfTeamMember.length === 0
                  ) {
                  } else {
                    setTeamMemberAdded([
                      ...teamMemberAdded,
                      {
                        image: "alt",
                        name: nameOfTeamMember,
                        designation: designationOfTeamMember,
                      },
                    ]);
                    setNameOfTeamMember("");
                    setDesignationOfTeamMember("");
                  }
                }}
              >
                <i className="ri-add-fill me-1 align-bottom"></i> Add
              </Button>
              <Button className="mt-3 ms-2" color="soft-success">
                Cancel
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xxl={4}></Col>
      </Row>

      <h4>Members</h4>
      <div className="pb-5 mb-3">
        <Row className="mt-3">
          {teamMemberAdded?.map((ele, index) => {
            return (
              <Col xxl={3} xl={3} lg={4} md={6} sm={12} key={index}>
                {" "}
                <Card>
                  <CardBody>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avatar-sm rounded">
                          <img
                            src={avatar1}
                            className="member-img img-fluid d-block rounded"
                            alt="user-profile"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="fs-16 mb-1">{ele.name}</h5>
                          <div>
                            {" "}
                            <span
                              className={"avatar-title bg-white fs-5 text-dark"}
                            >
                              <i
                                onClick={() => handelDeleteTeamMember(index)}
                                className="cursor-pointer ri-delete-bin-line"
                              ></i>
                            </span>
                          </div>
                        </div>

                        <p className="text-muted mb-2">{ele.designation}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default TeamTab1;
