import React from "react";
import { Col, Row } from "reactstrap";
import illustarator from "../../../../assets/images/user-illustarator-2.png";
const Events = (props) => {
  return (
    <>
      <Row>
        <Col xxl={2} xl={2} sm={2} lg={2} className="text-center">
          <img src={illustarator} className="img-fluid" alt="" />
        </Col>
        <Col xxl={10} xl={10} sm={10} lg={10}>
          <div>
            <h5 className="card-title mb-3">{props.heading}</h5>
            <p>{props.description}</p>
            <div className="d-flex gap-4">
              <div className="d-flex align-items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="11px"
                    className="mb-1"
                    viewBox="0 0 448 512"
                  >
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                  </svg>
                </div>
                <div>
                  <span className="me-1">{props.startDate}</span>-
                  <span className="ms-1">{props.endDate}, 2023</span>{" "}
                </div>
              </div>

              <div className="d-flex align-items-center1">
                <div>
                  <i className="ri-map-pin-2-line text-primary me-1"></i>{" "}
                </div>
                <span>{props.venue}</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div>
                  <i className="ri-time-line text-primary me-1 align-bottom"></i>{" "}
                </div>
                <span>{props.startTime} - {props.endTime}</span>
              </div>
              <div className="w-25">
                <span className={"badge badge-soft-"+props.statusColor}>{props.status}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Events;
