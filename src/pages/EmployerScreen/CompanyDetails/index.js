import React, { useState } from 'react';
//import images
import DocumentsTab from './components/DocumentsTab';
import TeamTab from './components/TeamTab';
import Slack from "../../../assets/images/brands/slack.png";

import {
    Card,
    CardBody,
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
} from "reactstrap";
import classnames from "classnames";
import illustarator from "../../../assets/images/user-illustarator-2.png";
import Info from './components/info';
import Overview from './components/Overview';
import OfferServicesTab from './components/OfferServicesTab';
import EventTab from './components/EventTab';

const CompanyOverview = () => {
    //Tab 
    const [activeTab, setActiveTab] = useState('1');
  
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    document.title = "Project Overview | Velzon - React Admin & Dashboard Template";
    return (

        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Card className="mt-n4 mx-n4">
                                <div className="bg-soft-warning">
                                    <CardBody className="pb-0 px-4">
                                        <Row className="mb-3">
                                            <div className="col-md">
                                                <Row className="align-items-center g-3">
                                                    <div className="col-md-auto">
                                                        <div className="avatar-md">
                                                            <div className="avatar-title bg-white rounded-circle">
                                                                <img src={Slack} alt="" className="avatar-xs" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div>
                                                            <h4 className="fw-bold">Syntyce Solutions</h4>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <div>Location : <span className="fw-medium">Damascus, Syria</span></div>
                                                                <div className="vr"></div>
                                                                <div>Website : <span className="fw-medium">www.syntycesolution.com</span></div>
                                                            </div>
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
                                                    className={classnames({ active: activeTab === '2' }, "fw-semibold")}
                                                    onClick={() => { toggleTab('2'); }}
                                                    href="#">
                                                    Documents
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '3' }, "fw-semibold")}
                                                    onClick={() => { toggleTab('3'); }}
                                                    href="#">
                                                    Team
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '4' }, "fw-semibold")}
                                                    onClick={() => { toggleTab('4'); }}
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
                    <Row>
                        <Col xxl={4}>
                            <Info />

                        </Col>
                        <Col xxl={8} >

                            <TabContent activeTab={activeTab} className="pt-4">

                                {/* Overview Tab */}
                                <TabPane tabId="1">
                                    <Overview />
                                </TabPane>

                                {/* Document Tab */}
                                <TabPane tabId="2">
                                    <DocumentsTab />
                                </TabPane>
                               

                                 {/* Team Tab */}
                                <TabPane tabId="3">
                                    <TeamTab />
                                </TabPane>

                                {/* Event Tab */}
                                <TabPane tabId="4">
                                  <EventTab/> 
                                </TabPane>

                                 {/* Offer Services Tab */}
                                
                                <TabPane tabId="5">
                                <OfferServicesTab/>
                                </TabPane>

                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default CompanyOverview;