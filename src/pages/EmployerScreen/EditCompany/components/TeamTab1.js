import React, { useState,useCallback} from "react";
import { Input, Label, Row, Card, CardBody, Col, Button,Modal, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
//import images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import NoData from "./noData";
const TeamTab1 = () => {
  const [teamMemberAdded, setTeamMemberAdded] = useState([]);
  const [nameOfTeamMember, setNameOfTeamMember] = useState("");
  const [designationOfTeamMember, setDesignationOfTeamMember] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);


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
     <Row className="g-4 mb-4">
        <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
          <div>
            <Link
              to="#"
              className="btn btn-success w-100"
              onClick={() => {
                setIsEdit(false);
                toggle();
              }}
            >
              <i className="ri-add-line align-bottom me-1"></i> Add Member
            </Link>
          </div>
        </Col>
        <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
          <div className="search-box ms-md-2 mb-3 mb-md-0">
            <Input
              type="text"
              id="searchMember"
              autoComplete="off"
              placeholder="Search for Member..."
            />
            <i className="ri-search-line search-icon"></i>
          </div>
        </Col>
      </Row>
      <Row >
        
      </Row>
      {teamMemberAdded.length===0 && 
     <div style={{height:"55vh"}} className="d-flex justify-content-center align-items-center">
        <NoData image={avatar1} classForImage="rounded-circle avatar-xl img-thumbnail user-profile-image mb-2" message="No Members Found. Add Members from top to manage them here."/>
     </div>
      
      }
      {teamMemberAdded.length > 0 && <h4>Members</h4>}
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



      <Modal id="showModal" isOpen={modal} toggle={toggle} centered size="md">
      <ModalHeader className="bg-soft-info p-3" toggle={toggle}>
          Add Member
                    </ModalHeader>
        <Row style={{ width: "95%", margin: "auto" }} className="py-3">
          <Col xxl={12}>
          
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
              <Label htmlFor="DesignationInput" className="form-label mt-3">
                Designation
              </Label>
              <Input
                onChange={handleDesignationChange}
                type="text"
                value={designationOfTeamMember}
                className="form-control mb-3"
                id="DesignationInput"
                placeholder="Enter your Designation"
                defaultValue="Engineer"
              />

             <Row className="text-end">
              <Col> <Button
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
                    setModal(false)
                  }
                }}
              >
                <i className="ri-add-fill me-1 align-bottom"></i> Add
              </Button>
              <Button className="mt-3 ms-3" color="soft-success" onClick={()=>setModal(false)}>
                Cancel
              </Button></Col>
             </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default TeamTab1;