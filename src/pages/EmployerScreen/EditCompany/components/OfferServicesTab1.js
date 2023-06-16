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
              <Col xxl={3}>
                <h5>Services</h5>
                <ul>
                  {offerService.map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className="w-100 mb-1 d-flex justify-content-between align-items-center"
                      >
                        <li className="text-dark fs-5">
                          {ele.offerServiceName}
                        </li>
                        <span
                          className={
                            "avatar-title w-25 bg-white fs-5 text-dark"
                          }
                        >
                          <i
                            onClick={() => handleDeleteService(index)}
                            className="cursor-pointer ms-5 ri-delete-bin-line"
                          ></i>
                        </span>
                      </div>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default OfferServicesTab1;
