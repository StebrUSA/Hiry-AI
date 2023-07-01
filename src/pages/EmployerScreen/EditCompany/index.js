import React, { useState } from 'react';
import { Form, Row, Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane, Container, } from 'reactstrap';
import classnames from 'classnames';
import OverviewTab1 from './components/OverviewTab1';
import DocumentTab1 from './components/DocumentTab1';
import TeamTab1 from './components/TeamTab1';
import EventTab1 from './components/EventTab1';
import OfferServicesTab1 from "./components/OfferServicesTab1"
import Slack from "../../../assets/images/brands/slack.png";

const EditCompany = () => {
  const [activeTab, setActiveTab] = useState('1');
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.title = "Project Edit | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <Container fluid>
        <Row className='mt-4'>
          <Col lg={12}>
            <Card className="mt-n4 mx-n4">
              <div className="bg-soft-warning">
                <CardBody className="pb-0 px-4 py-5 mt-5">
                  <Row className="mb-3">
                    <div className="col-md">
                      <Row className="align-items-center g-3">
                        {/* <div className="col-md-auto">
                                                        <div className="avatar-md">
                                                            <div className="avatar-title bg-white rounded-circle">
                                                                <img src={Slack} alt="" className="avatar-xs" />
                                                            </div>
                                                        </div>
                                                    </div> */}
                        <div className="col-md">
                          <div className='ml-4'>
                            <h2 className="">Edit Company</h2>
                            {/* <div className="hstack gap-3 flex-wrap">
                                                                <div>Location : <span className="fw-medium">Damascus, Syria</span></div>
                                                                <div className="vr"></div>
                                                                <div>Website : <span className="fw-medium">www.syntycesolution.com</span></div>
                                                            </div> */}
                          </div>
                        </div>
                      </Row>
                    </div>
                    <div className="col-md-auto">
                      <div className="hstack gap-1 flex-wrap">
                        <button type="button" className="btn py-0 fs-16 favourite-btn active">
                          <i className="ri-star-fill"></i>
                        </button>
                        <button type="button" className="btn py-0 fs-16 text-body">
                          <i className="ri-share-line"></i>
                        </button>
                        <button type="button" className="btn py-0 fs-16 text-body">
                          <i className="ri-flag-line"></i>
                        </button>
                      </div>
                    </div>
                  </Row>
                  <Nav className="nav-tabs-custom border-bottom-0" role="tablist">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '1' }, "fw-semibold")}
                        onClick={() => { toggleTab('1'); }}
                        href="#">
                        Overview
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '4' }, "fw-semibold")}
                        onClick={() => { toggleTab('4'); }}
                        href="#">
                        Team
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '3' }, "fw-semibold")}
                        onClick={() => { toggleTab('3'); }}
                        href="#">
                        Events
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '5' }, "fw-semibold")}
                        onClick={() => { toggleTab('5'); }}
                        href="#">
                        Offer Services
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '2' }, "fw-semibold")}
                        onClick={() => { toggleTab('2'); }}
                        href="#">
                        Documents
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className='m-2'>
          <Col lg={12}>
            <TabContent activeTab={activeTab} className="text-muted">

              {/* Overview Tab */}
              <TabPane tabId="1">
                <Form>
                  <OverviewTab1 />
                </Form>
              </TabPane>

              {/* Team Tab */}
              <TabPane tabId="4">
                <TeamTab1 />
              </TabPane>


              {/* Event Tab */}
              <TabPane tabId="3">
                <EventTab1 />
              </TabPane>

              {/* Offer Services Tab */}
              <TabPane tabId="5">
                <OfferServicesTab1 />
              </TabPane>

              {/* Document Tab */}
              <TabPane tabId="2">
                <DocumentTab1 />
              </TabPane>

            </TabContent>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditCompany;