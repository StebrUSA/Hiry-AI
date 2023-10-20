import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col, Container, Input, Label, Row, Button, Form } from 'reactstrap';
import AuthSlider from '../authCarousel';
import googleImg from '../../../assets/images/brands/google.png';

//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CoverSignIn = () => {
    document.title = "SignIn | Velzon - React Admin & Dashboard Template";

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            username: "",
            password: "",
        },
        // validationSchema: Yup.object({
        //     password: Yup.string()
        //         .min(8, 'Password must be at least 8 characters')
        //         .matches(RegExp('(.*[a-z].*)'), 'At least lowercase letter')
        //         .matches(RegExp('(.*[A-Z].*)'), 'At least uppercase letter')
        //         .matches(RegExp('(.*[0-9].*)'), 'At least one number')
        //         .required("This field is required"),
        // }),
        onSubmit: (values) => {
            const fakeResponse = {
                data: {id: "63e9befc9e3dbc5ba9a47087", first_name: values?.username || "USERNAME"},
                status: "success",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            }
            sessionStorage.setItem("authUser", JSON.stringify(fakeResponse));
            window.location.href = '/dashboard';
        }
    });

    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden">
                                    <Row className="g-0">
                                        <AuthSlider />

                                        <Col lg={6}>
                                            <div className="p-lg-5 p-4">
                                                <div>
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p className="text-muted">Sign in to continue to HIRY AI</p>
                                                </div>

                                                <div className="mt-4">
                                                    <Form onSubmit={validation.handleSubmit} noValidate action="index">

                                                        <div className="mb-3">
                                                            <Label htmlFor="username" className="form-label">Username</Label>
                                                            <Input type="text" className="form-control" id="username" placeholder="Enter username" name="username" value={validation.values.username} onChange={validation.handleChange} />
                                                        </div>

                                                        <div className="mb-3">
                                                            <div className="float-end">
                                                                <Link to="/auth-pass-reset-cover" className="text-muted">Forgot password?</Link>
                                                            </div>
                                                            <Label className="form-label" htmlFor="password-input">Password</Label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <Input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" name="password" value={validation.values.password} onChange={validation.handleChange} />
                                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                            </div>
                                                        </div>

                                                        <div className="form-check">
                                                            <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                            <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Button color="dark" className="w-100" type="submit">Sign In</Button>
                                                        </div>

                                                        <div className="mt-4 text-center">
                                                            <div className="signin-other-title">
                                                                {/* <h5 className="fs-13 mb-4 title">Sign In with</h5> */}
                                                                <h5 className="fs-13 mb-4 title">OR</h5>
                                                            </div>

                                                            <div style={{ display:'flex', justifyContent:'center', width:'100%', border:'1px solid #eee'}}>
                                                                <Button
                                                                    style={{display:'flex', alignItems:'center', backgroundColor:'#fff', color:'black', outline:'none', border:'none'}}
                                                                >
                                                                    <img height="37.5px" width="37.5px" src={googleImg} alt="image not available" style={{marginRight:'10px'}} />
                                                                   <p style={{margin:0, padding:0}}> Sign In With Google</p>                                                                  
                                                                </Button>
                                                            </div>
                                                        </div>

                                                    </Form>
                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p className="mb-0">Don't have an account ? <a href="/register" className="fw-semibold text-primary text-decoration-underline"> Signup</a> </p>
                                                    {/* <p className="mb-0">Don't have an account ? <a href="/auth-signup-cover" className="fw-semibold text-primary text-decoration-underline"> Signup</a> </p> */}
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

export default CoverSignIn;