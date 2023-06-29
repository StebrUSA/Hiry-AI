import React, { useState } from "react";
import { Input, Label, Row, Card, CardBody, Col, Button } from "reactstrap";

const OfferServicesTab1 = () => {
  const [offerService, setOfferService] = useState([]);
  const [offerServiceName, setOfferServiceName] = useState("");

  const handleServiceChange = (e) => {
    setOfferServiceName(e.target.value);
  };
  const handleDeleteService = (index) => {
    const updateServices = offerService.filter((ele, key) => {
      return index !== key;
    });
    setOfferService(updateServices);
  };
  return (
    <div className="pb-5 mb-3">
      <Card className="EditOfferServicesCard">
        <CardBody>
          <div className="mb-3">
            <Row>
              <Col xxl={3}>
                <Label htmlFor="serviceOfferedInput" className="form-label">
                  Service
                </Label>
                <Input
                  value={offerServiceName}
                  type="text"
                  className="form-control"
                  id="serviceOfferedInput"
                  placeholder="Enter Service"
                  onChange={handleServiceChange}
                />
                <Button
                  className="mt-3 text"
                  color="primary"
                  onClick={() => {
                    if (offerServiceName.length === 0) {
                    } else {
                      setOfferService([
                        ...offerService,
                        { offerServiceName: offerServiceName },
                      ]);
                      setOfferServiceName("");
                    }
                  }}
                >
                  <i className="ri-add-fill me-1 align-bottom"></i> Add
                </Button>
                <Button className="mt-3 ms-2" color="soft-success">
                  Cancel
                </Button>
              </Col>
            </Row>
            <Row className="pt-5">
              <Col xxl={6}>
                {offerService.length > 0 &&
                  <div class="row d-flex justify-content-start align-items-center h-100">
                    <div class="col-md-12 col-xl-10">
                      <div class="card">
                        <div class="card-body" data-mdb-perfect-scrollbar="true">
                          <table class="table mb-0">
                            <thead>
                              <tr>
                                <th scope="col">Service</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {offerService.map((ele, index) => {
                                return (
                                  <tr class="fw-normal">
                                    <td class="align-middle">
                                      <span>{ele.offerServiceName}</span>
                                    </td>
                                    <td>
                                      <button
                                        onClick={() => handleDeleteService(index)}
                                        type="submit" class="btn btn-danger">Delete</button>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default OfferServicesTab1;
