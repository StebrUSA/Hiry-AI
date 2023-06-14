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
              <Label htmlFor="firstnameInput" className="form-label">
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
              <Col xxl={3} xl={2} lg={2} md={2} sm={12} key={index}>
                {" "}
                <Card>
                  <CardBody>
                    <div className="d-flex align-items-center gap-2">
                      <div className="profile-user d-inline-block">
                        <img
                          src={avatar1}
                          className="rounded-circle avatar-sm img-thumbnail user-profile-image"
                          alt="user-profile"
                        />
                      </div>
                      <div className="w-100">
                        <div className="text-dark fs-5 fw-bold">{ele.name}</div>
                        <div className="d-flex  justify-content-between"><div >{ele.designation}</div>
                        <button style={{border:"none",backgroundColor:"white"}}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path fill="red" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button></div>
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