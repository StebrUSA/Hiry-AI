import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Row, Label, Input } from "reactstrap";
// Import Scroll Bar - SimpleBar
import SimpleBar from "simplebar-react";
import Lottie from "lottie-react";

const AssignExpert = () => {
  const [animationData, setAnimationData] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(
          "https://assets8.lottiefiles.com/packages/lf20_bo8vqwyw.json"
        );
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to fetch animation data:", error);
      }
    };

    fetchAnimationData();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000); // Change the time (in milliseconds) as needed

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        {showContent ? (
          <>
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
                            <span className="flex-grow-1 ms-2">
                              {item.name}
                            </span>
                          </Label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </SimpleBar>
              </Col>
            </CardBody>
          </>
        ) : (
          <>
            <h6 className="card-title fw-semibold text-center mt-3 ">
              Searching for experts in our database
            </h6>
            <Row className="justify-content-center">
              <Col xxl={8}>
                {animationData && <Lottie animationData={animationData} />}
              </Col>
            </Row>
          </>
        )}
      </Card>
    </React.Fragment>
  );
};

export default AssignExpert;
