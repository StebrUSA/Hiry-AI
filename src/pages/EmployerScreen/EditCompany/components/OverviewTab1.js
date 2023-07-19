import React from 'react'
import { Input, Label, Row, Card, CardBody, Col, CardHeader } from 'reactstrap';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Slack from "../../../../assets/images/brands/slack.png";
import Location from '../../CreateJob/location';
import { OrganizationTypes } from '../../../../Components/Common2/Options';
import DropDownCustomComponent from '../../../../Components/Common2/DropDownCustom';

const OverviewTab1 = () => {
    return (
        <>
            <>
                <div className='pb-5 mb-3'>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <div>
                                        <h4 className=''>Company Logo</h4>
                                        <Col lg={12} >
                                            <div className='mt-3'>
                                                <div className="position-relative d-inline-block">
                                                    <div className="position-absolute bottom-0 end-0">
                                                        <Label htmlFor="company-logo-input" className="mb-0">
                                                            <div className="avatar-xs cursor-pointer">
                                                                <div className="avatar-title bg-light border rounded-circle text-muted">
                                                                    <i className="ri-image-fill"></i>
                                                                </div>
                                                            </div>
                                                        </Label>
                                                        <Input name="img" className="form-control d-none" id="company-logo-input" type="file"
                                                            accept="image/png, image/gif, image/jpeg"
                                                        />
                                                    </div>
                                                    <div className="p-1">
                                                        <div className="avatar-title bg-light rounded-circle">
                                                            <img src={Slack} alt="Slack" id="companylogo-img" className="avatar-md rounded-circle object-cover p-2" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className='mt-3'>
                                        <h4 className=''>Company Info</h4>
                                        <Row className='mt-3'>
                                            <Col lg={5} className=''>
                                                <div className="mb-3">
                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                        Company Name
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstnameInput"
                                                        placeholder="Enter company name"
                                                        defaultValue="Syntyce solutions"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={2}>
                                                <div className="mb-3">
                                                    <Label htmlFor="stateInput" className="form-label">
                                                        Organization Size
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        id="organization_size"
                                                        placeholder="Organization size"
                                                        defaultValue="50"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={5}>
                                                <div className="mb-3">
                                                    <Label htmlFor="stateInput" className="form-label">
                                                        Organization Type
                                                    </Label>
                                                    
                                                    <DropDownCustomComponent
                                                        LabelName="Select..."
                                                        options={OrganizationTypes}
                                                        width="w-100"
                                                        tagName="button"
                                                        dropDownButtonClass="mdi mdi-chevron-down"
                                                        className="btn btn-light form-control d-flex justify-content-between text-muted border bg-white"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Label htmlFor="phonenumberInput" className="form-label">
                                                        Contact Number
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        id="phonenumberInput"
                                                        placeholder="Enter your phone number"
                                                        defaultValue="+(1) 987 6543"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Label htmlFor="emailInput" className="form-label">
                                                        Established Year
                                                    </Label>
                                                    <Input
                                                        type="number"
                                                        className="form-control"
                                                        id="established_yaer"
                                                        placeholder=""
                                                        defaultValue="1995"
                                                    />
                                                </div>
                                            </Col>
                                            
                                        </Row>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label className="form-label">Tagline {" "}
                                                </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="Tagline"
                                                    placeholder="Enter Tagline"
                                                    defaultValue="ex: An information service firm helping small buisness succeed"
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label className="form-label">Description {" "}
                                                </Label>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data="<p>Description</p>"
                                                    onReady={(editor) => {
                                                        // You can store the "editor" and use when it is needed.
                                                    }}
                                                // onChange={(editor) => {
                                                //     editor.getData();
                                                // }}
                                                />
                                            </div>
                                        </Col>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <h5 className="card-title mb-0">Location</h5>
                                </CardHeader>
                                <CardBody>

                                    <Row>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Location Joblocation="Company location" />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Col lg={12}>
                                <div className="hstack gap-2 justify-content-end">
                                    <button type="button" className="btn btn-primary">
                                        Update
                                    </button>
                                    <button type="button" className="btn btn-soft-success">
                                        Cancel
                                    </button>
                                </div>
                            </Col>
                        </Col>
                        <Col className='' lg={3}>
                            <Card className=''>
                                <CardBody>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Portfolio</h5>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex align-items-center">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                                <i className="ri-linkedin-line"></i>
                                            </span>
                                        </div>
                                        <Input
                                            type="email"
                                            className="form-control"
                                            id="gitUsername"
                                            placeholder="Username"
                                            defaultValue="linkedin.com/in/syntycesolution"
                                        />
                                    </div>
                                    <div className="mb-3 d-flex align-items-center">
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
                                            defaultValue="www.syntycesolution.com"
                                        />
                                    </div>
                                    <div className="mb-3 d-flex align-items-center">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-success">
                                                <i className="ri-facebook-fill"></i>
                                            </span>
                                        </div>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="dribbleName"
                                            placeholder="Username"
                                            defaultValue="@george_syntyce"
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-danger">
                                                <i className="ri-instagram-line"></i>
                                            </span>
                                        </div>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="pinterestName"
                                            placeholder="Username"
                                            defaultValue="George_"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        </>
    )
}

export default OverviewTab1