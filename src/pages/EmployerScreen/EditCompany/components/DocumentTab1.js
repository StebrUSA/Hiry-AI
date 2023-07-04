import React, { useState } from 'react';
import { Form, Input, Label, Row, Card, Col, TabPane, } from 'reactstrap';
import Dropzone from "react-dropzone";
import { Link } from 'react-router-dom';

const DocumentTab1 = () => {
 const [selectedFiles, setselectedFiles] = useState([]);
  return (
    <div className='pb-5 mb-3'>
      <div className="mb-3">
                <Label htmlFor="firstnameInput" className="form-label">
                  Upload Your Document
                </Label>
                <Input
                  className="form-control"
                  id="project-thumbnail-img"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                />
              </div>

              <TabPane tabId={3}>
                <h5 className="card-title  mt-4 mb-4">
                  Choose Document Type and Upload
                </h5>

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
                    <div className="hstack gap-2 justify-content-end">
                      <button type="button" className="btn btn-primary">
                        Update
                      </button>
                      <button type="button" className="btn btn-soft-success">
                        Cancel
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>


    </div>
  )
}

export default DocumentTab1