import React, { useState } from "react";
import { Card, CardBody, Row, Col, Label, Input } from "reactstrap";

const TimeTracking = () => {
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");

  const handleEventStartDateChange = (e) => {
    setEventStartDate(e.target.value);
  };
  const handleEventEndDateChange = (e) => {
    setEventEndDate(e.target.value);
  };
  const handleEventStartTimeChange = (e) => {
    setEventStartTime(e.target.value);
  };
  const handleEventEndTimeChange = (e) => {
    setEventEndTime(e.target.value);
  };
  return (
    <React.Fragment>
      <Card>
        <CardBody className="text-center">
          <h6 className="card-title mb-3 mt-2 flex-grow-1  text-center">
            Schedule Date and Time of the Test
          </h6>
          <div className="mb-2">
            <lord-icon
              src="https://cdn.lordicon.com/kbtmbyzy.json"
              trigger="loop"
              colors="primary:#405189,secondary:#02a8b5"
              style={{ width: "90px", height: "90px" }}
            ></lord-icon>
          </div>
          <Row className="mt-3">
            <Col xxl={6}>
              <Label htmlFor="EventStartDate" className="form-label">
                Start Date
              </Label>
              <Input
                value={eventStartDate}
                type="date"
                className="form-control"
                id="EventStartDate"
                onChange={handleEventStartDateChange}
              />
            </Col>
            <Col xxl={6}>
              <Label htmlFor="EventEndDate" className="form-label">
                End Date
              </Label>
              <Input
                value={eventEndDate}
                type="date"
                className="form-control"
                id="EventEndDate"
                onChange={handleEventEndDateChange}
              />
            </Col>

            <Col xxl={6} className="mt-3">
              <Label htmlFor="StartTimeForEvent" className="form-label">
                Start Time
              </Label>
              <Input
                value={eventStartTime}
                type="time"
                className="form-control"
                id="StartTimeForEvent"
                onChange={handleEventStartTimeChange}
              />
            </Col>
            <Col xxl={6} className="mt-3">
              <Label htmlFor="EndTimeForEvent" className="form-label">
                End Time
              </Label>
              <Input
                value={eventEndTime}
                type="time"
                className="form-control"
                id="EndtTmeForEvent"
                onChange={handleEventEndTimeChange}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default TimeTracking;
