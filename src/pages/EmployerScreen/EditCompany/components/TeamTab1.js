import React, { useState, useCallback } from "react";
import {
  Input,
  Label,
  Row,
  Card,
  CardBody,
  Col,
  Button,
  Modal,
  ModalHeader,
  Form,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
//import images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import NoData from "./noData";
const TeamTab1 = () => {
  const [teamMemberAdded, setTeamMemberAdded] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState();
  const [edited, setEdited] = useState("");

  const [searchMember, setSearchMember] = useState("");

  const handleSearchMember = (event) => {
    const query = event.target.value;
    setSearchMember(query);
    //chats is a array of object
    const searchList = teamMemberAdded.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setTeamMemberAdded(searchList);
  };
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

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    initialValues: {
      // img: (teamMemberAdded && TeamMemberAdded.img) || '',
      name: (edited && edited.name) || "",
      email: (edited && edited.email) || "",
      designation: (edited && edited.designation) || "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please enter your Name")
        .matches(/^[a-zA-Z][a-zA-Z\s]*$/),
      email: Yup.string().email().required("Please enter Email Address"),
      designation: Yup.string()
        .required("Please enter Designation")
        .matches(/^[a-zA-Z][a-zA-Z\s]*$/),
    }),

    onSubmit: (values) => {
      if (isEdit) {
        // update Team Member
        const edited = teamMemberAdded.filter((ele, index) => {
          return editItem === index;
        });
        edited.image = values.image;
        edited.name = values.name;
        edited.email = values.email;
        edited.designation = values.designation;
        teamMemberAdded.splice(editItem, 1, edited);

        validation.resetForm();
      } else {
        // save new Member

        setTeamMemberAdded([
          ...teamMemberAdded,
          {
            image: values["image"],
            name: values["name"],
            email: values["email"],
            designation: values["designation"],
          },
        ]);
        validation.resetForm();
      }
      toggle();
    },
  });

  const handleEditMember = useCallback(
    (ele, index) => {
      setEditItem(index);
      setIsEdit(true);
      setModal(true);
      const member = ele;
      setEdited({
        // img: company.img,
        name: member.name,
        email: member.email,
        designation: member.designation,
      });
      toggle();
    },
    [toggle]
  );
  return (
    <>
      <Row className="g-4 mb-4">
        <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
          <div>
            <Link
              to="#"
              className="btn btn-success w-100"
              onClick={() => {
                setEdited("");
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
              value={searchMember}
              onChange={handleSearchMember}
              autoComplete="off"
              placeholder="Search for Member..."
            />
            <i className="ri-search-line search-icon"></i>
          </div>
        </Col>
      </Row>
      {teamMemberAdded.length === 0 && (
        <div
          style={{ height: "55vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <NoData
            image={avatar1}
            classForImage="rounded-circle avatar-xl img-thumbnail user-profile-image mb-2"
            message="No Members Found. Add Members from top to manage them here."
          />
        </div>
      )}
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
                      <div className="flex-grow-1 ms-3 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="fs-16 text-muted text-capitalize">
                              {ele.name}
                            </div>
                            <div className="mx-1 fs-16 text-muted">|</div>
                            <div className="fs-16 text-muted text-capitalize">
                              {ele.designation}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-14">{ele.email}</p>
                          <div className="d-flex mb-3">
                            {" "}
                            <span className="fs-5">
                              <i
                                className="cursor-pointer ri-pencil-fill me-2"
                                onClick={() => handleEditMember(ele, index)}
                              ></i>
                            </span>
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
          {!!isEdit ? "Edit Member" : "Add Member"}
        </ModalHeader>
        <Form
          className="tablelist-form"
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
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
                name="name"
                type="text"
                className="form-control"
                id="firstnameInput"
                placeholder="Enter your Name"
                validate={{
                  required: { value: true },
                }}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.name || ""}
                invalid={
                  validation.touched.name && validation.errors.name
                    ? true
                    : false
                }
              />
              {validation.touched.name && validation.errors.name ? (
                <FormFeedback type="invalid">
                  {validation.errors.name}
                </FormFeedback>
              ) : null}
              <Label htmlFor="EmailInput" className="form-label mt-3">
                Email
              </Label>
              <Input
                name="email"
                type="text"
                className="form-control mb-2"
                id="EmailInput"
                placeholder="Enter your Email"
                validate={{
                  required: { value: true },
                }}
                onKeyUp={(e) => {
                  if (new RegExp(/[a-zA-Z]/).test(e.key)) {
                  } else e.preventDefault();
                }}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.email || ""}
                invalid={
                  validation.touched.email && validation.errors.email
                    ? true
                    : false
                }
              />

              {validation.touched.email && validation.errors.email ? (
                <FormFeedback type="invalid">
                  {validation.errors.email}
                </FormFeedback>
              ) : null}
              <Label htmlFor="DesignationInput" className="form-label mt-2">
                Designation
              </Label>
              <Input
                type="text"
                name="designation"
                className="form-control mb-3"
                id="DesignationInput"
                placeholder="Enter your Designation"
                validate={{
                  required: { value: true },
                }}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.designation || ""}
                invalid={
                  validation.touched.designation &&
                  validation.errors.designation
                    ? true
                    : false
                }
              />
              {validation.touched.designation &&
              validation.errors.designation ? (
                <FormFeedback type="invalid">
                  {validation.errors.designation}
                </FormFeedback>
              ) : null}
              <Row className="text-end">
                <Col>
                  <Button className="mt-3" color="danger" type="submit">
                    <span>{!!isEdit ? "Update Member" : "Add Member"}</span>
                  </Button>
                  <Button
                    className="mt-3 ms-3"
                    color="soft-success"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default TeamTab1;
