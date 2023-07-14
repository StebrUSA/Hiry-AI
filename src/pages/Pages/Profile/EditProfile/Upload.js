import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Card, Form, Input, Label, Row } from "reactstrap";
import Dropzone from "react-dropzone";

const UploadDocuments = ({ updateProgress }) => {
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpdate = () => {
    // Call the updateProgress function passed from the parent component
    updateProgress();
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleRemoveFile = () => {
    setSelectedFile(null);
    // Clear the file input value
    const fileInput = document.getElementById("resume-upload-input");
    if (fileInput) {
      fileInput.value = "";
    }
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

  const handleDeleteFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setselectedFiles(updatedFiles);
  };

  return (
    <React.Fragment>
      <div className="mb-3">
        <h5 className="fs-18  mb-4">Resume Upload</h5>
        <div className="input-group">
          <Input
            className="form-control file-upload-input  me-3"
            id="resume-upload-input"
            type="file"
            accept=".doc, .docx, .pdf"
            onChange={handleFileChange}
          />
          <div className="input-group-append">
            {selectedFile && (
              <button
                className="btn btn-outline-danger mt-1 file-remove-button"
                onClick={handleRemoveFile}
              >
                Remove File
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="border mt-4"></div>

      <h5 className="fs-18 mt-4 mb-4">Upload Other Documents</h5>
      <div className="d-flex gap-2">
        <div>
          <Input
            type="radio"
            className="btn-check"
            id="passport"
            defaultChecked
            name="choose-document"
          />
          <Label className="btn btn-outline-info" for="passport">
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
          <Label className="btn btn-outline-info" for="aadhar-card">
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
          <Label className="btn btn-outline-info" for="pan-card">
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
          <Label className="btn btn-outline-info" for="pan-card">
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
          <Label className="btn btn-outline-info" for="pan-card">
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
          <Label className="btn btn-outline-info" for="pan-card">
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
            <div className="dz-message needsclick pt-4" {...getRootProps()}>
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
                    <Link to="#" className="text-muted font-weight-bold">
                      {f.name}
                    </Link>
                    <p className="mb-0">
                      <strong>{f.formattedSize}</strong>
                    </p>
                  </Col>
                  <Col className="col-auto">
                    <i
                      onClick={() => handleDeleteFile(i)}
                      className="ri-delete-bin-line ri-xl cursor-pointer text-danger me-2"
                    ></i>
                  </Col>
                </Row>
              </div>
            </Card>
          );
        })}
      </div>

      <Form>
        <Row className="g-2 mt-3">
          <Col lg={12}>
            <div className="text-end">
              <button
                type="button"
                onClick={handleUpdate}
                className="btn btn-success"
              >
                Update
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default UploadDocuments;
