import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import classnames from "classnames";

import { pricing4, pricing5, pricing6 } from "../../../common/data";

const Pricing = () => {
  //Tab
  const [activeTab, setActiveTab] = useState("1");
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.title =
    "Pricing | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Pricing" pageTitle="Pages" />
          <Row className="justify-content-center mt-4">
            <Col lg={5}>
              <div className="text-center mb-4">
                <h4 className="fw-semibold fs-22">Plans & Pricing</h4>
                <p className="text-muted mb-4 fs-15">
                  Simple pricing. No hidden fees. Advanced features for you
                  business.
                </p>

                <div className="d-inline-flex">
                  <Nav
                    className="nav-pills arrow-navtabs plan-nav rounded mb-3 p-1"
                    id="pills-tab"
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        href="#"
                        className={classnames(
                          { active: activeTab === "1" },
                          "fw-semibold"
                        )}
                        onClick={() => {
                          toggleTab("1");
                        }}
                      >
                        Monthly
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#"
                        className={classnames(
                          { active: activeTab === "2" },
                          "fw-semibold"
                        )}
                        onClick={() => {
                          toggleTab("2");
                        }}
                      >
                        Annually{" "}
                        <span className="badge bg-success">25% Off</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            {(pricing4 || []).map((price4, key) => (
              <Col xxl={3} lg={6} key={key}>
                <Card className="pricing-box ribbon-box right">
                  {price4.ribbon === true ? (
                    <div className="ribbon-two ribbon-two-danger">
                      <span>Popular</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <CardBody className="bg-light m-2 p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-grow-1">
                        <h5 className="mb-0 fw-semibold">{price4.type}</h5>
                      </div>
                      <div className="ms-auto">
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId="1">
                            <h2 className="month mb-0">
                              ${price4.rate}{" "}
                              <small className="fs-13 text-muted">/Month</small>
                            </h2>
                          </TabPane>
                          <TabPane tabId="2">
                            <h2 className="annual mb-0">
                              <small className="fs-16">
                                <del>${price4.delrateYear}</del>
                              </small>{" "}
                              ${price4.rateYear}{" "}
                              <small className="fs-13 text-muted">/Year</small>
                            </h2>
                          </TabPane>
                        </TabContent>
                      </div>
                    </div>

                    <p className="text-muted">{price4.description}</p>
                    <ul className="list-unstyled vstack gap-3">
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>{price4.projects}</b> Projects
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>{price4.Customers}</b> Customers
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Scalable Bandwidth</div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>{price4.FTP}</b> FTP Login
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div
                            className={`flex-shrink-0 text-${price4.supportClass} me-1`}
                          >
                            <i
                              className={`ri-${price4.supportClassSymbol}-circle-fill fs-15 align-middle`}
                            ></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>24/7</b> Support
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div
                            className={`flex-shrink-0 text-${price4.storageClass} me-1`}
                          >
                            <i
                              className={`ri-${price4.storageClassSymbol}-circle-fill fs-15 align-middle`}
                            ></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> Storage
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div
                            className={`flex-shrink-0 text-${price4.domainClass} me-1`}
                          >
                            <i
                              className={`ri-${price4.domainClassSymbol}-circle-fill fs-15 align-middle`}
                            ></i>
                          </div>
                          <div className="flex-grow-1">Domain</div>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-3 pt-2">
                      <Link
                        to="#"
                        className={`btn btn-${price4.planButtonClassname} ${price4.btnstatus} w-100`}
                      >
                        {price4.btntxt}
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="justify-content-center mt-5">
            <Col lg={5}>
              <div className="text-center mb-4 pb-2">
                <h4 className="fw-semibold fs-22">
                  Choose the plan that's right for you
                </h4>
                <p className="text-muted mb-4 fs-15">
                  Simple pricing. No hidden fees. Advanced features for you
                  business.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xl={9}>
              <Row>
                {(pricing5 || []).map((price5, key) => (
                  <Col lg={4} key={key}>
                    <Card className="pricing-box ribbon-box right">
                      {price5.ribbon === true ? (
                        <div className="ribbon-two ribbon-two-danger">
                          <span>Popular</span>
                        </div>
                      ) : (
                        ""
                      )}
                      <CardBody className="p-4 m-2">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <h5 className="mb-1 fw-semibold">{price5.type}</h5>
                            <p className="text-muted mb-0">{price5.purpose}</p>
                          </div>
                          <div className="avatar-sm">
                            <div className="avatar-title bg-light rounded-circle text-primary">
                              <i className={"fs-20 " + price5.icon}></i>
                            </div>
                          </div>
                        </div>
                        <div className="pt-4">
                          <h2>
                            <sup>
                              <small>$ </small>
                            </sup>
                            {price5.rate}
                            <span className="fs-13 text-muted">/Month</span>
                          </h2>
                        </div>
                        <hr className="my-4 text-muted" />
                        <div>
                          <ul className="list-unstyled text-muted vstack gap-3">
                            <li>
                              <div className="d-flex">
                                <div className="flex-shrink-0 text-success me-1">
                                  <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                </div>
                                <div className="flex-grow-1">
                                  Upto <b>{price5.projects}</b> Projects
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <div className="flex-shrink-0 text-success me-1">
                                  <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                </div>
                                <div className="flex-grow-1">
                                  Upto <b>{price5.Customers}</b> Customers
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <div className="flex-shrink-0 text-success me-1">
                                  <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                </div>
                                <div className="flex-grow-1">
                                  Scalable Bandwidth
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <div className="flex-shrink-0 text-success me-1">
                                  <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                </div>
                                <div className="flex-grow-1">
                                  <b>{price5.FTP}</b> FTP Login
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <div
                                  className={`flex-shrink-0 text-${price5.supportClass} me-1`}
                                >
                                  <i
                                    className={`ri-${price5.supportClassSymbol}-circle-fill fs-15 align-middle`}
                                  ></i>
                                </div>
                                <div className="flex-grow-1">
                                  <b>24/7</b> Support
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <div
                                  className={`flex-shrink-0 text-${price5.storageClass} me-1`}
                                >
                                  <i
                                    className={`ri-${price5.storageClassSymbol}-circle-fill fs-15 align-middle`}
                                  ></i>
                                </div>
                                <div className="flex-grow-1">
                                  <b>Unlimited</b> Storage
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <div
                                  className={`flex-shrink-0 text-${price5.domainClass} me-1`}
                                >
                                  <i
                                    className={`ri-${price5.domainClassSymbol}-circle-fill fs-15 align-middle`}
                                  ></i>
                                </div>
                                <div className="flex-grow-1">Domain</div>
                              </div>
                            </li>
                          </ul>
                          <div className="mt-4">
                            <Link
                              to="#"
                              className={`btn btn-${price5.planButtonClassname} w-100 waves-effect waves-light`}
                            >
                              {price5.btntxt}
                            </Link>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col lg={4}>
              <div className="text-center mb-4 pb-2">
                <h4 className="fw-semibold fs-22">Simple Pricing Plan</h4>
                <p className="text-muted mb-4 fs-15">
                  Simple pricing. No hidden fees. Advanced features for you
                  business.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {(pricing6 || []).map((price6, key) => (
              <Col lg={6} key={key}>
                <Card className="pricing-box ribbon-box ribbon-fill text-center">
                  {price6.ribbon === true ? (
                    <div className="ribbon ribbon-primary">New</div>
                  ) : (
                    ""
                  )}
                  <Row className="g-0">
                    <Col lg={6}>
                      <CardBody className="h-100">
                        <div>
                          <h5 className="mb-1">{price6.type}</h5>
                          <p className="text-muted">{price6.purpose}</p>
                        </div>

                        <div className="py-4">
                          <h2>
                            <sup>
                              <small>$</small>
                            </sup>
                            {price6.rate}
                            <span className="fs-13 text-muted">
                              {" "}
                              /Per month
                            </span>
                          </h2>
                        </div>

                        <div className="text-center plan-btn mt-2">
                          <Link
                            to="#"
                            className="btn btn-success w-sm waves-effect waves-light"
                          >
                            Sign up
                          </Link>
                        </div>
                      </CardBody>
                    </Col>
                    <Col lg={6}>
                      <CardBody className="border-start mt-4 mt-lg-0">
                        <CardHeader className="bg-light">
                          <h5 className="fs-15 mb-0">Plan Features:</h5>
                        </CardHeader>
                        <CardBody className="pb-0">
                          <ul className="list-unstyled vstack gap-3 mb-0">
                            <li>
                              Users:{" "}
                              <span className="text-success fw-semibold">
                                {price6.users}
                              </span>
                            </li>
                            <li>
                              Storage:{" "}
                              <span className="text-success fw-semibold">
                                {price6.storage} GB
                              </span>
                            </li>
                            <li>
                              Domain:{" "}
                              <span className="text-success fw-semibold">
                                {price6.domain}
                              </span>
                            </li>
                            <li>
                              Support:{" "}
                              <span className="text-success fw-semibold">
                                {price6.support}
                              </span>
                            </li>
                          </ul>
                        </CardBody>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Pricing;
