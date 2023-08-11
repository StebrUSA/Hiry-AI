import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Label,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  Form,
  FormFeedback,
} from "reactstrap";
import illustarator from "../../../../assets/images/user-illustarator-2.png";
import NoData from "../../../../Components/Common2/NoData";
import { useFormik } from "formik";
import * as Yup from "yup";

const OfferServicesTab1 = () => {
  const [offerService, setOfferService] = useState([]);
  const [searchService, setSearchService] = useState("");
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState();
  const action = useRef(null);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

  const handleDeleteService = (index) => {
    const updateServices = offerService.filter((ele, key) => {
      return index !== key;
    });
    setOfferService(updateServices);
  };

  const handleSearchService = (event) => {
    const query = event.target.value;
    setSearchService(query);
    //chats is a array of object
    const searchList = offerService.filter((item) => {
      return (
        item.offerServiceName.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
    setOfferService(searchList);
  };
  const handleEditEvent = (index) => {
    setModal(true);
    setIsEdit(true);
    setEditItem(index);
    const clickedEvent = offerService.filter((ele, id) => {
      return id === index;
    });
  };
  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    initialValues: {
      offerServiceName: (offerService && offerService.offerServiceName) || "",
    },
    validationSchema: Yup.object({
      offerServiceName: Yup.string().required("Please enter service name"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const edited = offerService.filter((ele, index) => {
          return editItem === index;
        });
        edited.offerServiceName = values.offerServiceName;
        offerService.splice(editItem, 1, edited);
        validation.resetForm();
      } else {
        const data = {
          offerServiceName: values["offerServiceName"],
        };
        setOfferService([...offerService, data]);
      }
      toggle();
    },
  });
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
              <i className="ri-add-line align-bottom me-1"></i> Add Offer
              Services
            </Link>
          </div>
        </Col>
        <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
          <div className="search-box ms-md-2 mb-3 mb-md-0">
            <Input
              type="text"
              id="searchService"
              value={searchService}
              onChange={handleSearchService}
              autoComplete="off"
              placeholder="Search for Service..."
            />
            <i className="ri-search-line search-icon"></i>
          </div>
        </Col>
      </Row>
      {offerService.length === 0 && (
        <div
          style={{ height: "55vh" }}
          className="d-flex flex-row justify-content-center align-items-center"
        >
          <NoData
            image={illustarator}
            classForImage="mb-3"
            message="No Services found. Add Service from top to manage them here."
          />
        </div>
      )}
      <Row className="pt-5">
        <Col xxl={6} className="mx-auto">
          {offerService.length > 0 && (
            <div class="table_property row d-flex justify-content-between align-items-center h-100">
              <>
                <div data-mdb-perfect-scrollbar="true">
                  <table class="table table-hover mb-0">
                    <thead className="">
                      <tr>
                        <th className="fs-5" scope="col">
                          Services
                        </th>
                        <th className="fs-5 text-end" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-transparent">
                      {offerService.length > 0 &&
                        offerService.map((ele, index) => {
                          return (
                            <tr class="fw-normal">
                              <td class="align-middle">
                                <span className="fs-5">
                                  {ele.offerServiceName}
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="fs-5">
                                  <i
                                    className="cursor-pointer ri-pencil-fill"
                                    onClick={() => handleEditEvent(index)}
                                  ></i>
                                </span>
                                <span className="fs-5">
                                  <i
                                    onClick={() => handleDeleteService(index)}
                                    className="cursor-pointer ms-3 mb-3 ri-delete-bin-line"
                                  ></i>
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </>
            </div>
          )}
        </Col>
      </Row>
      <Modal id="showModal" isOpen={modal} toggle={toggle} centered size="md">
        <ModalHeader className="bg-soft-info p-3" toggle={toggle}>
          {!!isEdit ? "Edit Offer Service" : "Add Offer Service"}
        </ModalHeader>
        <Row style={{ width: "95%", margin: "auto" }} className="py-3">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <Col xxl={12}>
              <br></br>
              <Label htmlFor="serviceOfferedInput" className="form-label">
                Service
              </Label>
              <Input
                name="offerServiceName"
                value={validation.values.offerServiceName}
                type="text"
                className="form-control"
                id="offerServiceName"
                placeholder="Enter Service"
                onChange={validation.handleChange}
                validate={{
                  required: { value: true },
                }}
                onBlur={validation.handleBlur}
                invalid={
                  validation.touched.offerServiceName &&
                  validation.errors.offerServiceName
                    ? true
                    : false
                }
              />
              {validation.touched.offerServiceName &&
              validation.errors.offerServiceName ? (
                <FormFeedback type="invalid">
                  {validation.errors.offerServiceName}
                </FormFeedback>
              ) : null}

              <Row className="text-end">
                <Col>
                  {" "}
                  <Button type="submit" className="mt-3" color="danger">
                    <span ref={action}>
                      {!!isEdit ? "Update Offer Service" : "Add Offer Service"}
                    </span>
                  </Button>
                  <Button
                    className="mt-3 ms-3"
                    color="soft-success"
                    onClick={() => setModal(false)}
                  >
                    Close
                  </Button>
                </Col>
              </Row>
            </Col>
          </Form>
        </Row>
      </Modal>
    </>
  );
};

export default OfferServicesTab1;
