import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Label, Input } from "reactstrap";
// Import Scroll Bar - SimpleBar
import SimpleBar from "simplebar-react";

const AssignExpert = () => {
  const Assigned = [
    { id: 1, imgId: "anna-adame", img: "avatar-1.jpg", name: "Anna Adame" },
    { id: 2, imgId: "frank-hook", img: "avatar-3.jpg", name: "Frank Hook" },
    {
      id: 3,
      imgId: "alexis-clarke",
      img: "avatar-6.jpg",
      name: "Alexis Clarke",
    },
    {
      id: 4,
      imgId: "herbert-stokes",
      img: "avatar-2.jpg",
      name: "Herbert Stokes",
    },
    {
      id: 5,
      imgId: "michael-morris",
      img: "avatar-7.jpg",
      name: "Michael Morris",
    },
    {
      id: 6,
      imgId: "nancy-martino",
      img: "avatar-5.jpg",
      name: "Nancy Martino",
    },
    {
      id: 7,
      imgId: "thomas-taylor",
      img: "avatar-8.jpg",
      name: "Thomas Taylor",
    },
    { id: 8, imgId: "tonya-noble", img: "avatar-10.jpg", name: "Tonya Noble" },
  ];
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1">
            Assign An Expert for Screening
          </h4>
        </CardHeader>
        <CardBody>
          <Col lg={12}>
            <SimpleBar style={{ maxHeight: "130px" }}>
              <ul className="list-unstyled vstack gap-2 mb-0">
                {Assigned.map((item, key) => (
                  <li key={key}>
                    <div className="form-check d-flex align-items-center">
                      <Input
                        name="subItem"
                        className="form-check-input me-3"
                        type="checkbox"
                        value={item.img}
                        id={item.imgId}
                      />

                      <Label
                        className="form-check-label d-flex align-items-center"
                        htmlFor={item.imgId}
                      >
                        <span className="flex-shrink-0">
                          <img
                            src={
                              process.env.REACT_APP_API_URL +
                              "/images/users/" +
                              item.img
                            }
                            alt=""
                            className="avatar-xxs rounded-circle"
                          />
                        </span>
                        <span className="flex-grow-1 ms-2">{item.name}</span>
                      </Label>
                    </div>
                  </li>
                ))}
              </ul>
            </SimpleBar>
          </Col>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default AssignExpert;
