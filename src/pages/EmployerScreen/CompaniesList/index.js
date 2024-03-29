import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

// Import Images
import multiUser from '../../../assets/images/users/multi-user.jpg';

import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  ModalBody,
  Label,
  Input,
  Modal,
  ModalHeader,
  Form,
  ModalFooter,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormFeedback
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DeleteModal from "../../../Components/Common/DeleteModal";
import { isEmpty } from "lodash";

//Import actions
import {
  getCompanies as onGetCompanies,
  addNewCompanies as onAddNewCompanies,
  updateCompanies as onUpdateCompanies,
  deleteCompanies as onDeleteCompanies,
} from "../../../slices/thunks";
//redux
import { useSelector, useDispatch } from "react-redux";
import TableContainer from "../../../Components/Common/TableContainer";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

// Export Modal
import ExportCSVModal from "../../../Components/Common/ExportCSVModal";

import Loader from "../../../Components/Common/Loader";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import DropDownCustomComponent from "../../../Components/Common2/DropDownCustom";
import Location from "../CreateJob/location";

const TimeSpanOptions = [
  { id: 2, label: "All", value: "all" },
  { id: 3, label: "Last Week", value: "lastweek" },
  { id: 4, label: "Last Month", value: "lastmonth" },
  {
    id: 5,
    label: "Last Year",
    value: "lastyear",
  },
];

