import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';

//import images
import avatar8 from "../../../../assets/images/users/avatar-8.jpg";
import avatar10 from "../../../../assets/images/users/avatar-10.jpg";
import avatar6 from "../../../../assets/images/users/avatar-6.jpg";
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import image4 from "../../../../assets/images/small/img-4.jpg";
import image5 from "../../../../assets/images/small/img-5.jpg";

//SimpleBar
import SimpleBar from "simplebar-react";

const membersListData = [{ imageUrl: avatar2, name: 'Nancy Martino', id: 1 },
{ imageUrl: '', name: 'Henry Baird', id: 2 },
{ imageUrl: "../../../../assets/images/users/avatar-3.jpg", name: 'Frank Hook', id: 3 },
{ imageUrl: "../../../../assets/images/users/avatar-4.jpg", name: 'Jennifer Carter', id: 4 },
{ imageUrl: '', name: 'Alexis Clarke', id: 5 },
{ imageUrl: '', name: 'Joseph Josheph', id: 5 },

]

const OverviewTab = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={9} lg={8}>
                    <Card>
                        <CardBody>
                            <div className="text-muted">
                                <h6 className="mb-3 fw-semibold text-uppercase">Summary</h6>
                                <p>A company incurs fixed and variable costs such as the purchase of raw materials, salaries and overhead, as explained by AccountingTools, Inc. Business owners have the discretion to determine the actions.</p>
                                <h6 className="mb-3 fw-semibold text-uppercase">About company</h6>
                                <p>Established in 2009, the company has ever since been a hub of brilliance providing top-tier dental services in its modern high-tech clinic environment. Delivering excellence through the gentle hands of their expert staff in European Istanbul, they have proudly made thousands of smiles all over the world. With “Life is in Your Smile” as its slogan and the forefront of its mission, the company has successfully expanded out by launching a branch in Den Haag of the Netherlands in early 2020. Offering nearly a full range of dentistry treatments the company has become the sought-after address for patients from all over the world.</p>
                                <div className="text-muted">
                                    <h5 className="mb-3">Services offered</h5>
                                    <ul className="text-muted vstack gap-2">
                                        <li>
                                            Custom Software Development.
                                        </li>
                                        <li>
                                            Web Application Development.
                                        </li>
                                        <li>Mobile Application Development.</li>
                                        <li>
                                            IT Consulting.
                                        </li>
                                        <li>
                                            Software Prototyping.
                                        </li>
                                        <li>Platform Selection.</li>
                                        <li>Hire a Reliable Software Company</li>
                                    </ul>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-link link-success p-0">Read more</button>
                                </div>

                                <div className="pt-3 border-top border-top-dashed mt-4">
                                    <Row>

                                        <Col lg={3} sm={6}>
                                            <div>
                                                <p className="mb-2 text-uppercase fw-medium">Established Date :</p>
                                                <h5 className="fs-15 mb-0">02 June, 2012</h5>
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div>
                                                <p className="mb-2 text-uppercase fw-medium">Employee Size:</p>
                                                <h5 className="fs-15 mb-0">50-200</h5>
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div>
                                                <p className="mb-2 text-uppercase fw-medium">Industry Type :</p>
                                                <h5 className="fs-15 mb-0">Software Industry</h5>
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div>
                                                <p className="mb-2 text-uppercase fw-medium">Contact Email :</p>
                                                <h5 className="fs-15 mb-0">info@syntycesolution.com</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Comments</h4>
                            <div className="flex-shrink-0">
                                <UncontrolledDropdown className="card-header-dropdown">
                                    <DropdownToggle tag="a" className="text-reset dropdown-btn" href="#">
                                        <span className="text-muted">Recent<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>Recent</DropdownItem>
                                        <DropdownItem>Top Rated</DropdownItem>
                                        <DropdownItem>Previous</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </CardHeader>

                        <CardBody>

                            <SimpleBar style={{ height: "300px" }} className="px-3 mx-n3 mb-2">
                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0">
                                        <img src={avatar8} alt="" className="avatar-xs rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="fs-13">Joseph Parker <small className="text-muted ms-2">20 Dec 2021 - 05:47AM</small></h5>
                                        <p className="text-muted">I am getting message from customers that when they place order always get error message .</p>
                                        <Link to="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0">
                                                <img src={avatar10} alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="fs-13">Alexis Clarke <small className="text-muted ms-2">22 Dec 2021 - 02:32PM</small></h5>
                                                <p className="text-muted">Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam.</p>
                                                <Link to="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0">
                                        <img src={avatar6} alt="" className="avatar-xs rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="fs-13">Donald Palmer <small className="text-muted ms-2">24 Dec 2021 - 05:20PM</small></h5>
                                        <p className="text-muted">If you have further questions, please contact Customer Support from the “Action Menu” on your <Link to="#" className="text-decoration-underline">Online Order Support</Link>.</p>
                                        <Link to="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <img src={avatar10} alt="" className="avatar-xs rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="fs-13">Alexis Clarke <small className="text-muted ms-2">26 min ago</small></h5>
                                        <p className="text-muted">Your <Link to="#" className="text-decoration-underline">Online Order Support</Link> provides you with the most current status of your order. To help manage your order refer to the “Action Menu” to initiate return, contact Customer Support and more.</p>
                                        <Row className="g-2 mb-3">
                                            <div className="col-lg-1 col-sm-2 col-6">
                                                <img src={image4} alt="" className="img-fluid rounded" />
                                            </div>
                                            <div className="col-lg-1 col-sm-2 col-6">
                                                <img src={image5} alt="" className="img-fluid rounded" />
                                            </div>
                                        </Row>
                                        <Link to="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0">
                                                <img src={avatar6} alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="fs-13">Donald Palmer <small className="text-muted ms-2">8 sec ago</small></h5>
                                                <p className="text-muted">Other shipping methods are available at checkout if you want your purchase delivered faster.</p>
                                                <Link to="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SimpleBar>
                            <form className="mt-4">
                                <Row className="g-3">
                                    <Col xs={12} >
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label text-body">Leave a Comments</label>
                                        <textarea className="form-control bg-light border-light" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your comment..."></textarea>
                                    </Col>
                                    <Col xs={12} className="text-end">
                                        <button type="button" className="btn btn-ghost-secondary btn-icon waves-effect me-1"><i className="ri-attachment-line fs-16"></i></button>
                                        <Link to="#" className="btn btn-success">Post Comments</Link>
                                    </Col>
                                </Row>
                            </form>
                        </CardBody>

                    </Card>

                </Col>

                <Col xl={3} lg={4}>
                    <Card>
                        <CardBody>
                            <h5 className="card-title mb-4">Skills</h5>
                            <div className="d-flex flex-wrap gap-2 fs-16">
                                <div className="badge fw-medium badge-soft-secondary">UI/UX</div>
                                <div className="badge fw-medium badge-soft-secondary">Figma</div>
                                <div className="badge fw-medium badge-soft-secondary">HTML</div>
                                <div className="badge fw-medium badge-soft-secondary">CSS</div>
                                <div className="badge fw-medium badge-soft-secondary">Javascript</div>
                                <div className="badge fw-medium badge-soft-secondary">C#</div>
                                <div className="badge fw-medium badge-soft-secondary">Nodejs</div>
                            </div>
                        </CardBody>

                    </Card>


                    <Card>
                        <CardHeader className="align-items-center d-flex border-bottom-dashed">
                            <h4 className="card-title mb-0 flex-grow-1">Members</h4>
                            <div className="flex-shrink-0">
                                <button type="button" className="btn btn-soft-danger btn-sm" data-bs-toggle="modal" data-bs-target="#inviteMembersModal"><i className="ri-share-line me-1 align-bottom"></i> Invite Member</button>
                            </div>
                        </CardHeader>

                        <CardBody>
                            <SimpleBar data-simplebar style={{ height: "235px" }} className="mx-n3 px-3">
                                <div className="vstack gap-3">
                                    {membersListData.map((item, index) => {
                                        return (
                                            <div className="d-flex align-items-center" key={index}>
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    {item.imageUrl ?
                                                        <img src={avatar2} alt="" className="img-fluid rounded-circle" />
                                                        :
                                                        <div className="avatar-title bg-soft-danger text-danger rounded-circle">
                                                            {item.name.split(' ').map(function (item) { return item[0] }).join('')}
                                                        </div>
                                                    }
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-13 mb-0"><Link to="#" className="text-body d-block">{item.name}</Link></h5>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <button type="button" className="btn btn-light btn-sm">Message</button>
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle type="button" className="btn btn-icon btn-sm fs-16 text-muted dropdown" tag="button">
                                                                <i className="ri-more-fill"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <li><DropdownItem><i className="ri-eye-fill text-muted me-2 align-bottom"></i>View</DropdownItem></li>
                                                                <li><DropdownItem><i className="ri-star-fill text-muted me-2 align-bottom"></i>Favourite</DropdownItem></li>
                                                                <li><DropdownItem><i className="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete</DropdownItem></li>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </SimpleBar>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default OverviewTab;