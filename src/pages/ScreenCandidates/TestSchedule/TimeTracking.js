import React, { useState, useRef } from "react";
import { Card, CardBody, CardHeader, Row, Col, Label, Input } from "reactstrap";
import Flatpickr from "react-flatpickr";
import moment from "moment";

const TimeTracking = ({ isExpertSelected }) => {
  const [testStartTime, setTestStartTime] = useState("");
  const [testEndTime, setTestEndTime] = useState("");
  const [testDate, setTestDate] = useState("");

  const handleTestDateChange = (selectedDates) => {
    if (selectedDates && selectedDates.length > 0) {
      const formattedDate = moment(selectedDates[0]).format("D MMM, YYYY");
      setTestDate(formattedDate);
    }
  };

  const handleTestStartTimeChange = (e) => {
    const timeString = new Date(e.toString().replace(/GMT.+/g, "UTC"))
      .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: false })
      .slice(0, 5);

    setTestStartTime(timeString);
  };

  const handleTestEndTimeChange = (e) => {
    const timeString = new Date(e.toString().replace(/GMT.+/g, "UTC"))
      .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: false })
      .slice(0, 5);

    setTestEndTime(timeString);
  };
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1">
            Schedule Date and Time of Test
          </h4>
          <div className="flex-shrink-0 mt-1">
            <lord-icon
              src="https://cdn.lordicon.com/kbtmbyzy.json"
              trigger="loop"
              colors="primary:#405189,secondary:#02a8b5"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </div>
        </CardHeader>
        <CardBody>
          {isExpertSelected ? (
            <>
              <Row>
                <Col xxl={4} className="mt-3">
                  <Label htmlFor="Test-Date" className="form-label">
                    Date
                  </Label>
                  <div className="input-group">
                    <Flatpickr
                      value={moment(testDate, "D MMM, YYYY").toDate()}
                      className="form-control"
                      id="Test-Date"
                      placeholder="Select date"
                      onChange={(e) => handleTestDateChange(e)}
                      options={{
                        altInput: true,
                        altFormat: "d M, Y",

                        dateFormat: "D M, Y",
                      }}
                    />
                    <div className="input-group-text bg-primary border-primary text-white">
                      <i className="ri-calendar-2-line"></i>
                    </div>
                  </div>
                </Col>

                <Col xxl={4} className="mt-3">
                  <Label htmlFor="StartTimeForTest" className="form-label">
                    Start Time
                  </Label>
                  <div className="input-group">
                    <Flatpickr
                      value={testStartTime}
                      className="form-control"
                      id="StartTimeForTest"
                      placeholder="Select start time"
                      onChange={handleTestStartTimeChange}
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i",
                      }}
                    />
                    <div className="input-group-text bg-primary border-primary text-white">
                      <i className="ri-alarm-line"></i>
                    </div>
                  </div>
                </Col>
                <Col xxl={4} className="mt-3">
                  <Label htmlFor="EndTimeForTest" className="form-label">
                    End Time
                  </Label>
                  <div className="input-group">
                    <Flatpickr
                      value={testEndTime}
                      className="form-control"
                      id="EndTimeForTest"
                      placeholder="Select end time"
                      onChange={handleTestEndTimeChange}
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i",
                      }}
                    />
                    <div className="input-group-text bg-primary border-primary text-white">
                      <i className="ri-alarm-line"></i>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <Row className="mt-3">
              <Col xxl={6}>
                <Label htmlFor="TestDueDate" className="form-label">
                  Due Date
                </Label>
                <div className="input-group">
                  <Flatpickr
                    value={moment(testDate, "D MMM, YYYY").toDate()}
                    className="form-control"
                    id="TestDueDate"
                    placeholder="Select Due Date"
                    onChange={(e) => handleTestDateChange(e)}
                    options={{
                      altInput: true,
                      altFormat: "d M, Y",

                      dateFormat: "D M, Y",
                    }}
                  />
                  <div className="input-group-text bg-primary border-primary text-white">
                    <i className="ri-calendar-2-line"></i>
                  </div>
                </div>
              </Col>

              <Col xxl={6}>
                <Label htmlFor="TestDuration" className="form-label">
                  Test Duration
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="test Duration"
                />
              </Col>
            </Row>
          )}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default TimeTracking;
