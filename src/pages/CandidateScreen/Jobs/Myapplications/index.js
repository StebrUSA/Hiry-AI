import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Nav,
  NavItem,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalBody,
  Label,
  Button,
  NavLink,
} from "reactstrap";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import DeleteModal from "../../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import { getApplicationList } from "../../../../slices/thunks";
import TableContainer from "../../../../Components/Common/TableContainer";
import { Link } from "react-router-dom";
import { AppId, Designation, Contact, Status, Type } from "./ApplicationCol";
import DropDownCustomComponent from "../../../../Components/Common2/DropDownCustom";
import MultiUser from "../../../../assets/images/users/multi-user.jpg";
import { JobTypesOptions } from "../../../../Components/Common2/Options";

const MyCompanies = () => {
  document.title =
    "My Applied Companies | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

  const statusoptions = [
    { label: "Status", value: "Status" },
    { label: "Approved", value: "Approved" },
    { label: "New", value: "New" },
    { label: "Pending", value: "Pending" },
    { label: "Rejected", value: "Rejected" },
  ];

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [application, setApplication] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const onClickDelete = (order) => {
    setDeleteModal(true);
  };

  const { appList } = useSelector((state) => ({
    appList: state.Jobs.appList,
  }));

  useEffect(() => {
    dispatch(getApplicationList());
  }, [dispatch]);

  const handleApplicationClick = useCallback((arg) => {
    const application = arg;

    setApplication({
      _id: application.id,
      company: application.company,
      Designation: application.Designation,
      date: application.date,
      contact: application.contact,
      type: application.type,
      status: application.status,
    });
  });
  const hadleApplicationClicks = () => {
    setApplication("");
  };

  const columns = useMemo(
    () => [
      {
        Header: "APPLICATION ID",
        accessor: "appid",
        filterable: true,
        Cell: (cellProps) => {
          return <AppId {...cellProps} />;
        },
      },
      {
        Header: "COMPANY NAME",
        accessor: "company",
        Cell: (appList) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img
                  src={appList.row.original.company[0]}
                  alt=""
                  className="avatar-xxs rounded-circle image_src object-cover"
                />
              </div>
              <div className="flex-grow-1 ms-2 ">
                {appList.row.original.company[1]}
              </div>
            </div>
          </>
        ),
      },
      {
        Header: "DESIGNATION",
        accessor: "designation",
        filterable: true,
        Cell: (cellProps) => {
          return <Designation {...cellProps} />;
        },
      },
      {
        Header: "APPLY DATE",
        accessor: "date",
        Cell: (appList) => <>{appList.row.original.date} </>,
      },
      {
        Header: "CONTACT",
        accessor: "contacts",
        filterable: true,
        Cell: (cellProps) => {
          return <Contact {...cellProps} />;
        },
      },
      {
        Header: "JOB TYPE",
        accessor: "type",
        filterable: true,
        Cell: (cellProps) => {
          return <Type {...cellProps} />;
        },
      },
      {
        Header: "STATUS",
        accessor: "status",
        filterable: true,
        Cell: (cellProps) => {
          return <Status {...cellProps} />;
        },
      },
      {
        Header: "ACTION",
        accessor: "action",
        disableFilters: true,
        Cell: (cellProps) => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="/apps-company-overview"
                className="text-primary d-inline-block"
              >
                <i className="ri-eye-fill fs-16" id="viewtooltip"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="viewtooltip">
                View
              </UncontrolledTooltip>

              <Link
                to="#"
                className="text-danger mt-0 text-center"
                onClick={() => {
                  const orderData = cellProps.row.original;
                  onClickDelete(orderData);
                }}
              >
                <i className="mdi mdi-delete" id="deletetooltip" />
                <UncontrolledTooltip placement="top" target="deletetooltip">
                  Delete
                </UncontrolledTooltip>
              </Link>
            </div>
          );
        },
      },
    ],
    [handleApplicationClick]
  );
  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onCloseClick={() => setDeleteModal(false)}
        />
        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />
        <Container fluid>
          <BreadCrumb title="My Job Applications" pageTitle="Applications" />
          <Row>
            <Col>
              <Card>
                <CardHeader className="border-0">
                  <div className="d-md-flex align-items-center">
                    <h5 className="card-title mb-3 mb-md-0 flex-grow-1">
                      Jobs Applied
                    </h5>
                  </div>
                </CardHeader>
                <CardBody className="border border-dashed border-end-0 border-start-0">
                  <Form>
                    <Row className="g-3">
                      <Col xxl={5} sm={6}>
                        <div className="search-box">
                          <Input
                            type="text"
                            className="form-control search"
                            placeholder="Search for application ID, company, designation status"
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </Col>
                      <Col xxl={3} sm={6}>
                        <div className="input-group">
                          <Flatpickr
                            className="form-control"
                            id="datepicker-publish-input"
                            placeholder="Select a date"
                            options={{
                              altInput: true,
                              altFormat: "F j, Y",
                              mode: "single",
                              dateFormat: "d.m.y",
                            }}
                          />
                          <div className="input-group-text bg-primary border-primary text-white">
                            <i className="ri-calendar-2-line"></i>
                          </div>
                        </div>
                      </Col>
                      <Col xxl={2} sm={4}>
                        <div>
                          <DropDownCustomComponent
                            LabelName="Select job status"
                            options={statusoptions}
                            width="w-100"
                            tagName="button"
                            dropDownButtonClass="mdi mdi-chevron-down"
                            className="btn btn-light form-control d-flex justify-content-between text-muted border bg-white"
                          />
                        </div>
                      </Col>
                      <Col xxl={2} sm={4}>
                        <div>
                          <DropDownCustomComponent
                            LabelName="Select job type"
                            options={JobTypesOptions}
                            width="w-100"
                            tagName="button"
                            dropDownButtonClass="mdi mdi-chevron-down"
                            className="btn btn-light form-control d-flex justify-content-between text-muted border bg-white"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardBody className="pt-4">
                  <div>
                    <TableContainer
                      columns={columns}
                      data={appList || []}
                      hadleApplicationClick={hadleApplicationClicks}
                      customPageSize={8}
                      divClass="table-responsive table-card mb-1"
                      tableClass="align-middle table-nowrap"
                      theadClass="table-light text-muted"
                    />
                  </div>
                  <div
                    className="modal fade"
                    id="showModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <Modal
                        isOpen={show}
                        toggle={handleClose}
                        centered={true}
                        className="modal-content"
                      >
                        <Form
                          action="#"
                          autoComplete="off"
                          className="tablelist-form"
                        >
                          <ModalBody className="modal-body">
                            <Input type="hidden" id="id-field" />

                            <div className="mb-3 d-none" id="modal-id">
                              <Label
                                htmlFor="applicationId"
                                className="form-label"
                              >
                                ID
                              </Label>
                              <Input
                                type="text"
                                id="applicationId"
                                className="form-control"
                                placeholder="ID"
                                readOnly
                              />
                            </div>

                            <div className="text-center">
                              <div className="position-relative d-inline-block">
                                <div className="position-absolute  bottom-0 end-0">
                                  <Label
                                    htmlFor="companylogo-image-input"
                                    className="mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    title="Select Image"
                                  >
                                    <div className="avatar-xs cursor-pointer">
                                      <div className="avatar-title bg-light border rounded-circle text-muted">
                                        <i className="ri-image-fill"></i>
                                      </div>
                                    </div>
                                  </Label>
                                  <Input
                                    className="form-control d-none"
                                    id="companylogo-image-input"
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                  />
                                </div>
                                <div className="avatar-lg p-1">
                                  <div className="avatar-title bg-light rounded-circle">
                                    <img
                                      src={MultiUser}
                                      id="companylogo-img"
                                      className="avatar-md h-auto rounded-circle object-cover"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mb-3">
                              <Label
                                htmlFor="company-field"
                                className="form-label"
                              >
                                Company
                              </Label>
                              <Input
                                type="text"
                                id="company-field"
                                className="form-control"
                                placeholder="Enter company name"
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <Label
                                htmlFor="designation-field"
                                className="form-label"
                              >
                                Designation
                              </Label>
                              <Input
                                type="text"
                                id="designation-field"
                                className="form-control"
                                placeholder="Enter designation"
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <Label
                                htmlFor="date-field"
                                className="form-label"
                              >
                                Apply Date
                              </Label>
                              <Input
                                type="date"
                                id="date-field"
                                className="form-control"
                                data-provider="flatpickr"
                                data-date-format="d M, Y"
                                required
                                placeholder="Select date"
                              />
                            </div>

                            <div className="mb-3">
                              <Label
                                htmlFor="contact-field"
                                className="form-label"
                              >
                                Contacts
                              </Label>
                              <Input
                                type="text"
                                id="contact-field"
                                className="form-control"
                                placeholder="Enter contact"
                                required
                              />
                            </div>

                            <div className="gy-4 mb-3">
                              <div className="col-md-6">
                                <div>
                                  <Label
                                    htmlFor="status-input"
                                    className="form-label"
                                  >
                                    Status
                                  </Label>
                                  <Select
                                    className="form-control"
                                    data-trigger
                                    name="status-input"
                                    id="status-input"
                                  >
                                    <option value="">Status</option>
                                    <option value="Approved">Approved</option>
                                    <option value="New">New</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Rejected">Rejected</option>
                                  </Select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div>
                                  <Label
                                    htmlFor="type-input"
                                    className="form-label"
                                  >
                                    Type
                                  </Label>
                                  <Select
                                    className="form-control"
                                    data-trigger
                                    name="type-input"
                                    id="type-input"
                                  >
                                    <option value="">Select Type</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                  </Select>
                                </div>
                              </div>
                            </div>
                          </ModalBody>
                          <div className="modal-footer">
                            <div className="hstack gap-2 justify-content-end">
                              <Button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </Button>
                              <Button
                                color="success"
                                type="submit"
                                id="add-btn"
                              >
                                Add
                              </Button>
                              <Button
                                color="success"
                                type="button"
                                id="edit-btn"
                              >
                                Update
                              </Button>
                            </div>
                          </div>
                        </Form>
                      </Modal>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MyCompanies;