const VendorsListComponent = () => {
  const dispatch = useDispatch();
  const { companies, isCompaniesSuccess, error } = useSelector((state) => ({
    companies: state.Crm.companies,
    isCompaniesSuccess: state.Crm.isCompaniesSuccess,
    error: state.Crm.error,
  }));

  useEffect(() => {
    if (companies && !companies.length) {
      dispatch(onGetCompanies());
    }
  }, [dispatch, companies]);

  useEffect(() => {
    setCompany(companies);
  }, [companies]);

  useEffect(() => {
    if (!isEmpty(companies)) {
      setCompany(companies);
      setIsEdit(false);
    }
  }, [companies]);


  const [isEdit, setIsEdit] = useState(false);
  const [company, setCompany] = useState([]);

  //delete Company
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);
  const [modal, setModal] = useState(false);

  const industrytype = [
    { id: 2, label: "Computer Industry", value: "Computer Industry" },
    { id: 3, label: "Chemical Industries", value: "Chemical Industries" },
    { id: 4, label: "Health Services", value: "Health Services" },
    {
      id: 5,
      label: "Telecommunications Services",
      value: "Telecommunications Services",
    },
    {
      id: 6,
      label: "Textiles: Clothing, Footwear",
      value: "Textiles: Clothing, Footwear",
    },

  ];

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      setCompany(null);
    } else {
      setModal(true);
    }
  }, [modal]);

  // Delete Data
  const handleDeleteCompany = () => {
    if (company) {
      dispatch(onDeleteCompanies(company._id));
      setDeleteModal(false);
    }
  };

  const onClickDelete = (company) => {
    setCompany(company);
    setDeleteModal(true);
  };

  // Add Data
  const handleCompanyClicks = () => {
    setCompany("");
    setIsEdit(false);
    toggle();
  };

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    initialValues: {
      // img: (company && company.img) || '',
      name: (company && company.name) || '',
      owner: (company && company.owner) || '',
      industry_type: (company && company.industry_type) || '',
      star_value: (company && company.star_value) || '',
      location: (company && company.location) || '',
      phone_number: (company && company.phone_number) || '',
      employee_size: (company && company.employee) || '',
      website: (company && company.website) || '',
      contact_email: (company && company.contact_email) || '',
      since: (company && company.since) || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter company name"),
      owner: Yup.string().required("Please enter owner name"),
      industry_type: Yup.string().required("Please enter industry type"),
      star_value: Yup.string().required("Please enter rating"),
      location: Yup.string().required("Please enter location"),
      phone_number: Yup.string().required("Please enter phone number"),
      employee_size: Yup.string().required("Please enter employee size"),
      website: Yup.string().required("Please enter website"),
      contact_email: Yup.string().email("Invalid email").required("Please enter contact email"),
      since: Yup.string().required("Please enter since"),
    }),
    onSubmit: (values) => {
      console.log(values,"values")
      if (isEdit) {
        const updateCompany = {
          _id: company ? company._id : 0,
          // img: values.img,
          name: values.name,
          owner: values.owner,
          industry_type: values.industry_type,
          star_value: values.star_value,
          location: values.location,
          phone_number: values.phone_number,
          employee_size: values.employee_size,
          website: values.website,
          contact_email: values.contact_email,
          since: values.since,
        };
        // update Company
        dispatch(onUpdateCompanies(updateCompany));
        validation.resetForm();
      } else {
        const newCompany = {
          _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
          // img: values["img"],
          name: values["name"],
          owner: values["owner"],
          industry_type: values["industry_type"],
          star_value: values["star_value"],
          location: values["location"],
          phone_number: values["phone_number"],
          employee_size: values["employee"],
          website: values["website"],
          contact_email: values["contact_email"],
          since: values["since"]
        };
        // save new Company
        dispatch(onAddNewCompanies(newCompany));
        validation.resetForm();
      }
      toggle();
    },
  });

  // Update Data
  const handleCompanyClick = useCallback((arg) => {
    const company = arg;

    setCompany({
      _id: company._id,
      // img: company.img,
      name: company.name,
      owner: company.owner,
      industry_type: company.industry_type,
      star_value: company.star_value,
      location: company.location,
      phone_number: company.Phone_Number,
      employee_size: company.employee,
      website: company.website,
      contact_email: company.contact_email,
      since: company.since
    });

    setIsEdit(true);
    toggle();
  }, [toggle]);

  // Node API 
  // useEffect(() => {
  //   if (isCompaniesCreated) {
  //     setCompany(null);
  //     dispatch(onGetCompanies());
  //   }
  // }, [
  //   dispatch,
  //   isCompaniesCreated,
  // ]);

  // Checked All
  const checkedAll = useCallback(() => {
    const checkall = document.getElementById("checkBoxAll");
    const ele = document.querySelectorAll(".companyCheckBox");

    if (checkall.checked) {
      ele.forEach((ele) => {
        ele.checked = true;
      });
    } else {
      ele.forEach((ele) => {
        ele.checked = false;
      });
    }
    deleteCheckbox();
  }, []);

  // Delete Multiple
  const [selectedCheckBoxDelete, setSelectedCheckBoxDelete] = useState([]);
  const [isMultiDeleteButton, setIsMultiDeleteButton] = useState(false);

  const deleteMultiple = () => {
    const checkall = document.getElementById("checkBoxAll");
    selectedCheckBoxDelete.forEach((element) => {
      dispatch(onDeleteCompanies(element.value));
      setTimeout(() => { toast.clearWaitingQueue(); }, 3000);
    });
    setIsMultiDeleteButton(false);
    checkall.checked = false;
  };

  const deleteCheckbox = () => {
    const ele = document.querySelectorAll(".companyCheckBox:checked");
    ele.length > 0 ? setIsMultiDeleteButton(true) : setIsMultiDeleteButton(false);
    setSelectedCheckBoxDelete(ele);
  };


  // Column
  const columns = useMemo(
    () => [
      {
        Header: <input type="checkbox" id="checkBoxAll" className="form-check-input" onClick={() => checkedAll()} />,
        Cell: (cellProps) => {
          return <input type="checkbox" className="companyCheckBox form-check-input" value={cellProps.row.original._id} onChange={() => deleteCheckbox()} />;
        },
        id: '#',
      },
      {
        Header: "Company Name",
        Cell: (company) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                {company.row.original.image_src ? <img
                  src={process.env.REACT_APP_API_URL + "/images/" + company.row.original.image_src}
                  alt=""
                  className="avatar-xxs rounded-circle"
                /> :
                  <div className="flex-shrink-0 avatar-xs me-2">
                    <div className="avatar-title bg-soft-success text-success rounded-circle fs-13">
                      {company.row.original.name.charAt(0)}
                    </div>
                  </div>
                }
              </div>
              <div className="flex-grow-1 ms-2 name">
                {company.row.original.name}
              </div>
            </div>
          </>
        ),
      },
      {
        Header: "Owner",
        accessor: "owner",
        filterable: false,
      },
      {
        Header: "Industry Type",
        accessor: "industry_type",
        filterable: false,
      },
      {
        Header: "Phone No",
        accessor: "phone",
        Cell: () => (
          <>
            <span className="me-1">540-575-0991</span>
          </>
        ),
        filterable: false,
      },

      {
        Header: "Location",
        accessor: "location",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <ul className="list-inline hstack gap-2 mb-0">
              <li className="list-inline-item" title="View">
                <Link to="#"
                  onClick={() => { const companyData = cellProps.row.original; setInfo(companyData); }}
                >
                  <i className="ri-eye-fill align-bottom text-muted"></i>
                </Link>
              </li>
              <li className="list-inline-item" title="Edit">
                <Link className="edit-item-btn" to="#"
                  onClick={() => { const companyData = cellProps.row.original; handleCompanyClick(companyData); }}
                >
                  <i className="ri-pencil-fill align-bottom text-muted"></i>
                </Link>
              </li>
              <li className="list-inline-item" title="Delete">
                <Link
                  className="remove-item-btn"
                  onClick={() => { const companyData = cellProps.row.original; onClickDelete(companyData); }}
                  to="#"
                >
                  <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                </Link>
              </li>
            </ul>
          );
        },
      },
    ],
    [handleCompanyClick, checkedAll]
  );

  // SideBar Company Deatail
  const [info, setInfo] = useState([]);

  // Export Modal
  const [isExportCSV, setIsExportCSV] = useState(false);

  document.title = "Companies | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";
  return (
    <React.Fragment>
      <div className="page-content">
        <ExportCSVModal
          show={isExportCSV}
          onCloseClick={() => setIsExportCSV(false)}
          data={companies}
        />
        <DeleteModal
          show={deleteModal}
          onDeleteClick={handleDeleteCompany}
          onCloseClick={() => setDeleteModal(false)}
        />
        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            deleteMultiple();
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />

        <Container fluid>
          <BreadCrumb title="Companies" pageTitle="CRM" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <div className="flex-grow-1">
                      <button className="btn btn-info add-btn" onClick={() => { setIsEdit(false); toggle(); }}>
                        <i className="ri-add-fill me-1 align-bottom"></i> Add Company
                      </button>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="hstack text-nowrap gap-2">
                        {isMultiDeleteButton && <button className="btn btn-soft-danger"
                          onClick={() => setDeleteModalMulti(true)}
                        ><i className="ri-delete-bin-2-line"></i></button>}
                        <button className="btn btn-danger">
                          <i className="ri-filter-2-line me-1 align-bottom"></i>{" "}
                          Filters
                        </button>
                        <button className="btn btn-soft-success" onClick={() => setIsExportCSV(true)}>Export</button>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            href="#"
                            className="btn-soft-info btn-icon"
                            tag="button"
                          >
                            <i className="ri-more-2-fill"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-end">
                            {TimeSpanOptions.map((item,index)=>{
                              return <DropdownItem className="dropdown-item" href="#">{item.label}</DropdownItem>
                            })}
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Col>
            <Col xxl={9}>
              <Card id="companyList">
                <CardBody className="pt-0">
                  <div>
                    {isCompaniesSuccess && companies.length ? (
                      <TableContainer
                        columns={columns}
                        data={(companies || [])}
                        isGlobalFilter={true}
                        isAddUserList={false}
                        customPageSize={7}
                        className="custom-header-css"
                        divClass="table-responsive table-card mb-2"
                        tableClass="align-middle table-nowrap"
                        theadClass="table-light"
                        handleCompanyClick={handleCompanyClicks}
                        isCompaniesFilter={true}
                        SearchPlaceholder='Search for company...'
                      />
                    ) : (<Loader error={error} />)
                    }
                  </div>
                  <Modal id="showModal" isOpen={modal} toggle={toggle} centered size="lg">
                    <ModalHeader className="bg-soft-info p-3" toggle={toggle}>
                      {!!isEdit ? "Edit Company" : "Add Company"}
                    </ModalHeader>
                    <Form className="tablelist-form" onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      // return false;
                    }}>
                      <ModalBody>
                        <input type="hidden" id="id-field" />
                        <Col lg={12}>
                          <div className="text-center mb-3">
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
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.img || ""}
                                  invalid={
                                    validation.touched.img && validation.errors.img ? true : false
                                  }
                                />
                              </div>
                              <div className="avatar-lg p-1">
                                <div className="avatar-title bg-light rounded-circle">
                                  <img src={multiUser} alt="multiUser" id="companylogo-img" className="avatar-md rounded-circle object-cover" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <>
                          <Container>
                              <h4 >Company Info</h4>
                            <Row className="mt-3">
                              <Col  lg={6}>
                                <div>
                                  <Label
                                    htmlFor="name-field"
                                    className="form-label"
                                  >
                                    Name
                                  </Label>
                                  <Input
                                    name="name"
                                    id="customername-field"
                                    className="form-control"
                                    placeholder="Enter Company Name"
                                    type="text"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.name || ""}
                                    invalid={
                                      validation.touched.name && validation.errors.name ? true : false
                                    }
                                  />
                                  {validation.touched.name && validation.errors.name ? (
                                    <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div>
                                  <Label
                                    htmlFor="employee-field"
                                    className="form-label"
                                  >
                                    Employee Size
                                  </Label>
                                  <Input
                                    name="employee_size"
                                    id="employee-field"
                                    className="form-control"
                                    placeholder="Enter employee size"
                                    type="number"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.employee_size || ""}
                                    invalid={
                                      validation.touched.employee_size && validation.errors.employee_size ? true : false
                                    }
                                  />
                                  {validation.touched.employee_size && validation.errors.employee_size ? (
                                    <FormFeedback type="invalid">{validation.errors.employee_size}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>
                          </Container>
                          <Container>
                            <Row className="mt-2">
                              <Col lg={6}>
                                <div>
                                  <Label
                                    htmlFor="owner-field"
                                    className="form-label"
                                  >
                                    Owner Name
                                  </Label>
                                  <Input
                                    name="owner"
                                    id="owner-field"
                                    className="form-control"
                                    placeholder="Enter Owner Name"
                                    type="text"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.owner || ""}
                                    invalid={
                                      validation.touched.owner && validation.errors.owner ? true : false
                                    }
                                  />
                                  {validation.touched.owner && validation.errors.owner ? (
                                    <FormFeedback type="invalid">{validation.errors.owner}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div>
                                  <Label htmlFor="industry_type-field" className="form-label">
                                    Industry Type
                                  </Label>
                                  <br></br>
                                  <DropDownCustomComponent
                                  handleTypeChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                    value={validation.values.industry_type || ""}
                                    // id="industry_type-field"
                                    LabelName="Select..."
                                    options={industrytype}
                                    width="w-100"
                                    tagName="button"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    dropDownButtonClass='mdi mdi-chevron-down'
                                    className="btn btn-light form-control d-flex justify-content-between text-muted border bg-white"
                                    invalid={
                                      validation.touched.industry_type && validation.errors.industry_type ? true : false
                                    }
                                  />
                                   {validation.touched.industry_type && validation.errors.industry_type ? (
                                    <FormFeedback type="invalid">{validation.errors.industry_type}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>
                          </Container>

                          <Container>
                            <Row className="mt-2"> <Col lg={4}>
                              <div>
                                <Label
                                  htmlFor="star_value-field"
                                  className="form-label"
                                >
                                  Phone Number
                                </Label>
                                <Input
                                  name="phone_number"
                                  id="phone-number-field"
                                  className="form-control"
                                  placeholder="Enter Phone"
                                  type="number"
                                  validate={{
                                    required: { value: true },
                                  }}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.phone_number || ""}
                                  invalid={
                                    validation.touched.phone_number && validation.errors.phone_number ? true : false
                                  }

                                />
                                {validation.touched.phone_number && validation.errors.phone_number ? (
                                    <FormFeedback type="invalid">{validation.errors.phone_number}</FormFeedback>
                                  ) : null}
                              </div>
                            </Col>
                              <Col lg={4}>
                                <div>
                                  <Label
                                    htmlFor="website-field"
                                    className="form-label"
                                  >
                                    Website
                                  </Label>
                                  <Input
                                    name="website"
                                    id="website-field"
                                    className="form-control"
                                    placeholder="Enter website"
                                    type="text"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.website || ""}
                                    invalid={
                                      validation.touched.website && validation.errors.website ? true : false
                                    }
                                  />
                                  {validation.touched.website && validation.errors.website ? (
                                    <FormFeedback type="invalid">{validation.errors.website}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div>
                                  <Label
                                    htmlFor="contact_email-field"
                                    className="form-label"
                                  >
                                    Contact Email
                                  </Label>
                                  <Input
                                    name="contact_email"
                                    id="contact_email-field"
                                    className="form-control"
                                    placeholder="Enter Contact email"
                                    type="text"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.contact_email || ""}
                                    invalid={
                                      validation.touched.contact_email && validation.errors.contact_email ? true : false
                                    }
                                  />
                                  {validation.touched.contact_email && validation.errors.contact_email ? (
                                    <FormFeedback type="invalid">{validation.errors.contact_email}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col></Row>
                          </Container>
                        </>
                        <Container>
                          <Row className="mt-4">
                            <h4>Location</h4>
                          <Location Joblocation="Company location"/>
                          </Row>
                        </Container>
                      </ModalBody>
                      <ModalFooter>
                        <div className="hstack gap-2 justify-content-end">
                          <Button color="light" onClick={() => { setModal(false); }} > Close </Button>
                          <Button type="submit" color="success" id="add-btn" >  {!!isEdit ? "Update" : "Add Company"} </Button>
                        </div>
                      </ModalFooter>
                    </Form>
                  </Modal>
                  <ToastContainer closeButton={false} limit={1} />
                </CardBody>
              </Card>
            </Col>
            <Col xxl={3}>
              <Card id="company-view-detail">
                <CardBody className="text-center">
                  <div className="position-relative d-inline-block">
                    <div className="avatar-md">
                      <div className="avatar-title bg-light rounded-circle">
                        <img src={process.env.REACT_APP_API_URL + "/images/" + (info.image_src || "brands/mail_chimp.png")} alt="" className="avatar-sm rounded-circle object-cover" />
                      </div>
                    </div>
                  </div>
                  <h5 className="mt-3 mb-1">{info.name || "Syntyce Solution"}</h5>
                  <p className="text-muted">{info.owner || "Michael Morris"}</p>

                  <ul className="list-inline mb-0">
                    <li className="list-inline-item avatar-xs">
                      <Link
                        to="#"
                        className="avatar-title bg-soft-success text-success fs-15 rounded"
                      >
                        <i className="ri-global-line"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item avatar-xs">
                      <Link
                        to="#"
                        className="avatar-title bg-soft-danger text-danger fs-15 rounded"
                      >
                        <i className="ri-mail-line"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item avatar-xs">
                      <Link
                        to="#"
                        className="avatar-title bg-soft-warning text-warning fs-15 rounded"
                      >
                        <i className="ri-question-answer-line"></i>
                      </Link>
                    </li>
                  </ul>
                </CardBody>
                <div className="card-body">
                  <h6 className="text-muted text-uppercase fw-semibold mb-3">
                    Information
                  </h6>
                  <p className="text-muted mb-4">
                    A company incurs fixed and variable costs such as the
                    purchase of raw materials, salaries and overhead, as
                    explained by AccountingTools, Inc. Business owners have the
                    discretion to determine the actions.
                  </p>
                  <div className="table-responsive table-card">
                    <table className="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td className="fw-medium">
                            Industry Type
                          </td>
                          <td>{info.industry_type || "Chemical Industries"}</td>
                        </tr>
                        <tr>
                          <td className="fw-medium">
                            Location
                          </td>
                          <td>{info.location || "Damascus, Syria"}</td>
                        </tr>
                        <tr>
                          <td className="fw-medium">
                            Employee
                          </td>
                          <td>{info.employee || "10-50"}</td>
                        </tr>
                        <tr>
                          <td className="fw-medium">
                            Website
                          </td>
                          <td>
                            <Link
                              to="#"
                              className="link-primary text-decoration-underline"
                            >
                              {info.website || "www.syntycesolution.com"}
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium">
                            Contact Email
                          </td>
                          <td>{info.contact_email || "info@syntycesolution.com"}</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default VendorsListComponent;
