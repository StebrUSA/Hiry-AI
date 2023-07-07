import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import Dropzone from "react-dropzone";

//import images
import progileBg from "../../../../assets/images/profile-bg.jpg";
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import PersonalDetails from "./PersonalDetails";
import JobSearchPreferences from "./JobSearchPreferences";
import SkillsandExperience from "./SkillsandExperience";
import SecurityandPrivacy from "./SecurityandPrivacy";

const Settings = () => {
  const [selectedFiles, setselectedFiles] = useState([]);
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  };

  /**
   * Formats the size
   */
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  document.title =
    "Profile Settings | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="position-relative mx-n4 mt-n4">
            <div className="profile-wid-bg profile-setting-img">
              <img src={progileBg} className="profile-wid-img" alt="" />
              <div className="overlay-content">
                <div className="text-end p-3">
                  <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                    <Input
                      id="profile-foreground-img-file-input"
                      type="file"
                      className="profile-foreground-img-file-input"
                    />
                    <Label
                      htmlFor="profile-foreground-img-file-input"
                      className="profile-photo-edit btn btn-light"
                    >
                      <i className="ri-image-edit-line align-bottom me-1"></i>{" "}
                      Change Cover
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Row>
            <Col xxl={3}>
              <Card className="mt-n5">
                <CardBody className="p-4">
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
                    <h5 className="fs-16 mb-1">Anna Adame</h5>
                    <p className="text-muted mb-0">Lead Designer / Developer</p>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <div className="d-flex align-items-center mb-5">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-0">Complete Your Profile</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        to="#"
                        className="badge bg-light text-primary fs-12"
                      >
                        <i className="ri-edit-box-line align-bottom me-1"></i>{" "}
                        Edit
                      </Link>
                    </div>
                  </div>
                  <div className="progress animated-progress custom-progress progress-label">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="label">30%</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-0">Portfolio</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        to="#"
                        className="badge bg-light text-primary fs-12"
                      >
                        <i className="ri-add-fill align-bottom me-1"></i> Add
                      </Link>
                    </div>
                  </div>
                  <div className="mb-3 d-flex">
                    <div className="avatar-xs d-block flex-shrink-0 me-3">
                      <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                        <i className="ri-github-fill"></i>
                      </span>
                    </div>
                    <Input
                      type="email"
                      className="form-control"
                      id="gitUsername"
                      placeholder="Username"
                      defaultValue="@daveadame"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <div className="avatar-xs d-block flex-shrink-0 me-3">
                      <span className="avatar-title rounded-circle fs-16 bg-primary">
                        <i className="ri-global-fill"></i>
                      </span>
                    </div>
                    <Input
                      type="text"
                      className="form-control"
                      id="websiteInput"
                      placeholder="www.example.com"
                      defaultValue="www.Hiry.ai"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <div className="avatar-xs d-block flex-shrink-0 me-3">
                      <span className="avatar-title rounded-circle fs-16 bg-success">
                        <i className="ri-dribbble-fill"></i>
                      </span>
                    </div>
                    <Input
                      type="text"
                      className="form-control"
                      id="dribbleName"
                      placeholder="Username"
                      defaultValue="@dave_adame"
                    />
                  </div>
                  <div className="d-flex">
                    <div className="avatar-xs d-block flex-shrink-0 me-3">
                      <span className="avatar-title rounded-circle fs-16 bg-danger">
                        <i className="ri-pinterest-fill"></i>
                      </span>
                    </div>
                    <Input
                      type="text"
                      className="form-control"
                      id="pinterestName"
                      placeholder="Username"
                      defaultValue="Advance Dave"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xxl={9}>
              <Card className="mt-xxl-n5">
                <CardHeader>
                  <Nav
                    className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                          tabChange("1");
                        }}
                      >
                        <i className="fas fa-home me-1"></i> Personal Details
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                          tabChange("2");
                        }}
                        type="button"
                      >
                        <i className="far fa-user me-1"></i>
                        Job Search Preferences
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        className={classnames({ active: activeTab === "3" })}
                        onClick={() => {
                          tabChange("3");
                        }}
                        type="button"
                      >
                        <i className="far fa-envelope me-1"></i>
                        Skills And Experience
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        className={classnames({ active: activeTab === "4" })}
                        onClick={() => {
                          tabChange("4");
                        }}
                        type="button"
                      >
                        <i className="far fa-envelope me-1"></i>
                        Security and Privacy
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        className={classnames({ active: activeTab === "5" })}
                        onClick={() => {
                          tabChange("5");
                        }}
                        type="button"
                      >
                        <i className="far fa-envelope me-1"></i>
                        Upload Files
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody className="p-4">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <PersonalDetails />
                    </TabPane>
                    <TabPane tabId="2">
                      <JobSearchPreferences />
                    </TabPane>

                    <TabPane tabId="3">
                      <SkillsandExperience />
                    </TabPane>

                    <TabPane tabId="4">
                      <SecurityandPrivacy />
                    </TabPane>
                    <TabPane tabId="5">
                      <div className="mb-3">
                        <div className="fs-20 fw-bold mt-3 mb-4">
                          Resume Upload
                        </div>
                        <Input
                          className="form-control"
                          id="project-thumbnail-img"
                          type="file"
                          accept="image/png, image/gif, image/jpeg"
                        />
                      </div>
                      <TabPane tabId={3}>
                        <div className="border mt-4"></div>
                        <div className="fs-20 fw-bold mt-4 mb-4">
                          Upload Other Documents
                        </div>

                        <div className="d-flex gap-2">
                          <div>
                            <Input
                              type="radio"
                              className="btn-check"
                              id="passport"
                              defaultChecked
                              name="choose-document"
                            />
                            <Label
                              className="btn btn-outline-info"
                              for="passport"
                            >
                              Work Permit
                            </Label>
                          </div>
                          <div>
                            <Input
                              type="radio"
                              className="btn-check"
                              id="aadhar-card"
                              name="choose-document"
                            />
                            <Label
                              className="btn btn-outline-info"
                              for="aadhar-card"
                            >
                              Driver's Licence or State ID
                            </Label>
                          </div>
                          <div>
                            <Input
                              type="radio"
                              className="btn-check"
                              id="pan-card"
                              name="choose-document"
                            />
                            <Label
                              className="btn btn-outline-info"
                              for="pan-card"
                            >
                              Passport/Green Card Proof
                            </Label>
                          </div>
                          <div>
                            <Input
                              type="radio"
                              className="btn-check"
                              id="other"
                              name="choose-document"
                            />
                            <Label className="btn btn-outline-info" for="other">
                              Pay Statements
                            </Label>
                          </div>
                          <div>
                            <Input
                              type="radio"
                              className="btn-check"
                              id="other"
                              name="choose-document"
                            />
                            <Label className="btn btn-outline-info" for="other">
                              Educational Documents
                            </Label>
                          </div>
                          <div>
                            <Input
                              type="radio"
                              className="btn-check"
                              id="pan-card"
                              name="choose-document"
                            />
                            <Label
                              className="btn btn-outline-info"
                              for="pan-card"
                            >
                              Experience Letters
                            </Label>
                          </div>
                          <div>
                            <Input
                              type="radio"
                              className="btn-check"
                              id="pan-card"
                              name="choose-document"
                            />
                            <Label
                              className="btn btn-outline-info"
                              for="pan-card"
                            >
                              W2/Yearly Tax
                            </Label>
                          </div>
                          <div>
                            <Input
                              type="radio"
                              className="btn-check"
                              id="pan-card"
                              name="choose-document"
                            />
                            <Label
                              className="btn btn-outline-info"
                              for="pan-card"
                            >
                              Any Other
                            </Label>
                          </div>
                        </div>

                        <Dropzone
                          onDrop={(acceptedFiles) => {
                            handleAcceptedFiles(acceptedFiles);
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="dropzone dz-clickable">
                              <div
                                className="dz-message needsclick pt-4"
                                {...getRootProps()}
                              >
                                <div className="mb-3">
                                  <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                </div>
                                <h4>Drop files here or click to upload.</h4>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <div className="list-unstyled mb-0" id="file-previews">
                          {selectedFiles.map((f, i) => {
                            return (
                              <Card
                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                key={i + "-file"}
                              >
                                <div className="p-2">
                                  <Row className="align-items-center">
                                    <Col className="col-auto">
                                      <img
                                        data-dz-thumbnail=""
                                        height="80"
                                        className="avatar-sm rounded bg-light"
                                        alt={f.name}
                                        src={f.preview}
                                      />
                                    </Col>
                                    <Col>
                                      <Link
                                        to="#"
                                        className="text-muted font-weight-bold"
                                      >
                                        {f.name}
                                      </Link>
                                      <p className="mb-0">
                                        <strong>{f.formattedSize}</strong>
                                      </p>
                                    </Col>
                                  </Row>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </TabPane>

                      <Form>
                        <Row className="g-2 mt-3">
                          <Col lg={12}>
                            <div className="text-end">
                              <button type="button" className="btn btn-success">
                                Update
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Settings;
