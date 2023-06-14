import React from 'react'
import { Input, Label, Row, Card, CardBody, Col } from 'reactstrap';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const OverviewTab1 = () => {
    return (
        <Row className='pb-5 mb-3'>

            
            <Col lg={3}>
                <Card className='mt-4'> 
                    <CardBody>
                        <div className="d-flex align-items-center mb-4">
                            <div className="flex-grow-1">
                                <h5 className="card-title mb-0">Portfolio</h5>
                            </div>
                        </div>

                        <div className="mb-3 d-flex">
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
                                defaultValue="www.syntycesolution.com"
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
                                defaultValue="@george_syntyce"
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
                                defaultValue="George"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col>
             <Col lg={12}>
                <div className="mb-3">
                    <Label htmlFor="firstnameInput" className="form-label">
                        Company Name
                    </Label>
                    <Input
                        type="text"
                        className="form-control"
                        id="firstnameInput"
                        placeholder="Enter your firstname"
                        defaultValue="Syntyce solutions"
                    />
                </div>
            </Col>
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
                                Email Address
                            </Label>
                            <Input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="Enter your email"
                                defaultValue="george@syntycesolution.com"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="cityInput" className="form-label">
                                linkedin URL
                            </Label>
                            <Input
                                type="text"
                                className="form-control"
                                minLength="5"
                                maxLength="6"
                                id="linkedin_Url"
                                placeholder="Enter LinkedinURL"
                                defaultValue="linkedin.com/in/syntycesolution"
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="stateInput" className="form-label">
                                Employee Size
                            </Label>
                            <Input
                                type="text"
                                className="form-control"
                                id="employeeSize"
                                placeholder="employeeSize"
                                defaultValue="50"
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="countryInput" className="form-label">
                                Company Registration Number
                            </Label>
                            <Input
                                type="text"
                                className="form-control"
                                id="registrationNumber"
                                placeholder="registrationNumber"
                                defaultValue="LP003139(Limited Partnership)"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>


                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="LocationOfCompany" className="form-label">
                               Location
                            </Label>
                            <Input
                                type="text"
                                className="form-control"
                                id="LocationOfCompany"
                                placeholder="Enter Location"
                                defaultValue="Damascus"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="WebsiteUrl" className="form-label">
                                Website
                            </Label>
                            <Input
                                type="email"
                                className="form-control"
                                id="WebsiteUrl"
                                placeholder="Enter URL"
                                defaultValue="www.syntycesolution.com"
                            />
                        </div>
                    </Col>
                </Row>
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
        </Row>
    )
}

export default OverviewTab1