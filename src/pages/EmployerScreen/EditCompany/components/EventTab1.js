import React, { useState } from "react";
import { Input, Label, Row, Card, CardBody, Col, Button } from "reactstrap";
import moment from "moment";
//import images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import illustarator from "../../../../assets/images/user-illustarator-2.png";

const EventTab1 = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");

  // Button handle for event
  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };
  const handleEventDescription = (e) => {
    setEventDescription(e.target.value);
  };
  const handleEventVenueChange = (e) => {
    setEventVenue(e.target.value);
  };
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

  const handleDeleteEvent = (index) => {
    const updateEvents = events.filter((ele, key) => {
      return index !== key;
    });
    setEvents(updateEvents);
  };
  return (
    <div className="pb-5 mb-3">
      <Row>
        <Col xxl={9}>
          <Row>
            <Col xxl={2} xl={2} lg={2} md={2} sm={12}>
              <div className="text-center">
                <div className="profile-user position-relative d-inline-block mx-auto mb-4">
                  <img src={illustarator} className="img-fluid" alt="" />
                  <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                    <Input
                      id="profile-img-file-input"
                      type="file"
                      className="profile-img-file-input"
                    />
                    <Label
                      htmlFor="profile-img-file-input"
                      className="profile-photo-edit avatar-xs"
                    >
                      <span className="avatar-title rounded-circle bg-light text-body">
                        <i className="ri-camera-fill"></i>
                      </span>
                    </Label>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <Row>
                <Col xxl={12}>
                  <Label htmlFor="eventName" className="form-label">
                    Event Name
                  </Label>
                  <Input
                    onChange={handleEventNameChange}
                    value={eventName}
                    type="text"
                    className="form-control"
                    id="eventName"
                    placeholder="Name of Event"
                    defaultValue="Workshop"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xxl={3}>
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
                <Col xxl={3}>
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

                <Col xxl={3}>
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
                <Col xxl={3}>
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
              <Row className="mt-3">
                <Col xxl={12}>
                  <Label htmlFor="eventVenue" className="form-label">
                    Place/Location/Link
                  </Label>
                  <Input
                    onChange={handleEventVenueChange}
                    value={eventVenue}
                    type="text"
                    className="form-control"
                    id="eventVenue"
                    placeholder="Venue"
                    defaultValue="Workshop"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xxl={12}>
                  <Label htmlFor="firstnameInput" className="form-label">
                    Description
                  </Label>
                  <textarea
                    value={eventDescription}
                    onChange={handleEventDescription}
                    className="form-control"
                    id="exampleFormControlTextarea"
                    rows="5"
                  ></textarea>
                </Col>
              </Row>

              <div className="text-end">
                <Button
                  className="mt-3"
                  color="primary"
                  onClick={() => {
                    if (
                      eventName.length === 0 ||
                      eventStartDate.length === 0 ||
                      eventEndDate.length === 0 ||
                      eventStartTime.length === 0 ||
                      eventEndTime.length == 0 ||
                      eventDescription === 0
                    ) {
                    } else {
                      setEvents([
                        ...events,
                        {
                          image: "alt",
                          nameOfEvent: eventName,
                          eventDescription: eventDescription,
                          eventVenue: eventVenue,
                          eventStartTime: eventStartTime,
                          eventEndTime: eventEndTime,
                          eventStartDate: eventStartDate,
                          eventEndDate: eventEndDate,
                        },
                      ]);
                      setEventDescription("");
                      setEventName("");
                      setEventVenue("");
                      setEventEndDate("");
                      setEventEndTime("");
                      setEventStartDate("");
                      setEventStartTime("");
                    }
                  }}
                >
                  <i className="ri-add-fill me-1 align-bottom"></i> Add
                </Button>
                <Button className="mt-3 ms-2" color="soft-success">
                  Cancel
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {events.length > 0 && <h4>Events</h4>}
      <Row>
        {events?.map((ele, index) => {
          return (
            <Col lg={3} className="" key={index}>
                <>
                  <Card className="card-body">
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                     <div className="d-flex gap-2"> <div className="flex-shrink-0">
                      <img src={illustarator} className="avatar-sm rounded-circle" alt="" />
                      </div>
                        <div>
                          <h4 className="mb-3">{ele.nameOfEvent}</h4>
                        </div></div>
                        <div>
                          <span className="fs-5">
                          <i className="cursor-pointer ri-pencil-fill"></i> 
                          </span>
                          <span
                            className={"bg-white fs-5 text-dark"}
                          >
                            <i
                              onClick={() => handleDeleteEvent(index)}
                              className="cursor-pointer ms-3 mb-3 ri-delete-bin-line"
                            ></i>
                          </span>
                        </div>
                      </div>
                      <div>
                        {" "}
                        <h6 className="description">{ele.eventDescription}</h6>
                        <div className="text-dark">
                          <div className="d-flex gap-3">  <div className="d-flex align-items-center gap-1">
                            <div className="me-1 d-flex justify-content-start">
                              <i className="ri-calendar-line text-primary me-1"></i>{" "}
                            </div>{" "}
                            <div className="">
                              <span className="me-1">
                                {moment(ele.eventStartDate).format("MMMM d")}{" "}
                              </span>
                              -
                              <span className="ms-1">
                                {moment(ele.eventEndDate).format(
                                  "MMMM d, YYYY"
                                )}{" "}
                              </span>
                            </div>
                          </div>
                          
                          <div className="d-flex align-items-center gap-1">
                            <div>
                              <i className="ri-time-line text-primary me-1 align-bottom"></i>{" "}
                            </div>
                            <span>{ele.eventStartTime}</span> -
                            <span>{ele.eventEndTime}</span>
                          </div>
                          
                          </div>
                        
                          <div className="d-flex align-items-center gap-1">                          
                            <div>
                              <i className="ri-map-pin-2-line text-primary  me-1"></i>{" "}
                            </div>{" "}
                            <span>{ele.eventVenue}</span>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </Card>
                </>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default EventTab1;