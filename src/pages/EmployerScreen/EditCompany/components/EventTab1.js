import React, { useState, useCallback } from "react";
import {
  Input,
  Label,
  Row,
  Card,
  CardBody,
  Col,
  Button,
  Modal,
  ModalHeader,

} from "reactstrap";
import moment from "moment";
//import images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import illustarator from "../../../../assets/images/user-illustarator-2.png";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import NoData from "./noData"
const EventTab1 = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

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
    const date = new Date(e);
    setEventStartDate(date)
  };

  const handleEventEndDateChange = (e) => {
    const date = new Date(e);
    setEventEndDate(date);
  };
  const handleEventStartTimeChange = (e) => {
    let check = false;
    let timeString = new Date(e.toString().replace(/GMT.+/g, "UTC"))
      .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true })
      .slice(0, 5);
    if (timeString[1] === ":") {
      timeString = new Date(e.toString().replace(/GMT.+/g, "UTC"))
        .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true })
        .slice(0, 4);
      check = true;
    }

    let dayeOrNight = new Date(e.toString().replace(/GMT.+/g, "UTC"))
      .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true })
      .slice(8, 11);
    if (check === true) {
      dayeOrNight = new Date(e.toString().replace(/GMT.+/g, "UTC"))
        .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true })
        .slice(7, 10);
    }
    setEventStartTime(timeString + " " + dayeOrNight);

  };

  const handleEventEndTimeChange = (e) => {
    let check = false;
    let timeString = new Date(e.toString().replace(/GMT.+/g, "UTC"))
      .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true })
      .slice(0, 5);
    if (timeString[1] === ":") {
      timeString = new Date(e.toString().replace(/GMT.+/g, "UTC"))
        .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true })
        .slice(0, 4);
      check = true;
    }

    let dayeOrNight = new Date(e.toString().replace(/GMT.+/g, "UTC"))
      .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true })
      .slice(8, 11);
    if (check === true) {
      dayeOrNight = new Date(e.toString().replace(/GMT.+/g, "UTC"))
        .toLocaleTimeString("en-US", { timeZone: "UTC", hour12: true })
        .slice(7, 10);
    }

    setEventEndTime(timeString + " " + dayeOrNight);

  };

  const handleDeleteEvent = (index) => {
    const updateEvents = events.filter((ele, key) => {
      return index !== key;
    });
    setEvents(updateEvents);
  };


  const handleEditEvent = (index) => {
    setModal(true);
    setIsEdit(true)
    const clickedEvent = events.filter((ele, id) => {
      return id === index;
    })
    clickedEvent.map((item, index) => {
      setEventName(item.nameOfEvent)
      setEventStartDate(item.eventStartDate);
      setEventEndDate(item.eventEndDate);
      setEventStartTime(item.eventStartTime);
      setEventEndTime(item.eventEndTime)
      setEventVenue(item.eventVenue)
      setEventDescription(item.eventDescription)
    })
  }

  const handleAddEvent = () => {
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
      setModal(false)
    }
  }



  return (
    <div className="pb-5 mb-3">
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
              <i className="ri-add-line align-bottom me-1"></i> Add Event
            </Link>
          </div>
        </Col>
        <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
          <div className="search-box ms-md-2 mb-3 mb-md-0">
            <Input
              type="text"
              id="searchEvent"
              autoComplete="off"
              placeholder="Search for Event..."
            />
            <i className="ri-search-line search-icon"></i>
          </div>
        </Col>
      </Row>


      {events.length === 0 &&
        <div style={{ height: "55vh" }} className="d-flex flex-row justify-content-center align-items-center">
          <NoData image={illustarator} classForImage="mb-3" message="No Events found. Add Events from top to manage them here." />
        </div>

      }

      {events.length > 0 && <h4>Events</h4>}

      <Row>
        {events?.map((ele, index) => {
          return (
            <Col lg={3} className="" key={index}>
              <>
                <Card className="card-body">
                  <div>
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex gap-2">
                        {" "}
                        <div className="flex-shrink-0">
                          <img
                            src={illustarator}
                            className="avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div>
                          <h4 className="mb-3">{ele.nameOfEvent}</h4>
                        </div>
                      </div>
                      <div>
                        <span className="fs-5">
                          <i className="cursor-pointer ri-pencil-fill" onClick={() => handleEditEvent(index)}></i>
                        </span>
                        <span className={"bg-white fs-5 text-dark"}>
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
                        <Row>
                          <Col>
                            <div className="d-flex align-items-center gap-1 text-truncate">
                              <div className="me-1 d-flex justify-content-start">
                                <i className="ri-calendar-line text-primary me-1"></i>{" "}
                              </div>{" "}
                              <div className="">
                                <span className="me-1">{moment(ele.eventStartDate).format("MMM D, YYYY")}</span>
                                -<span className="ms-1">{moment(ele.eventEndDate).format("MMM D, YYYY")}</span>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div className="d-flex gap-3 text-truncate">
                              {" "}


                              <div className="d-flex align-items-center gap-1">
                                <div>
                                  <i className="ri-time-line text-primary me-1 align-bottom"></i>{" "}
                                </div>
                                <span>{ele.eventStartTime}</span> -
                                <span>{ele.eventEndTime}</span>
                              </div>
                            </div>
                          </Col>
                        </Row>



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

      <Modal id="showModal" isOpen={modal} toggle={toggle} centered size="lg">
        <ModalHeader className="bg-soft-info p-3" toggle={toggle}>
          {!!isEdit ? "Edit Event" : "Add Event"}
        </ModalHeader>
        <Row style={{ width: "95%", margin: "auto" }} className="py-3">
          <Col xxl={12}>
            <div className="text-center">
              <div className="profile-user position-relative d-inline-block mx-auto mb-4">
                <img
                  src={illustarator}
                  className="img-fluid"
                  alt=""
                  width={200}
                />
                <div className="avatar-xs rounded-circle profile-photo-edit">
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
            <Row>
              <Col>
                <Label htmlFor="eventName" className="form-label">
                  Event Name
                </Label>
                <Input
                  onChange={handleEventNameChange}
                  value={eventName}
                  autoComplete="false"
                  type="text"
                  className="form-control"
                  id="eventName"
                  placeholder="Name of Event"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xxl={3}>
                <Label htmlFor="EventStartDate" className="form-label">
                  Start Date
                </Label>
                <div className="input-group">
                  <Flatpickr
                    value={eventStartDate}
                    className="form-control"
                    id="EventStartDate"
                    placeholder="Select a date"
                    onChange={handleEventStartDateChange}
                    options={{
                      altInput: true,
                      altFormat: "F j, Y",
                      mode: "single",
                      dateFormat: "d.m.y",
                    }}
                  />
                  <div className="input-group-text bg-primary border-primary text-white">
                    <i className="ri-calendar-2-line"></i>
                  </div>
                </div>
              </Col>
              <Col xxl={3}>
                <Label htmlFor="EventEndDate" className="form-label">
                  End Date
                </Label>
                <div className="input-group">
                  <Flatpickr
                    value={eventEndDate}
                    className="form-control"
                    id="EventEndDate"
                    placeholder="Select a date"
                    onChange={handleEventEndDateChange}
                    options={{
                      altInput: true,
                      altFormat: "F j, Y",
                      mode: "single",
                      dateFormat: "d.m.y",
                    }}
                  />
                  <div className="input-group-text bg-primary border-primary text-white">
                    <i className="ri-calendar-2-line"></i>
                  </div>
                </div>
              </Col>

              <Col xxl={3}>
                <Label htmlFor="StartTimeForEvent" className="form-label">
                  Start Time
                </Label>
                <div className="input-group">
                  <Flatpickr
                    value={eventStartTime}
                    className="form-control"
                    id="StartTimeForEvent"
                    placeholder="Select time"
                    onChange={handleEventStartTimeChange}
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
              <Col xxl={3}>
                <Label htmlFor="EndTimeForEvent" className="form-label">
                  End Time
                </Label>
                <div className="input-group">
                  <Flatpickr
                    value={eventEndTime}
                    className="form-control"
                    id="EndTimeForEvent"
                    placeholder="Select time"
                    onChange={handleEventEndTimeChange}
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
                  placeholder="Enter Venue"

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
                  rows="4"
                ></textarea>
              </Col>
            </Row>

            <Row className="text-end">
              <Col>
                <Button
                  className="mt-3"
                  color="primary"
                  onClick={() => handleAddEvent()}
                >
                  <i className="ri-add-fill me-1 align-bottom"></i> Save
                </Button>
                <Button className="mt-3 ms-3" color="soft-success" onClick={() => {
                  setModal(false)
                }}>
                  Close
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}


export default EventTab1;