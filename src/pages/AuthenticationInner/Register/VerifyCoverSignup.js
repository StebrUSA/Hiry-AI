import React from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import Loader from '../../../Components/Common/Loader';

//import images
import AuthSlider from '../authCarousel';

const VerifyCoverSignup = () => {
    document.title = "Registration Email Verification | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden">
                                    <Row className="justify-content-center g-0">
                                        <AuthSlider />
                                        <Col lg={6}>
                                            <div className="p-lg-5 p-4">
                                                <div className="mb-4">
                                                    <div className="avatar-md mx-auto">
                                                        <div className="avatar-title bg-light text-primary display-0 rounded-circle">
                                                            {/* <i className="ri-loader-fill"></i> */}
                                                            <Loader />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-muted text-center mx-lg-3">
                                                    <h4 className="">Processing email verification...</h4>
                                                    <p>Please wait while verification is going on</p>
                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <footer className="footer">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center">
                                    <p className="mb-0">&copy; {new Date().getFullYear()} Hiry. Crafted with <i className="mdi mdi-heart text-danger"></i> by Stebr, California</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </React.Fragment >
    );
};

export default VerifyCoverSignup;