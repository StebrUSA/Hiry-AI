import React from "react";
import Slider from "react-slick";
import { Card, CardBody, CardFooter } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CandidatesInterestedCarousel({ selectedCandidates }) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Slider {...sliderSettings}>
      {selectedCandidates.slice(0, 6).map((item, key) => (
        <div key={key}>
          <Card>
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  {item.nickname ? (
                    <div className="avatar-lg rounded">
                      <div className="avatar-title border bg-light text-primary rounded text-uppercase fs-24">
                        {item.nickname}
                      </div>
                    </div>
                  ) : (
                    <div className="avatar-lg rounded">
                      <img
                        src={item.userImg}
                        alt=""
                        className="member-img img-fluid d-block rounded"
                      ></img>
                    </div>
                  )}
                </div>
                <div className="flex-grow-1 ms-3">
                  <a href="/pages-profile">
                    <h5 className="fs-16 mb-1">{item.candidateName}</h5>
                  </a>

                  <p className="text-muted mb-1">
                    {item.designation}

                    <span className="float-end">
                      <span>
                        <i
                          id="TooltipTwitter"
                          className="ri-twitter-fill text-primary me-1 h-100 align-bottom cursor-pointer"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          title="www.twitter.com"
                        ></i>
                      </span>
                      <span>
                        <i
                          id="TooltipLinkedin"
                          className=" ri-linkedin-fill text-primary me-1 align-bottom cursor-pointer"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          title="www.linkedin.com"
                        ></i>
                      </span>
                      <span>
                        <i
                          id="TooltipGmail"
                          className=" ri-google-fill text-primary me-1 align-bottom cursor-pointer"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          title="www.gmail.com"
                        ></i>
                      </span>
                    </span>
                  </p>

                  <div className="row">
                    {item.skills?.length > 0 &&
                      item.skills.slice(0, 4).map((value, ind) => {
                        return (
                          <div
                            className="d-flex col-md-12 col-lg-12 col-xxl-6 col-xl-6 col-sm-12"
                            key={ind}
                          >
                            <div className="flex-shrink-0">
                              <i className="ri-checkbox-circle-fill text-success"></i>
                            </div>
                            <div className="flex-grow-1 ms-2 text-muted">
                              {value}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <div className="text-muted">
                    <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                    {item.location}
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="text-muted">
                    <i
                      className={`ri-map-pin-user-line me-1 align-bottom ${
                        item.relocate ? "text-success" : "text-danger"
                      }`}
                    ></i>
                    {item.relocate ? (
                      <span
                        className="cursor-pointer"
                        data-bs-placement="bottom"
                        data-bs-toggle="tooltip"
                        title="TX, PA, VA, NY, WI"
                      >
                        {"Willing to relocate"}
                      </span>
                    ) : (
                      <span>{"Not willing to relocate"}</span>
                    )}
                  </div>
                </li>
              </ul>
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <div className="text-muted">
                    <i className="ri-calendar-line text-primary me-1 align-bottom"></i>{" "}
                    <span>3 years exp</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div>
                    {item.type === "Part Time" ? (
                      <span className="badge badge-soft-danger">
                        {item.type}
                      </span>
                    ) : item.type === "Full Time" ? (
                      <span className="badge badge-soft-success">
                        {item.type}
                      </span>
                    ) : (
                      <span className="badge badge-soft-info">{item.type}</span>
                    )}
                  </div>
                </li>
              </ul>
            </CardFooter>
          </Card>
        </div>
      ))}
    </Slider>
  );
}

export default CandidatesInterestedCarousel;
