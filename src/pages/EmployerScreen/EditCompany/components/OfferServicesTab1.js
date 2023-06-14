import React, { useState, useCallback, useEffect } from 'react';
import { Form, Input, Label, Row, Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane, Button, Modal, ModalBody, Offcanvas, OffcanvasBody, Container, } from 'reactstrap';
import classnames from 'classnames';
import Dropzone from "react-dropzone";
//import images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import OverviewTab1 from './components/OverviewTab1';
import DocumentsTab from './components/DocumentsTab';
import TeamTab from './components/TeamTab';
import Slack from "../../../assets/images/brands/slack.png";
import illustarator from "../../../assets/images/user-illustarator-2.png";
import { Link } from 'react-router-dom';
import DocumentTab1 from './components/DocumentTab1';
import TeamTab1 from './components/TeamTab1';
import EventTab1 from './components/EventTab1';

const OfferServicesTab1 = () => {
    const [offerService, setOfferService] = useState([])
    const [offerServiceName, setOfferServiceName] = useState("")
  
    const handleServiceChange = (e) => {
        setOfferServiceName(e.target.value);
      }
  return (
    <><Card>
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
            <Button className='mt-3 text' color="primary" onClick={() => {
              if (offerServiceName.length === 0) {

              } else {
                setOfferService([...offerService, { offerServiceName: offerServiceName }]);
                setOfferServiceName("")
              }

            }}>
              <i className="ri-add-fill me-1 align-bottom"></i> Add Service</Button>
            <Button className='mt-3 ms-2' color="soft-success">
              Cancel</Button>
          </Col>
          <Col xxl={6}>
            <ul></ul>
            {
              offerService.map((ele, index) => {
                return <div key={index}>
                  <li className='text-dark'>{ele.offerServiceName}</li>
                </div>
              })
            }

          </Col>
        </Row>

      </div>

    </CardBody>
  </Card></>
  )
}

export default OfferServicesTab1