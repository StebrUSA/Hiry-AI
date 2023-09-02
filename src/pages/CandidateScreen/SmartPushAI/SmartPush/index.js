import React, { useEffect, useState } from "react";
import L from "leaflet";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  UncontrolledAlert,
} from "reactstrap";
import markericon from "../../../../assets/images/marker.png";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Widgets from "./Widgets";

import "leaflet/dist/leaflet.css";

const MapComponent = ({ markers }) => {
  useEffect(() => {
    // Create a Leaflet map instance
    const map = L.map("map").setView([37.0902, -95.7129], 4);

    // Set the map tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data © OpenStreetMap contributors",
    }).addTo(map);

    // Create a custom icon for the markers
    const icon = L.icon({
      iconUrl: markericon,
      iconSize: [25, 30],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41],
    });

    // Add markers to the map
    markers.forEach((marker) => {
      const { position, state, jobs, employers } = marker;

      // Create a marker with a popup
      const markerElement = L.marker(position, { icon })
        .bindPopup(
          `<strong>${state}</strong><br>Jobs: ${jobs}<br>Employers: ${employers}`
        )
        .addTo(map);

      // Add hover behavior to show/hide popups
      markerElement.on("mouseover", () => markerElement.openPopup());
      markerElement.on("mouseout", () => markerElement.closePopup());
    });

    return () => {
      // Clean up the map instance when the component unmounts
      map.remove();
    };
  }, [markers]);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

const SmartPush = () => {
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

  const handleSendButtonClick = () => {
    setShowAlert(true);
  };
  // Sample data for markers
  const markers = [
    {
      position: [34.0522, -118.2437],
      state: "California",
      jobs: 100,
      employers: 50,
    },
    { position: [32.7767, -96.797], state: "Texas", jobs: 80, employers: 30 },
    {
      position: [27.9944024, -81.7602549],
      state: "Florida",
      jobs: 150,
      employers: 75,
    },
    // Add more markers for other states
  ];

  // Rest of the code...

  return (
    <React.Fragment>
      <div className="page-content">
        {showAlert ? (
          <Container fluid className="container-fluid">
            <BreadCrumb title="Smart Push" pageTitle="Smart Push" />
            <div className="mt-4">
              <UncontrolledAlert
                color="success"
                className="alert-additional"
                toggle={false}
              >
                <div className="alert-body">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <i className="ri-checkbox-circle-line text-success fs-16 align-middle"></i>
                    </div>
                    <div className="flex-grow-1 mb-3">
                      <h5 className="alert-heading mb-4">
                        Yay! You have successfully submitted resumes to the
                        employers
                      </h5>
                      <p className="mb-0">
                        80% of the jobs matches with your profile
                      </p>
                    </div>
                  </div>
                </div>
                <div className="alert-content">
                  <p className="mb-0">
                    We will notify you when some employer is interested in your
                    job profile
                  </p>
                </div>
              </UncontrolledAlert>
            </div>
          </Container>
        ) : (
          <Container fluid className="container-fluid">
            <BreadCrumb title="Smart Push" pageTitle="Smart Push" />
            <Row>
              <Widgets />
            </Row>

            <Row>
              <Col xxl={12}>
                <Card>
                  <CardHeader>
                    {" "}
                    <h5 className="card-title mb-2">
                      No of Jobs and Employers in US states
                    </h5>
                  </CardHeader>
                  <CardBody>
                    {" "}
                    <div className="map-container mt-2">
                      <MapComponent markers={markers} />
                    </div>
                    <button
                      className="btn btn-primary mt-4"
                      onClick={handleSendButtonClick}
                    >
                      Send Resumes
                    </button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </React.Fragment>
  );
};

export default SmartPush;
