import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'reactstrap';
import AuthSlider from '../authCarousel';

const ConfirmationPasswReset = () => {
    document.title = "Reset Password | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

    const navigate = useNavigate();

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
                                                <div className="text-center">
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/rhvddzym.json"
                                                        trigger="loop"
                                                        colors="primary:#0ab39c"
                                                        className="avatar-xl"
                                                        style={{ width: "120px", height: "120px" }}>
                                                    </lord-icon>
                                                </div>
                                                <div className='text-center'>
                                                    <h5 className="text-primary">Reset Link Has Been Sent To You</h5>
                                                    <p className="text-muted">Please check your inbox</p>
                                                </div>

                                                <div className="p-2">
                                                    <div className="text-center mt-4">
                                                        <Button
                                                            color="success"
                                                            className="w-100"
                                                            onClick={() => navigate('/password-reset')}
                                                        >
                                                            Send Again
                                                        </Button>
                                                    </div>
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
        </React.Fragment>
    );
};

export default ConfirmationPasswReset;