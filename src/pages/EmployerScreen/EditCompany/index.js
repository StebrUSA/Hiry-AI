import React, { useState } from 'react';
import { Form, Row, Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane, Container, } from 'reactstrap';
import classnames from 'classnames';
import OverviewTab1 from './components/OverviewTab1';
import DocumentTab1 from './components/DocumentTab1';
import TeamTab1 from './components/TeamTab1';
import EventTab1 from './components/EventTab1';
import OfferServicesTab1 from "./components/OfferServicesTab1"
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
                            <Card className=" mx-n4">
                                <div className="bg-soft-warning">
                                    <CardBody className="pb-0 px-4 py-5 mt-5">
           
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
                                                    className={classnames({ active: activeTab === '2' }, "fw-semibold")}
                                                    onClick={() => { toggleTab('2'); }}
                                                    href="#">
                                                    Documents
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

            {/* Document Tab */}
            <TabPane tabId="2">
            <DocumentTab1/>
              </TabPane>

            {/* Team Tab */}
            <TabPane tabId="4">
            <TeamTab1/>
            </TabPane>


            {/* Event Tab */}
            <TabPane tabId="3">
             <EventTab1/>
            </TabPane>

            {/* Offer Services Tab */}
            <TabPane tabId="5">
              <OfferServicesTab1/>
            </TabPane>

          </TabContent>
        </Col>
      </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditCompany;